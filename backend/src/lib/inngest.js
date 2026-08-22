import { Inngest } from "inngest";
import { connectDB } from "./db.js";
import User from "../models/User.js";

export const inngest = new Inngest({ id: "talent-iq" });

const syncUser = inngest.createFunction(
  { id: "sync-user" },
  { event: "clerk/user.created" },

  async ({ event }) => {
    try {
      console.log("🔥 syncUser started");

      await connectDB();
      console.log("✅ MongoDB connected inside Inngest");

      const {
        id,
        email_addresses,
        first_name,
        last_name,
        image_url,
      } = event.data;

      const userData = {
        clerkId: id,
        email: email_addresses?.[0]?.email_address,
        name: `${first_name || ""} ${last_name || ""}`.trim(),
        profileImage: image_url,
      };

      console.log("👤 User data:", userData);

      const user = await User.findOneAndUpdate(
        { clerkId: id },
        userData,
        {
          new: true,
          upsert: true,
        }
      );

      console.log("✅ USER SAVED IN MONGODB:", user);

      return {
        success: true,
        userId: user.clerkId,
      };

    } catch (error) {
      console.error("❌ SYNC USER ERROR:", error);
      throw error;
    }
  }
);

export const functions = [syncUser];