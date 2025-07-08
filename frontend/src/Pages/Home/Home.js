import React from 'react';
import "./Home.css";
// import Header from "../../Components/Header/Header";
import Toolbar from "../../Components/Toolbar/Toolbar";
import Banner from "../../Components/Banner/Banner";
import AdCard from "../../Components/AdCard/AdCard";
import Footer from "../../Components/Footer/Footer";
import ImageSlider from "../../Components/ImageSlider/ImageSlider";
import BookList from '../../Components/AdCard/BookList';
import { useLocation } from 'react-router-dom';
import { useState,useEffect } from 'react';


const Home = () => {

        const [ads, setAds] = useState([]);

  const location = useLocation();
//   console.log('name')

  const { name } = location.state || {};
  return (
        
    <div className='body'>
        <Banner name={name}/>
      <Toolbar />
      <ImageSlider />
      <BookList />
      <Footer />
    </div>
  );
}

export default Home;
