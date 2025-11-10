//Backend (Node/Express) Code


// server/server.js
const express = require('express');
const cors = require('cors');
// const mongoose = require('mongoose'); // Include this line when adding MongoDB

const app = express();
const PORT = process.env.PORT || 3001;
// const MONGO_URI = process.env.MONGO_URI; // Used when connecting to MongoDB Atlas

// --- Middleware ---
// Enable Cross-Origin Resource Sharing so the React frontend can talk to this server
app.use(cors()); 
// Allows the server to parse incoming JSON requests (e.g., for POST/PUT requests)
app.use(express.json()); 

// --- Mock Data (Will be replaced by MongoDB Product model queries) ---
const mockProducts = [
  { _id: '101', name: 'Ultra HD Monitor', price: 349.99, description: '27-inch 4K display, 144Hz refresh rate.' },
  { _id: '102', name: 'Wireless Mouse', price: 29.50, description: 'Ergonomic design, multi-device support.' },
  { _id: '103', name: 'Mechanical Keyboard', price: 85.00, description: 'Tactile switches, RGB backlit.' },
];

// --- Routes ---
// GET /api/products - Fetches all products
app.get('/api/products', (req, res) => {
  console.log('Fetching all products...');
  // Sends the list of mock products as a JSON response
  res.json(mockProducts); 
});

// --- Server Start ---
// You will need to install the dependencies first: npm install express cors
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
