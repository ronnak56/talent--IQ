import express from "express";
import { verifyWebhook } from "@clerk/express/webhooks";
import { inngest } from "../lib/inngest.js";

const router = express.Router();

router.post(
  "/clerk",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    try {
      const evt = await verifyWebhook(req);

      console.log("Clerk webhook received:", evt.type);

      await inngest.send({
        name: `clerk/${evt.type}`,
        data: evt.data,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Webhook error:", error);
      res.status(400).json({ message: "Invalid webhook" });
    }
  }
);

export default router;