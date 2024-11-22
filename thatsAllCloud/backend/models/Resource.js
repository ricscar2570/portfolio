
const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
    name: String,
    type: String,
    provider: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Resource', ResourceSchema);
