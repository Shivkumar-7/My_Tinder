const jwt = require("jsonwebtoken");
const User = require("../models/user");
const conf = require("../conf/conf"); // make sure this is correct

// Middleware to protect routes
const userAuth = async (req, res, next) => {
  try {
    // Get token from cookies
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json({ message: "Please login." });
    }

    // Verify JWT token
    if (!conf.jwtkey) {
      throw new Error("JWT secret key is not defined!");
    }

    const decoded = jwt.verify(token, conf.jwtkey);
    const { _id } = decoded;

    // Fetch user from database
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Attach user to request object
    req.user = user;
    next();
  } catch (error) {
    console.error("Auth error:", error.message);
    res.status(401).json({ message: "Authentication failed: " + error.message });
  }
};

module.exports = { userAuth };
