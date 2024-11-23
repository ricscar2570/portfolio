// Define API routes for security-related operations

const express = require("express");
const { performZapScan, getAlerts } = require("../controllers/securityController");

const router = express.Router();

// Route for initiating ZAP scan
router.post("/scan", performZapScan);

// Route for retrieving alerts
router.get("/alerts", getAlerts);

module.exports = router;
