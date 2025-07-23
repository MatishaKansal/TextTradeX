const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const protect = require('../middleware/auth');

// Get current user's cart
router.get('/get', protect, cartController.getCart);

// Update cart items
router.post('/update', protect, cartController.addOrUpdateItem);

// Remove a book from the cart
router.delete('/remove', protect, cartController.removeFromCart);

// Increment or decrement quantity of a book in the cart
router.patch('/quantity', protect, cartController.updateQuantity);

module.exports = router;
