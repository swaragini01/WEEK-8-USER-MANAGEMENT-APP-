import exp from "express";
import { connect } from "mongoose";
import { config } from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { UserApp } from "./APIs/UserAPI.js";

config();

const app = exp();
const port = process.env.PORT || 4001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendDistPath = path.join(__dirname, "..", "frontend", "dist");

app.use(
  cors({
    origin:
      process.env.CLIENT_ORIGIN ||
      "http://localhost:5174",
    credentials: true,
  })
);

app.use(exp.json());

// Routes
app.use("/user-api", UserApp);

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

// Production Static Files
if (process.env.NODE_ENV === "production") {
  app.use(exp.static(frontendDistPath));

  app.get(/^(?!\/user-api|\/health).*/, (req, res) => {
    res.sendFile(path.join(frontendDistPath, "index.html"));
  });
}

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Error Log:", err);

  if (err.message === "CORS origin is not allowed") {
    return res.status(403).json({ message: err.message });
  }

  if (err.name === "ValidationError") {
    return res.status(400).json({ message: "Validation failed", errors: err.errors });
  }

  if (err.code === 11000) {
    return res.status(409).json({ message: "User or data already exists" });
  }

  res.status(500).json({
    message: err.message || "Internal Server Error",
  });
});

async function connectDB() {
  try {
    if (!process.env.DB_URL) {
      throw new Error("DB_URL is missing in .env file");
    }

    await connect(process.env.DB_URL);
    console.log("✅ Connected to MongoDB");
    app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
  } catch (err) {
    console.error("❌ DB Connection Error:", err.message);
    process.exit(1); // Stop server if DB fails
  }
}

connectDB();