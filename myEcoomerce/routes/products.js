// products.js
// Routes for managing products

const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).send('Error fetching products');
  }
});

// Create a new product
router.post('/', async (req, res) => {
  const { name, description, price, stock, imageUrl } = req.body;

  try {
    const product = new Product({ name, description, price, stock, imageUrl });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).send('Error creating product');
  }
});

// Delete a product
router.delete('/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).send('Product deleted successfully');
  } catch (error) {
    res.status(500).send('Error deleting product');
  }
});

module.exports = router;
