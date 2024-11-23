// Routes for handling product-related API requests



const express = require('express');

const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

const { protect } = require('../middleware/authMiddleware');



const router = express.Router();



// Public route to get all products

router.get('/', getProducts);



// Public route to get a product by ID

router.get('/:id', getProductById);



// Admin routes for product management

router.post('/', protect, createProduct); // Requires admin privileges

router.put('/:id', protect, updateProduct); // Requires admin privileges

router.delete('/:id', protect, deleteProduct); // Requires admin privileges



module.exports = router;
