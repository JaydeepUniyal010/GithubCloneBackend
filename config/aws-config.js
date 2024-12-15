const AWS = require("aws-sdk");
require("dotenv").config();

// AWS configuration setup
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID, // Access key from .env file
  secretAccessKey: process.env.SECRET_ACCESS_KEY, // Secret key from .env file
  region: "ap-south-1", // AWS region
});

// S3 instance create karna
const s3 = new AWS.S3();
const S3_BUCKET = "samplegitclonee"; // Replace 'xyz' with your actual bucket name

// Exporting S3 instance, bucket, and keys
module.exports = { s3, S3_BUCKET };
