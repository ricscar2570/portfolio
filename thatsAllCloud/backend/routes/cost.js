
const express = require('express');
const AWS = require('aws-sdk');
const router = express.Router();

AWS.config.update({ region: 'us-east-1' });
const costExplorer = new AWS.CostExplorer();

router.get('/aws', async (req, res) => {
    const params = {
        TimePeriod: { Start: '2024-01-01', End: '2024-12-31' },
        Granularity: 'MONTHLY',
        Metrics: ['UnblendedCost'],
    };

    try {
        const data = await costExplorer.getCostAndUsage(params).promise();
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Unable to fetch costs' });
    }
});

module.exports = router;
