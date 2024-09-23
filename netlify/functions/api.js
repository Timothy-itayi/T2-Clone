const express = require('express');
const serverless = require('serverless-http');
const path = require('path');

const app = express();

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, '../public')));

// Serve files from 'files' folder if necessary
app.use('/files', express.static(path.join(__dirname, '../files')));

// Serve the index.html from the root directory
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

module.exports.handler = serverless(app);
