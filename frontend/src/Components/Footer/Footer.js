import React from 'react';
import "./Footer.css";
import { FaArrowUp } from "react-icons/fa";
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const navigate = useNavigate();

  return (
    <footer className="footerStyle">
        <div >
            <span className="f_head"> Quick Links</span>
            <br></br>
            <button className="f_details" onClick={() => navigate("/")}>Home</button>
            <br></br>
            <button className="f_details" onClick={() => navigate("/Sell")}>Sell a Book</button>
            <br></br>
            <button className="f_details" onClick={() => navigate("/Signup")}>Login / Register</button>
        </div>
        <br></br>
        <div >
            <span className="f_head">Contact Us</span>
            <br></br>
            <button className="f_details" >Email: ________</button>
            <br></br>
            <button className="f_details" >Phone: +91 XXXXX XXXXX</button>
        </div>

        <br></br>
        <div >
            <span className="f_head"> Copyright</span>
            <br></br>
            <button className="f_details" >"© 2025 TextTradeX: All rights reserved"</button>
            <br></br>
            <button className="f_details" >"Made with ❤️ by [Team Name]"</button>
        </div>
            
                
        <div>
        </div>
      <button onClick={scrollToTop} className="buttonStyle">
        <FaArrowUp />
      </button>
    </footer>
  );

};


export default Footer;