// index.js and server.js are duplicates with different import styles.

// server/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // to access variables from .env file

const readingRoutes = require('./routes/readingRoutes'); // Use the correct router

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON

// Routes
app.use('/api/readings', readingRoutes); // All reading endpoints

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch(err => console.error('❌ MongoDB connection error:', err));
