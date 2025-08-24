const express = require("express");
const connectDB = require("./config/database");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const conf = require("./conf/conf");

// Use PORT from environment or conf
const PORT = process.env.PORT || conf.port || 4000;

// Middlewares
app.use(cors({
  origin: conf.front,
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// ✅ Root route to confirm server is live
app.get("/", (req, res) => {
  res.send("✅ Backend is running! Available routes: /signup, /login, /profile, /request, /user");
});

// Routers
const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

// Connect to MongoDB and start server
connectDB()
  .then(() => {
    console.log("✅ Database connection established...");
    app.listen(PORT, () => {
      console.log(`🚀 Server started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err.message);
    console.error(err);
  });
