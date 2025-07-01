import React from 'react';
import "./Home.css";
// import Header from "../../Components/Header/Header";
import Toolbar from "../../Components/Toolbar/Toolbar";
import Banner from "../../Components/Banner/Banner";
import AdCard from "../../Components/AdCard/AdCard";
import Footer from "../../Components/Footer/Footer";
import ImageSlider from "../../Components/ImageSlider/ImageSlider";
import { useLocation } from 'react-router-dom';


const Home = () => {
  const location = useLocation();
//   console.log('name')

  const { name } = location.state || {};
  return (
        
    <div className='body'>
        <Banner name={name}/>
      <Toolbar />
      <ImageSlider />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <AdCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyroJpWIxQrIG5_1A8SI1a42PjXhQlMqkTQ&s" price="500" title="The quick brown fox jumps over the lazy dog again.
" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore. t, consectetur adipiscing elit. Sed do eiusmod te
"/>
        <AdCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyroJpWIxQrIG5_1A8SI1a42PjXhQlMqkTQ&s" price="500" title="Book" desc="Lorem ipsum dolor sit amet, cmpor incididunt ut labore.
"/>
        <AdCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyroJpWIxQrIG5_1A8SI1a42PjXhQlMqkTQ&s" price="500" title="Book" desc="Lorem ipsum dolor sit amet, cmpor incididunt ut labore.
"/>
        <AdCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyroJpWIxQrIG5_1A8SI1a42PjXhQlMqkTQ&s" price="500" title="Book" desc="Lorem ipsum dolor sit amet, cmpor incididunt ut labore.
"/>
        <AdCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyroJpWIxQrIG5_1A8SI1a42PjXhQlMqkTQ&s" price="500" title="The quick brown fox jumps over the lazy dog again.
" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
"/>
        <AdCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyroJpWIxQrIG5_1A8SI1a42PjXhQlMqkTQ&s" price="500" title="The quick brown fox jumps over the lazy dog again.
" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
"/>
        <AdCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyroJpWIxQrIG5_1A8SI1a42PjXhQlMqkTQ&s" price="500" title="The quick brown fox jumps over the lazy dog again.
" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
"/>
        <AdCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyroJpWIxQrIG5_1A8SI1a42PjXhQlMqkTQ&s" price="500" title="Book" desc="Lorem ipsum dolor sit amet, cmpor incididunt ut labore.
"/>
        <AdCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyroJpWIxQrIG5_1A8SI1a42PjXhQlMqkTQ&s" price="500" title="Book" desc="Lorem ipsum dolor sit amet, cmpor incididunt ut labore.
"/>
        <AdCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyroJpWIxQrIG5_1A8SI1a42PjXhQlMqkTQ&s" price="500" title="Book" desc="Lorem ipsum dolor sit amet, cmpor incididunt ut labore.
"/>
        <AdCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyroJpWIxQrIG5_1A8SI1a42PjXhQlMqkTQ&s" price="500" title="Book" desc="Lorem ipsum dolor sit amet, cmpor incididunt ut labore.
"/>
        <AdCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyroJpWIxQrIG5_1A8SI1a42PjXhQlMqkTQ&s" price="500" title="Book" desc="Lorem ipsum dolor sit amet, cmpor incididunt ut labore.
"/>
        <AdCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyroJpWIxQrIG5_1A8SI1a42PjXhQlMqkTQ&s" price="500" title="Book" desc="Lorem ipsum dolor sit amet, cmpor incididunt ut labore.
"/>
        <AdCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyroJpWIxQrIG5_1A8SI1a42PjXhQlMqkTQ&s" price="500" title="Book" desc="Lorem ipsum dolor sit amet, cmpor incididunt ut labore.
"/>
        <AdCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyroJpWIxQrIG5_1A8SI1a42PjXhQlMqkTQ&s" price="500" title="Book" desc="Lorem ipsum dolor sit amet, cmpor incididunt ut labore.
"/>
        <AdCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyroJpWIxQrIG5_1A8SI1a42PjXhQlMqkTQ&s" price="500" title="Book" desc="Lorem ipsum dolor sit amet, cmpor incididunt ut labore.
"/>
        <AdCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyroJpWIxQrIG5_1A8SI1a42PjXhQlMqkTQ&s" price="500" title="Book" desc="Lorem ipsum dolor sit amet, cmpor incididunt ut labore.
"/>
        <AdCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyroJpWIxQrIG5_1A8SI1a42PjXhQlMqkTQ&s" price="500" title="Book" desc="Lorem ipsum dolor sit amet, cmpor incididunt ut labore.
"/>
        <AdCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyroJpWIxQrIG5_1A8SI1a42PjXhQlMqkTQ&s" price="500" title="Book" desc="Lorem ipsum dolor sit amet, cmpor incididunt ut labore.
"/>
        <AdCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyroJpWIxQrIG5_1A8SI1a42PjXhQlMqkTQ&s" price="500" title="Book" desc="Lorem ipsum dolor sit amet, cmpor incididunt ut labore.
"/>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
