// Middleware for authentication using JWT



const jwt = require('jsonwebtoken');

const User = require('../models/User');



const protect = async (req, res, next) => {

  let token;



  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {

    try {

      // Extract the token from the Authorization header

      token = req.headers.authorization.split(' ')[1];

      

      // Verify the token

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      

      // Attach the user information to the request object

      req.user = await User.findById(decoded.id).select('-password');

      

      next(); // Proceed to the next middleware or route handler

    } catch (error) {

      console.error('Authentication error:', error);

      res.status(401).json({ message: 'Not authorized, token failed' });

    }

  } else {

    res.status(401).json({ message: 'Not authorized, no token' });

  }

};



module.exports = { protect };
