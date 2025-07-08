import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './BookList.css'; // Create styling as needed
import { baseUrl } from '../../Pages/urls.jsx';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get(`${baseUrl}/api/books`);
      setBooks(res.data);
    };
    fetchBooks();
  }, []);

  return (
    <div className="book-list">
      {books.map(book => (
        <div key={book._id} className="book-card">
          <img src={book.imageUrl} alt={book.title} />
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>₹{book.price}</p>
          <p>{book.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
