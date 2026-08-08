const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const auth = require("../middleware/auth");

const router = express.Router();

// ===========================
// Register
// ===========================
router.post("/register", async (req, res) => {
  try {
    const { name, email, phone, password,confirmPassword} = req.body;

    // Check required fields
    if (!name || !email || !phone || !password || !confirmPassword) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Check email already exists
    const existingEmail = await User.findOne({ email });

    if (existingEmail) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    // Check phone already exists
    const existingPhone = await User.findOne({ phone });

    if (existingPhone) {
      return res.status(400).json({
        message: "Phone number already exists",
      });
    }
if(password !== confirmPassword){
    res.status(400).json({
        message: "Passwords do not match",
      });
}   
    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // Create user
    const user = new User({
      name,
      email,
      phone,
      password: passwordHash,
    });

    await user.save();

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
    });

  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// ===========================
// Login
// ===========================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check fields
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and Password are required",
      });
    }

    // Find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "Email does not exist",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid password",
      });
    }

    // Generate JWT
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      "mysecretkey",
      {
        expiresIn: "7d",
      }
    );

    return res.status(200).json({
      success: true,
      userId : user._id,
      message: "Login successful",
      token,
    });

  } catch (err) {
  

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// ===========================
// Profile
// ===========================
router.get("/profile", auth, async (req, res) => {
  try {

    const user = await User.findById(req.user.id);

    return res.status(200).json({
      message: "Profile",
      userId: req.user.id,
      name :user.name,
      email : user.email,
      role: req.user.role,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;