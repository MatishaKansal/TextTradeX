import React from 'react';
import "./Banner.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import TextTradeX from './TextTradeX.png'
import { FaSearch } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
// import Signup from '../Signup/Signup';

const Banner = () => {
  const [name, setName] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData?.firstName) {
      setName(userData.firstName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setName("");
    setDropdownOpen(false);
    navigate("/Signup");
  };    
    
    return (
        <div>
            <div className="titlebar">
                <img className = "logo_img" src= {TextTradeX} alt="Icon"/>
                <Link to="/">
                <span className="logo_name">TextTradeX</span>
                </Link>
                <input className = "search_bar" type="text" placeholder="Search for Books..."></input>
                <FaSearch className='search_icon'/>


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
            

                <button style={{background:"none", border:"none"}}><BsCart4 className='cart_icon'size={40} /></button>
                <Link to="/Sell">               
                <button className="sell" >SELL</button>
                </Link>
            </div>
        </div>
    );
};


export default Banner;