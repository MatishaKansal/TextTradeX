const express = require('express');
const router = express.Router();
const { registerUser, loginUser, updateProfile, addBookInfo } = require('../controllers/authController');
const protect = require('../middleware/auth');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });


// POST /api/auth/register
router.post('/register', registerUser);

// POST /api/auth/login
router.post('/login', loginUser);

router.post('/sell', protect, upload.array('images', 4), addBookInfo);

// PATCH /api/auth/profile
router.patch('/profile', protect, updateProfile);

module.exports = router;
