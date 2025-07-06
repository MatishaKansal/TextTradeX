import React from 'react';
import "./Footer.css";
import { FaArrowUp } from "react-icons/fa";
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0,0);
  };

  const navigate = useNavigate();

  return (
    <>
      <footer className="footerStyle">
        <div className="topRow">
          <div >
            <span className="f_head"> Quick Links</span>
            <br />
            <button className="f_details" onClick={() => navigate("/")}>Home</button>
            <br></br>
            <button className="f_details" onClick={() => navigate("/Information")}>About</button>
            <br></br>
            <button className="f_details" onClick={() => navigate("/Sell")}>Sell a Book</button>
            <br></br>
            <button className="f_details" onClick={() => navigate("/Signup")}>Login / Register</button>
          </div>
          <br></br>
          <div >
            <span className="f_head">Contact Us</span>
            <br />
            <button className="f_detail" >Email: ________</button>
            <br></br>
            <button className="f_detail" >Phone: +91 XXXXX XXXXX</button>
          </div>
        </div>
        <br></br>
        <div  >
          <span className="f_head"> Copyright</span>
          <br />
          <button className="f_detail" >"© 2025 TextTradeX: All rights reserved"</button>
          <br />
          <button className="f_detail" >"Made with ❤️ by [Team Name]"</button>
        </div>

        <button onClick={scrollToTop} className="buttonStyle">
          <FaArrowUp />
        </button>
      </footer>
    </>
  );

};


export default Footer;