// User.js
// Schema definition for user accounts in the e-commerce platform

const mongoose = require('mongoose');

// Define the User schema
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },  // User's email address
  password: { type: String, required: true },             // Hashed password
  otp: { type: String, default: null },                   // One-time password for 2FA
  otpExpires: { type: Date, default: null },              // Expiration time for OTP
  createdAt: { type: Date, default: Date.now },           // Timestamp for when the user was created
});

// Export the User model
module.exports = mongoose.model('User', UserSchema);
