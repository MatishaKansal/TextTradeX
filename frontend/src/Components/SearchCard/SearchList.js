import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../../Pages/urls.jsx';
import SearchCard from './SearchCard.js';

const SearchList = ({ filters }) => {
  const [books, setBooks] = useState([]);
  const [cartItems, setCartItems] = useState({});

  const handleCartToggle = (id, isAdded) => {
    setCartItems(prev => {
      const updatedCart = { ...prev };
      if (isAdded) {
        updatedCart[id] = true;
      } else {
        delete updatedCart[id];
      }
      console.log("Cart Items:", updatedCart);
      return updatedCart;
    });
  };

  // 🛒 Send cart items to backend
  useEffect(() => {
    if (Object.keys(cartItems).length === 0) return;

    const sendCartToBackend = async () => {
      try {
        const cartIds = Object.keys(cartItems);
        console.log("Auto-sending cart to backend:", cartIds);
        await axios.post(`${baseUrl}/api/cart/update`, { cart: cartIds });
        console.log("Cart sent successfully!");
      } catch (error) {
        console.error("Error sending cart:", error);
      }
    };

    sendCartToBackend();
  }, [cartItems]);

  // 📚 Fetch books with filters
  useEffect(() => {
    if (!filters) return;

    // console.log("🔄 Filters changed:", filters);

    const fetchBooks = async () => {
      try {
        const queryParams = [];

        // ✅ Fixed search bar query
        if (filters.searchQuery && filters.searchQuery.trim() !== "") {
            queryParams.push(`search=${encodeURIComponent(filters.searchQuery.trim())}`);
            console.log("🔍 Search Query:", filters.searchQuery);
        }

        // Sidebar filters
        if (filters.classes?.length > 0) {
          queryParams.push(`class=${filters.classes.map(encodeURIComponent).join(',')}`);
          
          console.log("📚 Class Filter:", filters.classes);
        }

        if (filters.subjects?.length > 0) {
          queryParams.push(`subject=${filters.subjects.map(encodeURIComponent).join(',')}`);
          
          console.log("📚 Subject Filter:", filters.subjects);
        }

        if (filters.board) {
          queryParams.push(`board=${encodeURIComponent(filters.board)}`);
        }

        if (filters.medium) {
          queryParams.push(`medium=${encodeURIComponent(filters.medium)}`);
        }

        if (filters.minPrice !== undefined && filters.maxPrice !== undefined) {
          queryParams.push(`minPrice=${filters.minPrice}`);
          queryParams.push(`maxPrice=${filters.maxPrice}`);
        }

        const queryString = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
        const res = await axios.get(`${baseUrl}/api/books${queryString}`);
        setBooks(res.data);
      } catch (err) {
        console.error("Error fetching books:", err);
      }
    };

    fetchBooks();
  }, [filters]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {books.length > 0 ? (
        books.map(ad => {
          const image = ad.images && ad.images.length > 0
          ? ad.images[0].path || ad.images[0].url || ad.images[0]
          : 'https://via.placeholder.com/150';

          return (
          <SearchCard
            key={ad._id}
            id={ad._id}
            image={ad.images}
            price={ad.price}
            title={ad.title}
            desc={ad.description}
            onCartToggle={handleCartToggle}
          />
        );
      }) 
    ): (
        <p style={{ padding: '2rem', fontSize: '1.2rem' }}>No books found.</p>
      )}
    </div>
  );
};

export default SearchList;
