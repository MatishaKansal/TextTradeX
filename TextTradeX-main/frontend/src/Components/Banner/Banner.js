import React from 'react';
import "./Banner.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import TextTradeX from './TextTradeX.png'
import { FaSearch } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
// import Signup from '../Signup/Signup';

const Banner = ({onSearch}) => {
    const [name, setName] = useState("");
    const [query, setQuery] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("user"));
        if (userData?.firstName) {
        setName(userData.firstName);
        }
    }, []);

    const handleSearch = () => {
        if (query.trim()) {
            onSearch(query.trim());
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        setName("");
        setDropdownOpen(false);
        navigate("/");
    };    
        
    return (
        <div>
            <div className="titlebar">
                <img className = "logo_img" src= {TextTradeX} alt="Icon"/>
                <Link to="/">
                <span className="logo_name">TextTradeX</span>
                </Link>
                <input
                    className = "search_bar"
                    type="text"
                    placeholder="Search for Books..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => { 
                        if (e.key ==='Enter')
                            onSearch(query.trim()); 
                }}
                />
                <FaSearch className='search_icon' onClick={handleSearch} />


                {name ? (
                    <div>
                    <button
                        className="register"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                    {name}
                </button>
                {dropdownOpen && (
                    <div >
                    <button className= "sign_out_bootn" onClick={handleLogout}>
                        Sign Out
                    </button>
                    </div>
                )}
                </div>
            ) : (
                <button className = "register" onClick={() => navigate("/Signup")} >
                Register
                </button>
            )}
            

                <button style={{background:"none", border:"none"}}><FaRegHeart className='cart_icon'size={40} /></button>
                <Link to="/Sell">               
                <button className="sell" >SELL</button>
                </Link>
            </div>
        </div>
    );
};


export default Banner;