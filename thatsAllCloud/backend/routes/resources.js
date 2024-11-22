
const express = require('express');
const Resource = require('../models/Resource');

const router = express.Router();

router.get('/', async (req, res) => {
    const resources = await Resource.find();
    res.json(resources);
});

router.post('/', async (req, res) => {
    const resource = await Resource.create(req.body);
    res.json(resource);
});

module.exports = router;
