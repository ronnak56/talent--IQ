import { chatClient, streamClient } from "../lib/stream.js";
import Session from "../models/Session.js";

// =====================================================
// CREATE SESSION
// =====================================================
export async function createSession(req, res) {
  try {
    const { problem, difficulty } = req.body;

    const userId = req.user._id;
    const clerkId = req.user.clerkId;
    const userName = req.user.name;
    const userImage = req.user.profileImage;

    if (!problem || !difficulty) {
      return res.status(400).json({
        message: "Problem and difficulty are required",
      });
    }

    // -------------------------------------------------
    // Make sure host exists in Stream
    // -------------------------------------------------
    await chatClient.upsertUser({
      id: clerkId,
      name: userName,
      image: userImage || "",
    });

    // -------------------------------------------------
    // Generate unique Stream call ID
    // -------------------------------------------------
    const callId = `session_${Date.now()}_${Math.random()
      .toString(36)
      .substring(2, 10)}`;

    // -------------------------------------------------
    // Create MongoDB session
    // -------------------------------------------------
    const session = await Session.create({
      problem,
      difficulty,
      host: userId,
      callId,
    });

    try {
      // -------------------------------------------------
      // Create Stream video call
      // -------------------------------------------------
      const call = streamClient.video.call("default", callId);

      await call.getOrCreate({
        data: {
          created_by_id: clerkId,
          custom: {
            problem,
            difficulty,
            sessionId: session._id.toString(),
          },
        },
      });

      console.log("✅ Stream video call created:", callId);

      // -------------------------------------------------
      // Create Stream chat channel
      // -------------------------------------------------
      const channel = chatClient.channel("messaging", callId, {
        name: `${problem} Session`,
        created_by_id: clerkId,
        members: [clerkId],
      });

      await channel.create();

      console.log("✅ Stream chat channel created:", callId);

      // -------------------------------------------------
      // Success
      // -------------------------------------------------
      return res.status(201).json({
        success: true,
        session,
      });
    } catch (streamError) {
      console.error(
        "❌ Stream error while creating session:",
        streamError
      );

      // If Stream fails, remove MongoDB session
      await Session.findByIdAndDelete(session._id);

      return res.status(500).json({
        success: false,
        message: "Failed to create Stream room",
        error: streamError.message,
      });
    }
  } catch (error) {
    console.error("❌ Error in createSession:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
}

// =====================================================
// GET ACTIVE SESSIONS
// =====================================================
export async function getActiveSessions(req, res) {
  try {
    const sessions = await Session.find({
      status: "active",
    })
      .populate("host", "name profileImage email clerkId")
      .populate("participant", "name profileImage email clerkId")
      .sort({ createdAt: -1 })
      .limit(20);

    return res.status(200).json({
      success: true,
      sessions,
    });
  } catch (error) {
    console.error("❌ Error in getActiveSessions:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

// =====================================================
// GET MY RECENT SESSIONS
// =====================================================
export async function getMyRecentSessions(req, res) {
  try {
    const userId = req.user._id;

    const sessions = await Session.find({
      status: "completed",
      $or: [
        { host: userId },
        { participant: userId },
      ],
    })
      .populate("host", "name profileImage email clerkId")
      .populate("participant", "name profileImage email clerkId")
      .sort({ createdAt: -1 })
      .limit(20);

    return res.status(200).json({
      success: true,
      sessions,
    });
  } catch (error) {
    console.error("❌ Error in getMyRecentSessions:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

// =====================================================
// GET SESSION BY ID
// =====================================================
export async function getSessionById(req, res) {
  try {
    const { id } = req.params;

    const session = await Session.findById(id)
      .populate("host", "name email profileImage clerkId")
      .populate("participant", "name email profileImage clerkId");

    if (!session) {
      return res.status(404).json({
        success: false,
        message: "Session not found",
      });
    }

    return res.status(200).json({
      success: true,
      session,
    });
  } catch (error) {
    console.error("❌ Error in getSessionById:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

// =====================================================
// JOIN SESSION
// =====================================================
export async function joinSession(req, res) {
  try {
    const { id } = req.params;

    const userId = req.user._id;
    const clerkId = req.user.clerkId;

    const userName = req.user.name;
    const userImage = req.user.profileImage;

    // -------------------------------------------------
    // Find session
    // -------------------------------------------------
    const session = await Session.findById(id);

    if (!session) {
      return res.status(404).json({
        success: false,
        message: "Session not found",
      });
    }

    // -------------------------------------------------
    // Check session status
    // -------------------------------------------------
    if (session.status !== "active") {
      return res.status(400).json({
        success: false,
        message: "Cannot join a completed session",
      });
    }

    // -------------------------------------------------
    // Host cannot join own session
    // -------------------------------------------------
    if (session.host.toString() === userId.toString()) {
      return res.status(400).json({
        success: false,
        message: "Host cannot join their own session as participant",
      });
    }

    // -------------------------------------------------
    // Check if session is full
    // -------------------------------------------------
    if (session.participant) {
      return res.status(409).json({
        success: false,
        message: "Session is full",
      });
    }

    // -------------------------------------------------
    // Make sure participant exists in Stream
    // -------------------------------------------------
    await chatClient.upsertUser({
      id: clerkId,
      name: userName,
      image: userImage || "",
    });

    // -------------------------------------------------
    // Add participant to MongoDB
    // -------------------------------------------------
    session.participant = userId;
    await session.save();

    // -------------------------------------------------
    // Add participant to chat
    // -------------------------------------------------
    const channel = chatClient.channel(
      "messaging",
      session.callId
    );

    await channel.addMembers([clerkId]);

    console.log("✅ User joined session:", clerkId);

    return res.status(200).json({
      success: true,
      session,
    });
  } catch (error) {
    console.error("❌ Error in joinSession:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
}

// =====================================================
// END SESSION
// =====================================================
export async function endSession(req, res) {
  try {
    const { id } = req.params;

    const userId = req.user._id;

    const session = await Session.findById(id);

    if (!session) {
      return res.status(404).json({
        success: false,
        message: "Session not found",
      });
    }

    // -------------------------------------------------
    // Only host can end session
    // -------------------------------------------------
    if (session.host.toString() !== userId.toString()) {
      return res.status(403).json({
        success: false,
        message: "Only the host can end the session",
      });
    }

    // -------------------------------------------------
    // Already completed
    // -------------------------------------------------
    if (session.status === "completed") {
      return res.status(400).json({
        success: false,
        message: "Session is already completed",
      });
    }

    // -------------------------------------------------
    // Delete Stream video call
    // -------------------------------------------------
    try {
      const call = streamClient.video.call(
        "default",
        session.callId
      );

      await call.delete({
        hard: true,
      });

      console.log("✅ Stream video call deleted");
    } catch (streamError) {
      console.error(
        "⚠️ Error deleting Stream video call:",
        streamError.message
      );
    }

    // -------------------------------------------------
    // Delete Stream chat channel
    // -------------------------------------------------
    try {
      const channel = chatClient.channel(
        "messaging",
        session.callId
      );

      await channel.delete();

      console.log("✅ Stream chat channel deleted");
    } catch (chatError) {
      console.error(
        "⚠️ Error deleting Stream chat:",
        chatError.message
      );
    }

    // -------------------------------------------------
    // Mark session completed
    // -------------------------------------------------
    session.status = "completed";

    await session.save();

    return res.status(200).json({
      success: true,
      session,
      message: "Session ended successfully",
    });
  } catch (error) {
    console.error("❌ Error in endSession:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
}