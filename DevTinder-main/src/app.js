const express = require("express");
const connectDB = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

// ✅ Connect to MongoDB
connectDB();

// ✅ CORS setup
app.use(
  cors({
    origin: [
      "http://localhost:5173",                  // local frontend
      "https://devtinder-frontend.onrender.com" // deployed frontend (replace with your actual link)
    ],
    credentials: true, // allow cookies & auth headers
  })
);

app.use(express.json());
app.use(cookieParser());

// ✅ Routes
const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const feedRouter = require("./routes/feed");

app.use("/auth", authRouter);
app.use("/profile", profileRouter);
app.use("/feed", feedRouter);

// ✅ Test route
app.get("/", (req, res) => {
  res.send("✅ Backend is running on Render!");
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
