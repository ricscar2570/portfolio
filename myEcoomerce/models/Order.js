// Order.js
// Schema definition for customer orders in the e-commerce platform

const mongoose = require('mongoose');

// Define the Order schema
const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user who placed the order
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },       // Product reference
      quantity: { type: Number, default: 1 },                                  // Quantity of the product ordered
    },
  ],
  total: { type: Number, required: true },                                      // Total price of the order
  status: { type: String, default: 'Pending' },                                 // Status of the order (e.g., Pending, Shipped, Delivered)
  createdAt: { type: Date, default: Date.now },                                 // Timestamp for when the order was placed
});

// Export the Order model
module.exports = mongoose.model('Order', OrderSchema);
