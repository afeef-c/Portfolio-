// server.js
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config(); // Load environment variables from .env

const app = express();

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to send environment variables to the frontend
app.get('/config', (req, res) => {
  res.json({
    userID: process.env.EMAILJS_USER_ID,
    serviceID: process.env.EMAILJS_SERVICE_ID,
    templateID: process.env.EMAILJS_TEMPLATE_ID,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
