// This file defines the User schema for MongoDB using Mongoose



const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');



const userSchema = new mongoose.Schema({

  name: { type: String, required: true }, // Full name of the user

  email: { type: String, required: true, unique: true }, // Unique email for the user

  password: { type: String, required: true }, // Encrypted password of the user

  isAdmin: { type: Boolean, default: false }, // Boolean to mark if the user is an admin

}, {

  timestamps: true, // Automatically add createdAt and updatedAt fields

});



// Middleware to hash password before saving the user

userSchema.pre('save', async function (next) {

  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 10);

  next();

});



// Method to compare passwords

userSchema.methods.matchPassword = async function (enteredPassword) {

  return await bcrypt.compare(enteredPassword, this.password);

};



module.exports = mongoose.model('User', userSchema);
