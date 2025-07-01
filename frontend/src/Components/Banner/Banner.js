import React from 'react';
import "./Banner.css";
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TextTradeX from './TextTradeX.png'
import { FaSearch } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
// import Signup from '../Signup/Signup';

const Banner = ({name}) => {
    return (
        <div>
            <div className="titlebar">
                <img className = "logo_img" src= {TextTradeX} alt="Icon"/>
                <span className="logo_name">TextTradeX</span>
                <input className = "search_bar" type="text" placeholder="Search for Books..."></input>
                <FaSearch className='search_icon'/>
                <Link to="/Signup">
                <button className="register" >{name ||'Register'}</button>
                </Link>
                <button className="cart_button"><BsCart4 className='cart_icon'size={40} /></button>
                <button className="sell" >SELL</button>

            </div>
        </div>
    );
};


export default Banner;