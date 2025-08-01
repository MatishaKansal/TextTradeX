import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../../Pages/urls.jsx';
import CartCard from './CartCard.js';
import "./CartCard.css";

const CartList = () => {

  const [books, setBooks] = useState([]);

  
    const fetchBooks = async () => {
      try {
        const res = await axios.get(`${baseUrl}/api/cart/get`);

        setBooks(res.data);
      } catch (err) {
        console.error("Error fetching books:", err);
      }
    };
 

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleRemoveFromCart = async (id) => {
    try {
      await axios.delete(`${baseUrl}/api/cart/remove`, { id });
      console.log(`Removed book with id ${id} from backend`);
      
      setBooks(prevBooks => prevBooks.filter(book => book._id !== id));
    } catch (err) {
      console.error("Error removing from cart:", err);
    }
  };

  return (

    <div className='cart'>
      <div className="cartBox">
        {
          books.map((ad) => {
            return (
              <CartCard key={ad._id} id={ad._id} image={ad.imageUrl} price={ad.price} title={ad.title} desc={ad.description} onRemove={handleRemoveFromCart}/>
            )
          })
        }
      </div>
    </div>



  );
};

export default CartList;