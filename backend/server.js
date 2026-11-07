
const express = require('express');

const app = express();
const PORT = 3000;

// Middleware to read JSON request bodies
app.use(express.json());

// Temporary storage for products
let products = [];
let nextId = 1;

// Create a product
app.post('/api/products', (req, res) => {
    const { name, description, price, category } = req.body;

    if (!name || !name.trim()) {
        return res.status(400).json({
            message: 'Product name is required'
        });
    }

    if (price === undefined || price === null || price === '' ||
        !Number.isFinite(Number(price)) || Number(price) <= 0) {
        return res.status(400).json({
            message: 'Price must be a number greater than zero'
        });
    }

    const product = {
        id: nextId++,
        name: name.trim(),
        description: description || '',
        price: Number(price),
        category: category || ''
    };

    products.push(product);

    return res.status(201).json({
        message: 'Product created successfully',
        product
    });
});

// Get all products
app.get('/api/products', (req, res) => {
    return res.status(200).json(products);
});

// Get a product by ID
app.get('/api/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const product = products.find(item => item.id === id);

    if (!product) {
        return res.status(404).json({
            message: 'Product not found'
        });
    }

    return res.status(200).json(product);
});

// Serve the frontend files
app.use(express.static('frontend'));

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
