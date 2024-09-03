const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Home Route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Products Route
app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'products.html'));
});

// Product Detail Route
app.get('/product-detail', (req, res) => {
    res.sendFile(path.join(__dirname, 'product-detail.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
