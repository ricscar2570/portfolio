// Main server file

const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const helmet = require('helmet');

const cors = require('cors');



// Importing routes

const authRoutes = require('./routes/auth');

const customerRoutes = require('./routes/customers');



// Middleware setup

app.use(bodyParser.json()); // Parse JSON bodies

app.use(helmet()); // Enhance API security

app.use(cors()); // Enable CORS for all routes



// Route setup

app.use('/api/auth', authRoutes); // Routes for authentication

app.use('/api/customers', customerRoutes); // Routes for customer management



// Error handling middleware

app.use((err, req, res, next) => {

    console.error(err.stack); // Log error stack trace

    res.status(500).send({ error: 'Something went wrong!' }); // Send error response

});



// Export app for use in server start

module.exports = app;
