import { Inngest } from "inngest";
import { connectDB } from "./db.js";
import User from "../models/User.js";
import { deleteStreamUser, upsertStreamUser } from "./stream.js";
import { ENV } from "./env.js";

export const inngest = new Inngest({
  id: "talent-iq",
  eventKey: ENV.INNGEST_EVENT_KEY,
  signingKey: ENV.INNGEST_SIGNING_KEY,
});

// CREATE / SYNC USER
const syncUser = inngest.createFunction(
  {
    id: "sync-user",
  },
  {
    event: "clerk/user.created",
  },
  async ({ event }) => {
    try {
      console.log("🚀 Inngest sync-user started");

      await connectDB();

      const {
        id,
        email_addresses,
        first_name,
        last_name,
        image_url,
      } = event.data;

      const email = email_addresses?.[0]?.email_address;

      const name = `${first_name || ""} ${last_name || ""}`.trim();

      console.log("👤 Syncing user:", email);

      // Check if user already exists by Clerk ID OR email
      let user = await User.findOne({
        $or: [
          { clerkId: id },
          { email: email },
        ],
      });

      // If user already exists, update the existing user
      if (user) {
        console.log("⚠️ User already exists. Updating:", email);

        user.clerkId = id;
        user.email = email;
        user.name = name;
        user.profileImage = image_url || "";

        await user.save();

        console.log("✅ Existing user updated:", user.email);
      } 
      // Otherwise create a new user
      else {
        user = await User.create({
          clerkId: id,
          email: email,
          name: name,
          profileImage: image_url || "",
        });

        console.log("✅ New user created:", user.email);
      }

      // Sync user with Stream
      await upsertStreamUser({
        id: user.clerkId.toString(),
        name: user.name,
        image: user.profileImage,
      });

      console.log("✅ User synced to Stream");

    } catch (error) {
      console.error("❌ Error syncing user:", error);
      throw error;
    }
  }
);

// DELETE USER
const deleteUserFromDB = inngest.createFunction(
  {
    id: "delete-user-from-db",
  },
  {
    event: "clerk/user.deleted",
  },
  async ({ event }) => {
    try {
      console.log("🗑️ Inngest delete-user started");

      await connectDB();

      const { id } = event.data;

      // Delete user from MongoDB
      await User.deleteOne({
        clerkId: id,
      });

      console.log("✅ User deleted from MongoDB:", id);

      // Delete user from Stream
      await deleteStreamUser(id.toString());

      console.log("✅ User deleted from Stream");

    } catch (error) {
      console.error("❌ Error deleting user:", error);
      throw error;
    }
  }
);

// Export all Inngest functions
export const functions = [
  syncUser,
  deleteUserFromDB,
];