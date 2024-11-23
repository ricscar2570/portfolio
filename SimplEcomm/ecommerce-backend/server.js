// Entry point for the backend server



const express = require('express');

const dotenv = require('dotenv');

const mongoose = require('mongoose');

const cors = require('cors');



// Import routes

const productRoutes = require('./routes/products');

const userRoutes = require('./routes/users');

const orderRoutes = require('./routes/orders');



dotenv.config(); // Load environment variables

const app = express();



// Middleware

app.use(cors()); // Enable CORS for cross-origin requests

app.use(express.json()); // Parse JSON request bodies



// Connect to MongoDB

mongoose.connect(process.env.MONGO_URI, {

  useNewUrlParser: true,

  useUnifiedTopology: true,

})

  .then(() => console.log('MongoDB connected successfully'))

  .catch((err) => console.error('MongoDB connection failed:', err));



// API routes

app.use('/api/products', productRoutes);

app.use('/api/users', userRoutes);

app.use('/api/orders', orderRoutes);



// Error handling middleware

app.use((err, req, res, next) => {

  console.error(err.stack);

  res.status(500).json({ message: 'Internal Server Error' });

});



// Start the server

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
