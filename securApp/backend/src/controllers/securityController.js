// Controller for handling security-related API logic

const { runZapScan } = require("../services/zapScanService");
const Log = require("../models/Log");

// Perform a ZAP scan on a given URL
const performZapScan = async (req, res) => {
    try {
        const { url } = req.body;
        if (!url) {
            return res.status(400).json({ error: "URL is required" });
        }

        const scanResult = await runZapScan(url);

        // Save the result to the log
        const log = new Log({
            type: "ZAP Scan",
            message: scanResult,
            createdAt: new Date(),
        });
        await log.save();

        res.status(200).json({ success: true, result: scanResult });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Retrieve all alerts from the database
const getAlerts = async (req, res) => {
    try {
        const alerts = await Log.find({ type: "ZAP Scan" }).sort({ createdAt: -1 });
        res.status(200).json(alerts);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { performZapScan, getAlerts };
