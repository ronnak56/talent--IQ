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

// Clerk webhook MUST come before express.json()
app.use("/api/webhooks", webhookRoutes);

app.use(express.json());

app.use(
  cors({
    origin: ENV.CLIENT_URL,
    credentials: true,
  })
);

app.use(clerkMiddleware());

app.use("/api/code", codeRoutes);

app.use(
  "/api/inngest",
  serve({
    client: inngest,
    functions,
  })
);

app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({
    msg: "API is up and running",
  });
});

const startServer = async () => {
  try {
    await connectDB();

    app.listen(ENV.PORT, "0.0.0.0", () => {
      console.log("Server is running on port:", ENV.PORT);
    });
  } catch (error) {
    console.error("💥 Error starting server:", error);
  }
};

startServer();