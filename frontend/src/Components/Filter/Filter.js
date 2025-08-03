import React, { useState } from 'react';
import './Filter.css';

const Filter = ({ onFilterChange }) => {
  const [openSections, setOpenSections] = useState({
    price: false,
    class: false,
    board: false,
    subject: false,
    medium: false
  });

  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 3000,
    classes: [],
    board: '',
    subjects: [],
    medium: ''
  });

  const boardOptions = [
      "CBSE","ICSE","CISCE","IGCSE","NIOS","State Board","IB",
  ].sort()


  const classOptions = [
      "Nursery",
      "KG",
      "1", "2", "3", "4", "5", "6",
      "7", "8", "9", "10", "11", "12"
  ];

  const subjectOptions = [
      "Hindi", "English", "Maths", "Chemistry", "Biology",
      "Physics", "Economics", "History", "Political Science","Civics"
  ].sort();


  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleClassChange = (cls) => {
    setFilters(prev => {
      const newClasses = prev.classes.includes(cls)
        ? prev.classes.filter(c => c !== cls)
        : [...prev.classes, cls];
      const updated = { ...prev, classes: newClasses };
      // console.log("🧪 Updated class filters:", updated.classes); // ✅ Add this
      onFilterChange(updated);
      return updated;
    });
  };

  const handleSubjectChange = (subj) => {
    setFilters(prev => {
      const newSubjects = prev.subjects.includes(subj)
        ? prev.subjects.filter(s => s !== subj)
        : [...prev.subjects, subj];
      const updated = { ...prev, subjects: newSubjects };
      onFilterChange(updated);
      return updated;
    });
  };

  const handleBoardChange = (e) => {
    const updated = { ...filters, board: e.target.value };
    setFilters(updated);
    onFilterChange(updated);
  };

  const handleMediumChange = (e) => {
    const updated = { ...filters, medium: e.target.value };
    setFilters(updated);
    onFilterChange(updated);
  };

  const handlePriceChange = (min, max) => {
    const updated = { ...filters, minPrice: min, maxPrice: max };
    setFilters(updated);
    onFilterChange(updated);
  };

  const handleClearFilters = () => {
    const cleared = {
      minPrice: 0,
      maxPrice: 3000,
      classes: [],
      board: '',
      subjects: [],
      medium: ''
    };
    setFilters(cleared);
    onFilterChange(cleared);
  };

  return (
    <div className="filterSection">
      <div className="filterHeading">Filters</div>

      {/* Price Range */}
      <div className="filter">
        <button className="filterLabel" onClick={() => toggleSection('price')}>
          Price
        </button>
        {openSections.price && (
          <div className="filterOptions">
            <label className="filterOptionLabel">
              <input type="radio" name="price" onChange={() => handlePriceChange(0, 500)} />
              ₹0 – ₹500
            </label>
            <label className="filterOptionLabel">
              <input type="radio" name="price" onChange={() => handlePriceChange(500, 1000)} />
              ₹500 – ₹1000
            </label>
            <label className="filterOptionLabel">
              <input type="radio" name="price" onChange={() => handlePriceChange(1000, 2000)} />
              ₹1000 – ₹2000
            </label>
            <label className="filterOptionLabel">
              <input type="radio" name="price" onChange={() => handlePriceChange(2000, 3000)} />
              ₹2000 – ₹3000
            </label>
          </div>
        )}
      </div>

      <hr className="searchlineGap" />

      {/* Class */}
      <div className="filter">
        <button className="filterLabel" onClick={() => toggleSection('class')}>
          Class
        </button>
        {openSections.class && (
          <div className="filterOptions">
            {classOptions.map(cls => (
              <label className="filterOptionLabel" key={cls}>
                <input
                  type="checkbox"
                  checked={filters.classes.includes(cls)}
                  onChange={() => handleClassChange(cls)}
                />
                {cls}
              </label>
            ))}
          </div>
        )}
      </div>

      <hr className="searchlineGap" />

      {/* Board */}
      <div className="filter">
        <button className="filterLabel" onClick={() => toggleSection('board')}>
          Board
        </button>
        {openSections.board && (
          <div className="filterOptions">
            {boardOptions.map(board => (
              <label className="filterOptionLabel" key={board}>
                <input
                  type="radio"
                  name="board"
                  checked={filters.board === board}
                  value={board}
                  onChange={handleBoardChange}
                />
                {board}
              </label>
            ))}
          </div>
        )}
      </div>

      <hr className="searchlineGap" />

      {/* Subject */}
      <div className="filter">
        <button className="filterLabel" onClick={() => toggleSection('subject')}>
          Subject
        </button>
        {openSections.subject && (
          <div className="filterOptions">
            {subjectOptions.map(subject => (
              <label className="filterOptionLabel" key={subject}>
                <input
                  type="checkbox"
                  checked={filters.subjects.includes(subject)}
                  onChange={() => handleSubjectChange(subject)}
                />
                {subject}
              </label>
            ))}
          </div>
        )}
      </div>

      <hr className="searchlineGap" />

      {/* Medium */}
      <div className="filter">
        <button className="filterLabel" onClick={() => toggleSection('medium')}>
          Medium
        </button>
        {openSections.medium && (
          <div className="filterOptions">
            {['English', 'Hindi'].map(med => (
              <label className="filterOptionLabel" key={med}>
                <input
                  type="radio"
                  name="medium"
                  checked={filters.medium === med}
                  value={med}
                  onChange={handleMediumChange}
                />
                {med}
              </label>
            ))}
          </div>
        )}
      </div>

      <hr className="searchlineGap" />

      <button onClick={handleClearFilters} className="clearFilterButton">
        Clear Filters
      </button>
    </div>
  );
};

export default Filter;
