import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Load environment variables
dotenv.config();

const app = express();

// ✅ CORS FIX
app.use(
  cors({
    origin: ["http://localhost:5173", "https://devtinder-main.onrender.com"], // allow local + deployed frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // allow cookies/session
  })
);

app.use(express.json());

// ✅ MongoDB Connection
const connectDB = async () => {
  try {
    if (!process.env.DATABASE_URL) {
      throw new Error("❌ DATABASE_URL is not defined in environment variables");
    }

    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1); // stop app if DB fails
  }
};

connectDB();

// ✅ Routes
import authRoutes from "./routes/auth.js";
import profileRoutes from "./routes/profile.js";
import feedRoutes from "./routes/feed.js";

app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);
app.use("/feed", feedRoutes);

// ✅ Default route
app.get("/", (req, res) => {
  res.send("🚀 DevTinder backend running!");
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
