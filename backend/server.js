require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');


// Connect to MongoDB
connectDB();

const app = express();
app.use(express.json()); // Parse JSON bodies

// ✅ Debug logger (optional, but useful)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// ✅ Test route to confirm server is reachable
app.get('/', (req, res) => {
  res.json({ message: "Server is working" });
});

// Routes
app.use('/api/auth', authRoutes);

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
