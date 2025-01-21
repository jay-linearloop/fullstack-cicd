const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/api/test', (req, res) => {
    res.json({ message: 'Backend API is working!!!!!!!!!!!!!!!!!' });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'healthyyyyy' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});