const Book = require('../models/Book');

//Controller Function to add new Books
exports.addBookInfo = async (req, res) => {
    const { title, board, Class, subject, price, medium, author, description } = req.body;
  
    if(!title || !board || !Class || !subject || !price || !medium) {
      return res.status(400).json({message: 'Mandatory fields not provided!'})
    }
  
    const fileData = req.file ? {
      filename: req.file.filename,
      originalname: req.file.originalname,
      path: req.file.path,
      mimetype: req.file.mimetype,
      size: req.file.size
    } : null;
  
    try {
      const newBook = new Book({ title, board, Class, subject, price, medium, description,author, file: fileData });
      await newBook.save();
      res.status(201).json({message: 'Book added successfully', book: newBook});
    } catch (err) {
      console.error('ADD BOOK ERROR:', err);
      res.status(500).json({message: 'Server error during book addition'});
    }
  };


//Controller Function to get a single book by ID for View More Button
exports.getBookById = async (req, res) => {
    const { id } = req.params;
    try{
        const book = await Book.findById(id);
        if(!book) {
            return res.status(404).json({message: 'Book not found'});
        }
        res.json(book);
    } catch (err) {
        console.error('GET BOOK ERROR:', err);
        res.status(500).json({ message: 'Server error while fetching book' });
    }
}