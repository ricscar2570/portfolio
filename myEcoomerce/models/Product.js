// Product.js
// Schema definition for product items in the e-commerce platform

const mongoose = require('mongoose');

// Define the Product schema
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },          // Product name
  description: { type: String, required: true },   // Product description
  price: { type: Number, required: true },         // Product price
  stock: { type: Number, default: 0 },             // Quantity in stock
  imageUrl: { type: String },                      // URL of the product image
  createdAt: { type: Date, default: Date.now },    // Timestamp for when the product was added
});

// Export the Product model
module.exports = mongoose.model('Product', ProductSchema);
