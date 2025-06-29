const express = require('express');
const router = express.Router();
const { registerUser, loginUser, updateProfile } = require('../controllers/authController');
const protect = require('../middleware/auth');

// POST /api/auth/register
router.post('/register', registerUser);

// POST /api/auth/login
router.post('/login', loginUser);

// PATCH /api/auth/profile
router.patch('/profile', protect, updateProfile);

module.exports = router;
