// Controller for managing user operations



const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');

const User = require('../models/User');



// Function to generate JWT token

const generateToken = (id) => {

  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });

};



// Register a new user

const registerUser = async (req, res) => {

  const { name, email, password } = req.body;



  try {

    // Check if user already exists

    const userExists = await User.findOne({ email });

    if (userExists) {

      return res.status(400).json({ message: 'User already exists' });

    }



    // Create a new user

    const user = await User.create({

      name,

      email,

      password,

    });



    if (user) {

      res.status(201).json({

        _id: user._id,

        name: user.name,

        email: user.email,

        token: generateToken(user._id),

      });

    } else {

      res.status(400).json({ message: 'Invalid user data' });

    }

  } catch (error) {

    res.status(500).json({ message: 'Server error', error });

  }

};



// Login a user

const loginUser = async (req, res) => {

  const { email, password } = req.body;



  try {

    const user = await User.findOne({ email });



    if (user && (await user.matchPassword(password))) {

      res.json({

        _id: user._id,

        name: user.name,

        email: user.email,

        token: generateToken(user._id),

      });

    } else {

      res.status(401).json({ message: 'Invalid email or password' });

    }

  } catch (error) {

    res.status(500).json({ message: 'Server error', error });

  }

};



// Get user profile

const getUserProfile = async (req, res) => {

  const user = req.user;



  try {

    if (user) {

      res.json({

        _id: user._id,

        name: user.name,

        email: user.email,

        isAdmin: user.isAdmin,

      });

    } else {

      res.status(404).json({ message: 'User not found' });

    }

  } catch (error) {

    res.status(500).json({ message: 'Server error', error });

  }

};



module.exports = { registerUser, loginUser, getUserProfile };
