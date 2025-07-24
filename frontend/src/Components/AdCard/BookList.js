import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdCard.css';
import { baseUrl } from '../../Pages/urls.jsx';
import AdCard from './AdCard.js';

const BookList = ({ selectedClass, selectedBoard, selectedSubject, selectedMedium, filterResetCounter, searchQuery }) => {

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // START OF CHANGES
  const [cartItems, setCartItems] = useState({});

  const handleCartToggle = (id, isAdded) => {
    setCartItems(prev => {
      const updatedCart = { ...prev };
      if (isAdded) {
        updatedCart[id] = true;
      } else {
        delete updatedCart[id];
      }
      console.log("Cart Items:", updatedCart);  // See which items are in cart
      return updatedCart;
    });
  };

  useEffect(() => {
    if (Object.keys(cartItems).length === 0) return;  // optional: skip sending empty cart
    
    const sendCartToBackend = async () => {
      try {
        const cartIds = Object.keys(cartItems);
        console.log("Auto-sending cart to backend:", cartIds);
        await axios.post(`${baseUrl}/api/cart`, { cart: cartIds });
        console.log("Cart sent successfully!");
      } catch (error) {
        console.error("Error sending cart:", error);
      }
    };

    sendCartToBackend();
  }, [cartItems]);
  // END OF CHANGES


  useEffect(() => {

    console.log('BookList useEffect triggered with:', {
      selectedClass,
      selectedBoard,
      selectedSubject,
      selectedMedium,
      searchQuery
    });

    const fetchBooks = async () => {

      setLoading(true);
      setError(null);

      try {
        let queryParams = [];

        if (selectedClass) queryParams.push(`class=${encodeURIComponent(selectedClass)}`);
        if (selectedBoard) queryParams.push(`board=${encodeURIComponent(selectedBoard)}`);
        if (selectedSubject) queryParams.push(`subject=${encodeURIComponent(selectedSubject)}`);
        if (selectedMedium) queryParams.push(`medium=${encodeURIComponent(selectedMedium)}`);
        if (searchQuery) {
          console.log('Adding search query to params:', searchQuery);
          queryParams.push(`search=${encodeURIComponent(searchQuery)}`);
        }

        const queryString = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';

        console.log('API call:', `${baseUrl}/api/books${queryString}`);

        const res = await axios.get(`${baseUrl}/api/books${queryString}`);
        setBooks(res.data);
      } catch (error) {
        console.error('Error fetching books:', error);
        setError('Failed to load books. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [selectedClass, selectedBoard, selectedSubject, selectedMedium, filterResetCounter, searchQuery]);

  if (loading) {
    return (
      <div className="book-list">
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <p>Loading books...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="book-list">
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <p style={{ color: 'red' }}>{error}</p>
        </div>
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div className="book-list">
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <p>No books found matching your criteria.</p>
          {searchQuery && (
            <p style={{ fontSize: '14px', color: '#666' }}>
              Try searching with different keywords or check your spelling.
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {
        books.map((ad) => {
          // console.log(ad._id);
          return (

            //CHANGES MADE
            <AdCard key={ad._id} id={ad._id} image={ad.imageUrl} price={ad.price} title={ad.title} desc={ad.description} onCartToggle={handleCartToggle}/>
          )
        })
      }
    </div>
  );
};

export default BookList;