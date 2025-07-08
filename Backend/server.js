require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());
// If you want to restrict origins, use:
// app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// Connect to MongoDB
connectDB();

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
app.use('/api/books', bookRoutes);

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
