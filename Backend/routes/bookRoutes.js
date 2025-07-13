const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

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

module.exports = router;