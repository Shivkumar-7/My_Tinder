const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongoURI = process.env.DATABASE_URL; // Render Env Variable

    if (!mongoURI) {
      throw new Error("❌ DATABASE_URL is not defined in environment variables");
    }

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    throw err;
  }
};

module.exports = connectDB;
