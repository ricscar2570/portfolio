// Mongoose model for storing log data

const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
    type: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Log", logSchema);
