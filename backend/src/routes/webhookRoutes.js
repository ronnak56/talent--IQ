import express from "express";
import { verifyWebhook } from "@clerk/express/webhooks";
import { inngest } from "../lib/inngest.js";

const router = express.Router();

router.post(
  "/clerk",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    try {
      console.log("📩 Clerk webhook received");

      const evt = await verifyWebhook(req);

      console.log("📌 Event type:", evt.type);

      await inngest.send({
        name: `clerk/${evt.type}`,
        data: evt.data,
      });

      console.log("✅ Event sent to Inngest");

      return res.status(200).json({
        success: true,
      });
    } catch (error) {
      console.error("❌ Webhook error:", error);

      return res.status(400).json({
        success: false,
        message: "Invalid webhook",
        error: error.message,
      });
    }
  }
);

export default router;