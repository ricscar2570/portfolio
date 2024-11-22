
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    googleId: String,
    name: String,
    email: String,
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
});

module.exports = mongoose.model('User', UserSchema);
