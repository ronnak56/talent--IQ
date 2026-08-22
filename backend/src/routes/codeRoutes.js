import express from "express";
import { executeCode } from "../lib/codeExecutor.js";

const router = express.Router();

router.post("/execute", async (req, res) => {
  try {
    const { language, code, stdin } = req.body;

    if (!language || !code) {
      return res.status(400).json({
        success: false,
        error: "Language and code are required",
      });
    }

    const result = await executeCode(language, code, stdin || "");

    res.json(result);
  } catch (error) {
    console.error("Code execution error:", error);

    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
});

export default router;