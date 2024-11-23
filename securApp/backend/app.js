// Main configuration for the Express application



const express = require("express");

const cors = require("cors");

const securityRoutes = require("./src/routes/securityRoutes");



const createApp = () => {

    const app = express();



    // Middleware

    app.use(cors());

    app.use(express.json());



    // Routes

    app.use("/api/security", securityRoutes);



    return app;

};



module.exports = createApp;
