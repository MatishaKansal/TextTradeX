const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  bookName: { type: String, required: true },
  board: { type: String, required: true },
  bClass: { type: String, required: true},
  subject: { type: String, required: true },
  price: { type: String, required: true },
  medium: { type: String, required: true },
  author: { type: String },
  description: { type: String },
  file: {
    filename: String,
    originalname: String,
    path: String,
    mimetype: String,
    size: Number
  },
});

module.exports = mongoose.model('Book', BookSchema, 'books');
