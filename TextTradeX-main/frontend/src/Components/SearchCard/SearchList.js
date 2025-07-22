import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../../Pages/urls.jsx';
import SearchCard from './SearchCard.js';

const SearchList = ({ selectedClass, selectedBoard, selectedSubject,selectedMedium, filterResetCounter}) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const queryParams = [];
        if (selectedClass) queryParams.push(`class=${encodeURIComponent(selectedClass)}`);
        if (selectedBoard) queryParams.push(`board=${encodeURIComponent(selectedBoard)}`);
        if (selectedSubject) queryParams.push(`subject=${encodeURIComponent(selectedSubject)}`);
        if (selectedMedium) queryParams.push(`medium=${encodeURIComponent(selectedMedium)}`);

        const query = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
        const res = await axios.get(`${baseUrl}/api/books${query}`);
        
        setBooks(res.data);
    } catch (err) {
        console.error("Error fetching books:", err);
      }
    };
    fetchBooks();
  }, [selectedClass, selectedBoard, selectedSubject, selectedMedium, filterResetCounter]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
        {
                books.map((ad) => {
                        return(
                        <SearchCard key={ad._id} id={ad._id} image={ad.imageUrl} price={ad.price} title={ad.title} desc={ad.description}/>
                        )
                })
        }
        </div>
  );
};

export default SearchList;