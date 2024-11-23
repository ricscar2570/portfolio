
// Customer model
const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: false },
});

module.exports = mongoose.model('Customer', CustomerSchema);
