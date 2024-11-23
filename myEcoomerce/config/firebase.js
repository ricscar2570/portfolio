// firebase.js
// Firebase configuration file for handling Firebase services (e.g., Cloud Messaging)

const admin = require('firebase-admin');
const dotenv = require('dotenv');
const serviceAccount = require('./firebase-adminsdk.json'); // Path to the Firebase Admin SDK JSON file

// Load environment variables from .env file
dotenv.config();

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount), // Use the service account credentials
  databaseURL: process.env.FIREBASE_DATABASE_URL, // Optional: Firebase Realtime Database URL
});

module.exports = admin;

/**
 * Example usage:
 *
 * const admin = require('./firebase');
 * 
 * // Send a push notification
 * const message = {
 *   notification: {
 *     title: 'Test Notification',
 *     body: 'This is a test push notification.',
 *   },
 *   token: 'device-token-here', // Replace with a valid device token
 * };
 * 
 * admin
 *   .messaging()
 *   .send(message)
 *   .then((response) => {
 *     console.log('Push notification sent successfully:', response);
 *   })
 *   .catch((error) => {
 *     console.error('Error sending push notification:', error);
 *   });
 */