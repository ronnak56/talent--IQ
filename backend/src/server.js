import express from "express";
import cors from "cors";
import { serve } from "inngest/express";
import { clerkMiddleware } from "@clerk/express";

import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { inngest, functions } from "./lib/inngest.js";

import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoute.js";
import webhookRoutes from "./routes/webhookRoutes.js";
import codeRoutes from "./routes/codeRoutes.js";

const app = express();

// ===============================
// Clerk Webhook
// ===============================
app.use("/api/webhooks", webhookRoutes);

// ===============================
// Middleware
// ===============================
app.use(express.json());

app.use(
  cors({
    origin: ENV.CLIENT_URL,
    credentials: true,
  })
);

// ===============================
// Code Routes
// ===============================
app.use("/api/code", codeRoutes);

// ===============================
// Clerk Authentication
// ===============================
app.use(clerkMiddleware());

// ===============================
// Inngest
// ===============================
app.use(
  "/api/inngest",
  serve({
    client: inngest,
    functions,
  })
);

// ===============================
// API Routes
// ===============================
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);

// ===============================
// Health Check
// ===============================
app.get("/health", (req, res) => {
  res.status(200).json({
    msg: "API is up and running",
  });
});

// ===============================
// Start Server
// ===============================
const startServer = async () => {
  try {
    await connectDB();

    app.listen(ENV.PORT, () => {
      console.log("Server is running on port:", ENV.PORT);
    });
  } catch (error) {
    console.error("💥 Error starting the server:", error);
  }
};

startServer();