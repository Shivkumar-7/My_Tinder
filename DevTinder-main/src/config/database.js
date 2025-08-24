const mongoose = require("mongoose");
const data = require("../conf/conf");

const connectDB = async () => {
  try {
    // Prevent multiple connections (important for Render / serverless)
    if (mongoose.connection.readyState >= 1) {
      console.log("✅ Database already connected");
      return;
    }

    await mongoose.connect(data.dataBaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Database connected successfully...");
  } catch (err) {
    console.error("❌ Database connection failed:", err.message);
    process.exit(1); // Exit if DB connection fails
  }
};

module.exports = connectDB;
