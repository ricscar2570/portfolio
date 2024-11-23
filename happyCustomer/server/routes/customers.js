
// Customer management routes
const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');
const authMiddleware = require('../middleware/authMiddleware');

// Get all customers
router.get('/', authMiddleware, customerController.getAllCustomers);

// Create a new customer
router.post('/', authMiddleware, customerController.createCustomer);

// Update customer by ID
router.put('/:id', authMiddleware, customerController.updateCustomer);

// Delete customer by ID
router.delete('/:id', authMiddleware, customerController.deleteCustomer);

module.exports = router;
