// Routes for handling order-related API requests



const express = require('express');

const { createOrder, getUserOrders, getOrderById, getAllOrders } = require('../controllers/orderController');

const { protect } = require('../middleware/authMiddleware');



const router = express.Router();



// Protected route for creating a new order

router.post('/', protect, createOrder);



// Protected route for retrieving orders of a logged-in user

router.get('/myorders', protect, getUserOrders);



// Admin route for retrieving all orders

router.get('/', protect, getAllOrders);



// Protected route for retrieving a specific order by ID

router.get('/:id', protect, getOrderById);



module.exports = router;
