// notifications.js
// Routes for sending notifications

const express = require('express');
const admin = require('../config/firebase');
const router = express.Router();

// Send a push notification
router.post('/push', async (req, res) => {
  const { title, body, token } = req.body;

  try {
    const message = {
      notification: { title, body },
      token,
    };

    await admin.messaging().send(message);
    res.status(200).send('Push notification sent successfully');
  } catch (error) {
    res.status(500).send('Error sending notification');
  }
});

// Send promotional notifications to multiple users
router.post('/promotions', async (req, res) => {
  const { title, body, tokens } = req.body;

  try {
    const message = {
      notification: { title, body },
      tokens,
    };

    const response = await admin.messaging().sendMulticast(message);
    res.status(200).json({
      message: 'Promotional notifications sent successfully',
      successCount: response.successCount,
      failureCount: response.failureCount,
    });
  } catch (error) {
    res.status(500).send('Error sending promotions');
  }
});

module.exports = router;
