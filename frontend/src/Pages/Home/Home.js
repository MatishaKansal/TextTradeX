import React from 'react';
import "./Home.css";
// import Header from "../../Components/Header/Header";
import Toolbar from "../../Components/Toolbar/Toolbar";
import Banner from "../../Components/Banner/Banner";
import AdCard from "../../Components/AdCard/AdCard";
import Footer from "../../Components/Footer/Footer";
import ImageSlider from "../../Components/ImageSlider/ImageSlider";
import { useLocation } from 'react-router-dom';
import { useState,useEffect } from 'react';


const Home = () => {

        const [ads, setAds] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:8080")  
//       .then((res) => {
//         setAds(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching ads:", err);
//       });
//   }, []);

  const location = useLocation();
//   console.log('name')

  const { name } = location.state || {};
  return (
        
    <div className='body'>
        <Banner name={name}/>
      <Toolbar />
      <ImageSlider />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {
                ads.map((ad) => {
                        <AdCard key={ad.id} image={ad.img} price="500" title={ad.title} desc={ad.desc}/>
                })
        }
        </div>
      <Footer />
    </div>
  );
}

export default Home;
