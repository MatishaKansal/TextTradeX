import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../AdCard/AdCard.css';
import { baseUrl } from '../../Pages/urls.jsx';
import AdCard from './AdCard.js';

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
    <div style={{ display: "flex", flexWrap: "wrap" }}>
        {
                books.map((ad) => {
                        // console.log(ad._id);
                        return(
                        <AdCard key={ad._id} image={ad.imageUrl} price={ad.price} title={ad.title} desc={ad.description}/>
                        )
                })
        }
        </div>
  );
};

export default BookList;
