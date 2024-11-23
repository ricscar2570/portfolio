// Entry point for the backend server



const dotenv = require("dotenv");

const mongoose = require("mongoose");

const createApp = require("./App"); // Import the app configuration



// Load environment variables

dotenv.config();



// Initialize the Express app

const app = createApp();



// Connect to MongoDB

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

    .then(() => console.log("MongoDB connected successfully"))

    .catch((err) => console.error("MongoDB connection error:", err));



// Start the server

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
