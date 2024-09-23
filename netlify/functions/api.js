// netlify/functions/api.js
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');

const app = express();

// Set static folder
app.use(express.static(path.join(__dirname, '../../public')));
app.use('/files', express.static(path.join(__dirname, '../../files')));

// Home Route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../index.html'));
});

module.exports.handler = serverless(app);
