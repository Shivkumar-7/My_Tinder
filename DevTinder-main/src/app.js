const express = require("express");
const connectDB = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const conf = require("./conf/conf");

const app = express();

// Use Render's PORT, fallback to conf.port or 4000 for local dev
const PORT = process.env.PORT || conf.port || 4000;

// Middleware
app.use(
  cors({
    origin: process.env.FRONTURL || conf.front || "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// Routers
const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

// ✅ Root test route (fixes "Cannot GET /")
app.get("/", (req, res) => {
  res.send("🚀 Backend is running on Render");
});

// Connect to DB and start server
connectDB()
  .then(() => {
    console.log("✅ Database connection established");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err.message);
    console.error(err);
  });
