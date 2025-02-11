const express = require('express');
const cors = require('cors'); 
const connectDB = require('./db');
const serviceRoutes = require('./routers/serviceRoutes');
require('dotenv').config(); 
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Use CORS
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use('/api/services', serviceRoutes);

// Home Route
app.get('/', (req, res) => {
  res.send('Heegan Technology Backend');
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));