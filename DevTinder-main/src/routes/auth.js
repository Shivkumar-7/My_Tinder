const express = require("express");
const authRouter = express.Router();
const { validateSignUpData } = require("../utils/validation");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const conf = require("../conf/conf");

// ===== SIGNUP =====
authRouter.post("/signup", async (req, res) => {
  try {
    validateSignUpData(req);
    const { firstName, lastName, emailId, password } = req.body;

    const passwordHash = await bcrypt.hash(password, 10);

    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });

    const savedUser = await user.save();
    const token = await savedUser.getJWT();

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // only true in production
      sameSite: "None",
      maxAge: 8 * 3600 * 1000, // 8 hours
    });

    res.json({ message: "Account Created Successfully", data: savedUser });
  } catch (error) {
    res.status(400).send("Data not saved: " + error.message);
  }
});

// ===== LOGIN =====
authRouter.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    const user = await User.findOne({ emailId });
    if (!user) throw new Error("Email is not valid");

    const isPasswordValid = await user.validatePassword(password);
    if (!isPasswordValid) throw new Error("Incorrect password");

    const token = await user.getJWT();
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "None",
      maxAge: 8 * 3600 * 1000,
    });

    res.json(user);
  } catch (error) {
    res.status(401).send("Login failed: " + error.message);
  }
});

// ===== LOGOUT =====
authRouter.post("/logout", async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "None",
  });
  res.send("Logout successful");
});

module.exports = authRouter;
