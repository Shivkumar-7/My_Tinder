const jwt = require("jsonwebtoken");
const User = require("../models/user");
const conf = require("../conf/conf");

const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) return res.status(401).json({ message: "Please login" });

    if (!conf.jwtkey) throw new Error("JWT secret key is not defined");

    const decoded = jwt.verify(token, conf.jwtkey);
    const user = await User.findById(decoded._id);
    if (!user) return res.status(404).json({ message: "User not found" });

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Authentication failed: " + error.message });
  }
};

module.exports = { userAuth };
