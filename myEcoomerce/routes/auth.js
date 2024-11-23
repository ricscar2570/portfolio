/// auth.js
// Routes for user authentication and authorization

const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const router = express.Router();

// Register a new user
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = new User({ email, password });
    await user.save();
    res.status(201).send('User registered successfully');
  } catch (error) {
    res.status(500).send('Error registering user');
  }
});

// Login and send OTP
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).send('Invalid credentials');
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    user.otp = otp;
    user.otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes expiry
    await user.save();

    // Send OTP via email
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: { user: process.env.EMAIL, pass: process.env.EMAIL_PASSWORD },
    });

    await transporter.sendMail({
      to: email,
      subject: 'Your OTP',
      text: `Your OTP is: ${otp}`,
    });

    res.status(200).send('OTP sent to email');
  } catch (error) {
    res.status(500).send('Error during login');
  }
});

// Verify OTP and issue JWT
router.post('/verify-otp', async (req, res) => {
  const { email, otp } = req.body;

  try {
    const user = await User.findOne({ email, otp, otpExpires: { $gte: new Date() } });
    if (!user) {
      return res.status(400).send('Invalid or expired OTP');
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).send('Error verifying OTP');
  }
});

module.exports = router;
