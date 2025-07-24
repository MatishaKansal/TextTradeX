import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import "./Banner.css";
import axios from 'axios';
import TextTradeX from './TextTradeX.png';
import { FaSearch } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

const Banner = () => {
  const [query, setQuery] = useState('');
  const [name, setName] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Robust token check
  const token = localStorage.getItem("token");
  const isLoggedIn = !!token && token !== "undefined" && token !== "null" && token.trim() !== "";

  // ⏎ Update query when URL changes
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchParam = params.get("query") || "";
    setQuery(searchParam);
  }, [location.search]);

  // ⏎ Get user's first name from localStorage
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData?.firstName) {
      setName(userData.firstName);
    }
  }, []);

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSellClick = () => {
    if (isLoggedIn) {
      navigate('/Sell');
    } else {
      navigate('/Signup'); // or use "/Signin" if that’s the correct route
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setName('');
    setDropdownOpen(false);
    navigate('/');
  };

  return (
    <div>
      <div className="titlebar">
        <img className="logo_img" src={TextTradeX} alt="Icon" />
        <Link to="/">
          <span className="logo_name">TextTradeX</span>
        </Link>

        <input
          className="search_bar"
          type="text"
          placeholder="Search for Books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
        />

        <FaSearch className="search_icon" onClick={handleSearch} />

        {name ? (
          <div className="user-section">
            <button className="register" onClick={() => setDropdownOpen(!dropdownOpen)}>
              {name}
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <button className="sign_out_bootn" onClick={handleLogout}>
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <button className = "register" onClick={() => navigate("/Login")} >
            Register
          </button>
        )}
        <Link to="/Cart">
        <button style={{ background: "none", border: "none" }}>
          <FaRegHeart className="cart_icon" size={40} />
        </button>
        </Link>

        <button onClick={handleSellClick} className="sell">SELL</button>
      </div>
    </div>
  );
};

export default Banner;