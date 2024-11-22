
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const authRoutes = require('./routes/auth');
const resourceRoutes = require('./routes/resources');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(passport.initialize());

app.use('/auth', authRoutes);
app.use('/api/resources', resourceRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
