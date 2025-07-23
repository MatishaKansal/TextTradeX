const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  board: { type: String, required: true },
  Class: { type: String, required: true},
  subject: { type: String, required: true },
  price: { type: String, required: true },
  medium: { type: String, required: true },
  author: { type: String },
  description: { type: String },
  images: [
    {
    filename: String,
    originalname: String,
    path: String,
    mimetype: String,
    size: Number
  }
  ],
});

module.exports = mongoose.model('Book', BookSchema, 'books');
