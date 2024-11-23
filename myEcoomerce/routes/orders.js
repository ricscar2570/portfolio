// orders.js
// Routes for managing orders

const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

// Place a new order
router.post('/', async (req, res) => {
  const { userId, products, total } = req.body;

  try {
    const order = new Order({ user: userId, products, total });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).send('Error placing order');
  }
});

// Update order status
router.patch('/:orderId/status', async (req, res) => {
  const { status } = req.body;

  try {
    const order = await Order.findByIdAndUpdate(req.params.orderId, { status }, { new: true });
    if (!order) return res.status(404).send('Order not found');
    res.status(200).json(order);
  } catch (error) {
    res.status(500).send('Error updating order status');
  }
});

module.exports = router;
