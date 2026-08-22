import { getAuth } from "@clerk/express";
import User from "../models/User.js";

export const protectRoute = async (req, res, next) => {
  try {
    const { isAuthenticated, userId } = getAuth(req);

    console.log("========== CLERK AUTH ==========");
    console.log("isAuthenticated:", isAuthenticated);
    console.log("userId:", userId);
    console.log("================================");

    if (!isAuthenticated || !userId) {
      return res.status(401).json({
        message: "Unauthorized - Please login",
      });
    }

    const user = await User.findOne({ clerkId: userId });

    console.log("MongoDB user:", user);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    console.error("Error in protectRoute middleware:", error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};