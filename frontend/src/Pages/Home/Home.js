import React from 'react';
import "./Home.css";
// import Header from "../../Components/Header/Header";
import Toolbar from "../../Components/Toolbar/Toolbar";
import Banner from "../../Components/Banner/Banner";
import AdCard from "../../Components/AdCard/AdCard";
import Footer from "../../Components/Footer/Footer";
import ImageSlider from "../../Components/ImageSlider/ImageSlider";
import BookList from '../../Components/BookList/BookList';
import { useLocation } from 'react-router-dom';
import { useState,useEffect } from 'react';

const Home = () => {

  // const [ads, setAds] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedBoard, setSelectedBoard] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedMedium, setSelectedMedium] = useState("");
  const [filterResetCounter, setFilterResetCounter] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const location = useLocation();
  //   console.log('name')
  const { name } = location.state || {};

  const handleClassChange = (className) => {
    setSelectedClass(className);
    setSelectedBoard("");
    setSelectedSubject("");
    setSelectedMedium("");
  };

  const handleBoardChange = (board) => {
    setSelectedBoard(board);
    setSelectedClass("");
    setSelectedSubject("");
    setSelectedMedium("");
  };

  const handleSubjectChange = (subject) => {
    setSelectedSubject(subject);
    setSelectedClass("");
    setSelectedBoard("");
    setSelectedMedium("");
  };

  const handleMediumChange = (medium) => {
    setSelectedMedium(medium);
    setSelectedClass("");
    setSelectedBoard("");
    setSelectedSubject("");
  };

  const handleClearFilters = () => {
    setSelectedClass("");
    setSelectedBoard("");
    setSelectedSubject("");
    setSelectedMedium("");
    setFilterResetCounter(prev => prev + 1); // Increment to trigger re-render
  };

  const handleSearch = (term) => {
    setSelectedClass("");
    setSelectedBoard("");
    setSelectedSubject("");
    setSelectedMedium("");
    setSearchQuery(term);
    setFilterResetCounter(prev => prev + 1); 
  };
  

  return (
        
    <div className='body'>
      <Banner name={name} onSearch={handleSearch}/>
      <Toolbar 
        onClassChange = {handleClassChange}
        onBoardChange = {handleBoardChange}
        onSubjectChange = {handleSubjectChange}
        onMediumChange = {handleMediumChange}
        onClearFilters = {handleClearFilters}
      />
      <ImageSlider />
      <BookList
        selectedClass = {selectedClass}
        selectedBoard = {selectedBoard}
        selectedSubject = {selectedSubject}
        selectedMedium = {selectedMedium}
        filterResetCounter={filterResetCounter} // Pass the counter
        searchQuery={searchQuery} // Pass the search query
        />
      <Footer />
    </div>
  );
}

export default Home;
