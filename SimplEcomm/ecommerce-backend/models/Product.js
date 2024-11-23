// This file defines the Product schema for MongoDB using Mongoose



const mongoose = require('mongoose');



const productSchema = new mongoose.Schema({

  name: { type: String, required: true }, // Name of the product

  description: { type: String, required: true }, // Description of the product

  price: { type: Number, required: true }, // Price of the product

  stock: { type: Number, required: true }, // Available stock for the product

  image: { type: String, required: true }, // URL of the product image

}, {

  timestamps: true, // Automatically add createdAt and updatedAt fields

});



module.exports = mongoose.model('Product', productSchema);
