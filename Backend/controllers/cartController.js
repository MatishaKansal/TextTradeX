const Cart = require('../models/Cart');
const Book = require('../models/Book');


// Get the current users cart with book details
exports.getCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const cart = await Cart.findOne({ user: userId }).populate('items.book');
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.json(cart);
  } catch (err) {
    console.error('GET CART ERROR:', err);
    res.status(500).json({ message: 'Server error while fetching cart' });
  }
};


// Add a book to the cart (no quantity)
exports.addOrUpdateItem = async (req, res) => {
  try {
    const userId = req.user._id;
    const { bookIds } = req.body;

    if (!Array.isArray(bookIds) || bookIds.length === 0) {
      return res.status(400).json({ message: 'No book IDs provided' });
    }

    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart = new Cart({ user: userId, items: [] });
    }

    const existingBookIds = cart.items.map(item => item.book.toString());

    // Add only new books
    bookIds.forEach(bookId => {
      if (!existingBookIds.includes(bookId)) {
        cart.items.push({ book: bookId });
      }
    });

    await cart.save();
    const populatedCart = await cart.populate('items.book');
    res.json(populatedCart);
  } catch (err) {
    console.error('ADD ITEMS ERROR:', err);
    res.status(500).json({ message: 'Server error while adding items' });
  }
};




// Remove a book from the cart
exports.removeFromCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const { bookId } = req.body;

    const cart = await Cart.findOne({ user: userId });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    cart.items = cart.items.filter(item => item.book.toString() !== bookId);
    await cart.save();

    const populatedCart = await cart.populate('items.book');
    res.json(populatedCart);
  } catch (err) {
    console.error('REMOVE FROM CART ERROR:', err);
    res.status(500).json({ message: 'Server error while removing from cart' });
  }
};


// Keep count of book in the cart
exports.updateQuantity = async (req, res) => {
  try {
    const userId = req.user._id;
    const { bookId, action } = req.body; 

    const cart = await Cart.findOne({ user: userId });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    const item = cart.items.find(item => item.book.toString() === bookId);
    if (!item) return res.status(404).json({ message: 'Book not in cart' });

    if (action === 'inc') {
      item.quantity += 1;
    } else if (action === 'dec') {
      item.quantity -= 1;
      if (item.quantity < 1) {
        cart.items = cart.items.filter(i => i.book.toString() !== bookId);
      }
    } else {
      return res.status(400).json({ message: 'Invalid action' });
    }

    await cart.save();
    const populatedCart = await cart.populate('items.book');
    res.json(populatedCart);
  } catch (err) {
    console.error('UPDATE QTY ERROR:', err);
    res.status(500).json({ message: 'Server error while updating quantity' });
  }
};
