// aws.js
// AWS configuration file for handling S3 operations

const AWS = require('aws-sdk');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Initialize AWS SDK with credentials and region
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID, // Your AWS Access Key ID
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, // Your AWS Secret Access Key
  region: process.env.AWS_REGION, // The AWS region (e.g., 'us-east-1')
});

// Create an instance of the S3 service
const s3 = new AWS.S3();

module.exports = s3;