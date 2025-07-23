const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const protect = require('../middleware/auth');
const upload = require('../middleware/upload');
const { addBookInfo, getBookById } = require('../controllers/bookController');

// Natural language search parser
const parseSearchQuery = (query) => {
  const filters = {};
  let remainingQuery = query.toLowerCase();

  const boardOptions = ['cbse', 'cisce', 'ib', 'igcse', 'nios', 'icse'];
  const classOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  const subjectOptions = ['math', 'mathematics', 'science', 'english', 'history', 'geography', 'computer science', 'hindi'];
  const mediumOptions = ['english', 'hindi'];

  const subjectAliases = {
    'math': 'Math',
    'mathematics':'Math',
    'maths': 'Math',
    'science': 'Science',
    'sci': 'Science',
    'english':'English',
    'eng':'English',
    'history':'History',
    'hist': 'History',
    'geography': 'Geography',
    'geo': 'Geography',
    'computer science': 'Computer Science',
    'computer': 'Computer Science',
    'cs': 'Computer Science',
    'hindi': 'Hindi'
  };

  const boardAliases = {
    'cbse': 'CBSE',
    'cisce': 'CISCE',
    'ib': 'IB',
    'igcse': 'IGCSE',
    'nios': 'NIOS',
    'icse': 'ICSE'
  };

  const mediumAliases = {
    'english': 'English',
    'hindi': 'Hindi'
  };

  //Extract board
  for (const board of boardOptions) {
    const regex = new RegExp(`\\b${board}\\b`, 'i');
    if (regex.test(remainingQuery)) {
      filters.board = boardAliases[board];
      remainingQuery = remainingQuery.replace(regex, '').trim();
      break;
    }
  }

  // Extract class
  const classPatterns = [
    /\bclass\s+(\d{1,2})\b/i,
    /\bgrade\s+(\d{1,2})\b/i,
    /\b(\d{1,2})th\b/i,
    /\b(\d{1,2})nd\b/i,
    /\b(\d{1,2})rd\b/i,
    /\b(\d{1,2})st\b/i,
    /\bstd\s+(\d{1,2})\b/i
  ]

  for (const pattern of classPatterns) {
    const match = remainingQuery.match(pattern);
    if (match) {
      const classNum = match[1];
      if (classOptions.includes(classNum)) {
        filters.class = classNum;
        remainingQuery = remainingQuery.replace(pattern, '').trim();
        break;
      }
    }
  }

  // Extract subject
  for (const [alias, subject] of Object.entries(subjectAliases)) {
    const regex = new RegExp(`\\b${alias}\\b`, 'i');
    if (regex.test(remainingQuery)) {
      filters.subject = subject;
      remainingQuery = remainingQuery.replace(regex, '').trim();
      break;
    }
  }

  // Extract medium
  for (const medium of mediumOptions) {
    const regex = new RegExp(`\\b${medium}\\b`, 'i');
    if (regex.test(remainingQuery)) {
      filters.medium = mediumAliases[medium];
      remainingQuery = remainingQuery.replace(regex, '').trim();
      break;
    }
  }

  // clean up remaining query
  const stopWords = ['for', 'books', 'book', 'of', 'the', 'and', 'or', 'in', 'on', 'at', 'to', 'a', 'an'];
  remainingQuery = remainingQuery.split(' ')
    .filter(word => word.length > 0 && !stopWords.includes(word))
    .join(' ');

  return {
    filters,
    remainingText: remainingQuery.trim()
  };
};


// get /api/books
router.get('/', async (req, res) => {
  console.log('Backend search query:', req.query);
  try {
    let filterConditions = {};
    let textSearchConditions = [];

    if (req.query.class) filterConditions.class = req.query.class;
    if (req.query.board) filterConditions.board = req.query.board;
    if (req.query.subject) filterConditions.subject = req.query.subject;
    if (req.query.medium) filterConditions.medium = req.query.medium;

    if (req.query.search) {
      const searchTerm = req.query.search.trim();
      const { filters, remainingText } = parseSearchQuery(searchTerm);
      

      if (!req.query.class && !req.query.board && !req.query.subject && !req.query.medium) {
        Object.assign(filterConditions, filters);
      }

      const textToSearch = remainingText || searchTerm;

      if (textToSearch) {
        const searchWords = textToSearch.split(/\s+/).filter(word => word.length > 0);

        if (searchWords.length > 0) {
          textSearchConditions = searchWords.flatMap(word => {
            const regex = new RegExp(word, 'i');
            return [
              { title: { $regex: regex } },
              { description: { $regex: regex } },
              { author : { $regex: regex } },
            ];
          });
        }}
      }

      // build the final query
      let query = {};

      if (Object.keys(filterConditions).length > 0 && textSearchConditions.length > 0) {
        const andConditions = [
          ...Object.entries(filterConditions).map(([key, value]) => ({ [key]: value })),
          { $or: textSearchConditions }
        ];
        query = { $and: andConditions };
      } else if (Object.keys(filterConditions).length > 0) {
        query = filterConditions;
      } else if (textSearchConditions.length > 0) {
        query = { $or: textSearchConditions };
      }

  
      console.log('Final query:', JSON.stringify(query, null, 2));
      
      const books = await Book.find(query);
      res.json(books);
      
    } catch (err) {
      console.error('Search error:', err);
      res.status(500).json({ message: err.message });
    }
  });


// POST new book info
router.post('/sell', protect, upload.array('images', 4), addBookInfo);

// GET book info
router.get('/bookInfo/:id', getBookById);

module.exports = router;