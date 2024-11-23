// Routes for handling user-related API requests



const express = require('express');

const { registerUser, loginUser, getUserProfile } = require('../controllers/userController');

const { protect } = require('../middleware/authMiddleware');



const router = express.Router();



// Public route for user registration

router.post('/register', registerUser);



// Public route for user login

router.post('/login', loginUser);



// Protected route to fetch user profile

router.get('/profile', protect, getUserProfile);



module.exports = router;
