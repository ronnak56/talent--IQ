import { getAuth } from "@clerk/express";
import User from "../models/User.js";

export const protectRoute = async (req, res, next) => {
  try {
    const { isAuthenticated, userId } = getAuth(req);

    // User is not logged in
    if (!isAuthenticated || !userId) {
      return res.status(401).json({
        message: "Unauthorized - Please login",
      });
    }

    // Find user in MongoDB
    const user = await User.findOne({ clerkId: userId });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Attach MongoDB user to request
    req.user = user;

    next();
  } catch (error) {
    console.error("Error in protectRoute middleware:", error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};git add . && git commit -m "fix Clerk API authentication" && git push
