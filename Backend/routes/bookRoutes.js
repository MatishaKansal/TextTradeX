const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const protect = require('../middleware/auth');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const { addBookInfo, getBookById } = require('../controllers/bookController');


// get /api/books
router.get('/', async (req, res) => {
  try {
    const query = {};

    if (req.query.class) query.class = req.query.class;
    if (req.query.board) query.board = req.query.board;
    if (req.query.subject) query.subject = req.query.subject;
    if (req.query.medium) query.medium = req.query.medium;
    
    const books = await Book.find(query);
      res.json(books);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});

// POST new book info
router.post('/sell', protect, upload.array('images', 4), addBookInfo);

// GET book info
router.get('/bookInfo/:id', getBookById);

module.exports = router;