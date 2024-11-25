/// sendgrid.js
// SendGrid configuration file for handling email operations

const sgMail = require('@sendgrid/mail');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Set the API key from the environment variables
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = sgMail;

/**
 * Example usage:
 *
 * const sgMail = require('./sendgrid');
 * 
 * const message = {
 *   to: 'recipient@example.com',  // Recipient's email address
 *   from: 'sender@example.com',   // Sender's email address (must be verified in SendGrid)
 *   subject: 'Test Email',
 *   text: 'This is a test email.',
 *   html: '<strong>This is a test email.</strong>',
 * };
 * 
 * sgMail
 *   .send(message)
 *   .then(() => {
 *     console.log('Email sent successfully');
 *   })
 *   .catch((error) => {
 *     console.error('Error sending email:', error);
 *   });
 */