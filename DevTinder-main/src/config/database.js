const mongoose = require("mongoose");
const conf = require("../conf/conf");

const connectDB = async () => {
  try {
    await mongoose.connect(conf.dataBaseUrl);
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    throw err;
  }
};

module.exports = connectDB;
