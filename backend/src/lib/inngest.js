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

// CREATE USER
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

      console.log("👤 Creating user:", email);

      const existingUser = await User.findOne({
        clerkId: id,
      });

      if (existingUser) {
        console.log("⚠️ User already exists:", id);
        return;
      }

      const newUser = await User.create({
        clerkId: id,
        email,
        name,
        profileImage: image_url,
      });

      console.log("✅ User saved to MongoDB:", newUser.email);

      await upsertStreamUser({
        id: newUser.clerkId.toString(),
        name: newUser.name,
        image: newUser.profileImage,
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

      await User.deleteOne({
        clerkId: id,
      });

      console.log("✅ User deleted from MongoDB:", id);

      await deleteStreamUser(id.toString());

      console.log("✅ User deleted from Stream");
    } catch (error) {
      console.error("❌ Error deleting user:", error);
      throw error;
    }
  }
);

export const functions = [
  syncUser,
  deleteUserFromDB,
];