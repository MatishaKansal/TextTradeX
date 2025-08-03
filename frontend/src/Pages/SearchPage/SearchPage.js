import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Filter from '../../Components/Filter/Filter';
import SearchList from '../../Components/SearchCard/SearchList';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import './SearchPage.css';

const SearchPage = () => {
  const location = useLocation();

  const [filters, setFilters] = useState({
    classes: [],
    board: '',
    subjects: [],
    medium: '',
    minPrice: 0,
    maxPrice: 3000,
    searchQuery: '', // Important: Match key used in SearchList
  });

  // Update searchQuery when URL changes
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("search") || "";
    console.log("📌 URL Search Query:", query);

    setFilters(prev => ({
      ...prev,
      searchQuery: query
    }));
  }, [location.search]);

  // Handle filter changes from <Filter />
  const handleFilterChange = (updatedFilters) => {
    setFilters(prev => ({
      ...prev,
      ...updatedFilters,
      searchQuery: prev.searchQuery, // ✅ Ensure searchQuery is not overwritten
    }));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Banner />
      <div className="searchpage">
        <div className="searchFilterContainer">
          <Filter onFilterChange={handleFilterChange} />
        </div>
        <div className="divider"></div>
        <div className="searchCardContainer">
          <SearchList filters={filters} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;