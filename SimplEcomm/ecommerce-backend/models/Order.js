// This file defines the Order schema for MongoDB using Mongoose



const mongoose = require('mongoose');



const orderSchema = new mongoose.Schema({

  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user who placed the order

  orderItems: [

    {

      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }, // Reference to the product

      quantity: { type: Number, required: true }, // Quantity of the product ordered

    },

  ],

  totalPrice: { type: Number, required: true }, // Total price of the order

  isPaid: { type: Boolean, default: false }, // Payment status of the order

  paidAt: { type: Date }, // Date and time when the order was paid

  isDelivered: { type: Boolean, default: false }, // Delivery status of the order

  deliveredAt: { type: Date }, // Date and time when the order was delivered

}, {

  timestamps: true, // Automatically add createdAt and updatedAt fields

});



module.exports = mongoose.model('Order', orderSchema);
