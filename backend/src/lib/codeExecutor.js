import { ENV } from "./env.js";

const ONECOMPILER_API = "https://api.onecompiler.com/v1/run";

const LANGUAGE_CONFIG = {
  javascript: {
    language: "javascript",
    extension: "js",
  },

  python: {
    language: "python",
    extension: "py",
  },

  java: {
    language: "java",
    extension: "java",
  },

  cpp: {
    language: "cpp",
    extension: "cpp",
  },
};

export async function executeCode(language, code, stdin = "") {
  try {
    // Check language
    const config = LANGUAGE_CONFIG[language];

    if (!config) {
      return {
        success: false,
        error: `Unsupported language: ${language}`,
      };
    }

    // Check API key
    if (!ENV.ONECOMPILER_API_KEY) {
      return {
        success: false,
        error: "OneCompiler API key is missing",
      };
    }

    // Send code to OneCompiler
    const response = await fetch(ONECOMPILER_API, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "X-API-Key": ENV.ONECOMPILER_API_KEY,
      },

      body: JSON.stringify({
        language: config.language,
        stdin: stdin,

        files: [
          {
            name: `main.${config.extension}`,
            content: code,
          },
        ],
      }),
    });

    const data = await response.json();

    // Debug information
    console.log("OneCompiler status:", response.status);
    console.log("OneCompiler response:", data);

    // API error
    if (!response.ok || data.status === "failed") {
      return {
        success: false,
        error:
          data.error ||
          data.message ||
          `OneCompiler API error: ${response.status}`,
      };
    }

    // Compilation/runtime error
    if (data.stderr || data.exception) {
      return {
        success: false,
        output: data.stdout || "",
        error: data.stderr || data.exception,
      };
    }

    // Successful execution
    return {
      success: true,
      output: data.stdout || "No output",
    };
  } catch (error) {
    console.error("Code execution error:", error);

    return {
      success: false,
      error: `Code execution failed: ${error.message}`,
    };
  }
}