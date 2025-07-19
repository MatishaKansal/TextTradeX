import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../AdCard/AdCard.css';
import { baseUrl } from '../../Pages/urls.jsx';
import AdCard from '../AdCard/AdCard.js';

const BookList = ({
  selectedClass,
  selectedBoard,
  selectedSubject,
  selectedMedium,
  filterResetCounter,
  searchQuery
}) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {books.map((ad) => (
        <AdCard
          key={ad._id}
          id={ad._id}
          image={ad.imageUrl}
          price={ad.price}
          title={ad.title}
          desc={ad.description}
        />
      ))}
    </div>
  );
};

export default BookList;
