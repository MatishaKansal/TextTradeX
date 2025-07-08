import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../AdCard/AdCard.css';
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
  {books.map((book) => (
    <div key={book._id} className="card">
      {/* Top section with image and heart icon */}
      <div className="top">
        <img src={book.imageUrl} alt={book.title} className="cardImage" />
        <button className="heart">
        </button>
      </div>

      {/* Bottom section with title, author, price, description, and button */}
      <div className="bottom">
        <h3 className="title">{book.title}</h3>
        <p className="price">₹{book.price}</p>
        <p className="desc">{book.description}</p>
        <div className="button">
          <button className="btText">View More</button>
        </div>
      </div>
    </div>
  ))}
</div>
    
  );
};

export default BookList;
