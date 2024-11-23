// swaggerConfig.js
// Swagger configuration file for API documentation

const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0', // OpenAPI version
    info: {
      title: 'myEcommerce API Documentation', // Title of the API
      version: '1.0.0', // Version of the API
      description: 'This is the API documentation for the myEcommerce platform.', // Description of the API
    },
    servers: [
      {
        url: 'http://localhost:5000', // Base URL of the API
        description: 'Local server',
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to the API route files
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;

/**
 * Example usage in the main server file:
 * 
 * const express = require('express');
 * const swaggerUi = require('swagger-ui-express');
 * const swaggerSpec = require('./swagger/swaggerConfig');
 * 
 * const app = express();
 * 
 * // Serve the Swagger documentation
 * app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
 * 
 * console.log('Swagger docs available at http://localhost:5000/api-docs');
 */
