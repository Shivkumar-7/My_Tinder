const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongoURI =
      process.env.DATABASE_URL ||
      "mongodb+srv://kumar00shiv00k123:7T5hJKXUWBCFphEr@cluster0.mongodb.net/devtinder"; 
      // 👆 put your real DB connection string here

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
