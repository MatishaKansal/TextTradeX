import React from 'react';
import Dropdown from './Dropdown/Dropdown';
import "./Toolbar.css"

const Toolbar = ({ onClassChange, onBoardChange, onSubjectChange, onMediumChange, onClearFilters }) => {
  const boardOptions = ['CBSE', 'CISCE', 'IB', 'IGCSE', 'NIOS', 'ICSE'];
  const classOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  const subjectOptions = ['Math', 'Science', 'English', 'History', 'Geography', 'Computer Science','Hindi'];
  const mediumOptions = ['English', 'Hindi'];


  return (
    <div className = "bar">
      <Dropdown label="All" options={['Show all']} onSelect={onClearFilters} />
      <Dropdown label="Board" options={boardOptions.sort()} onSelect={onBoardChange} />
      <Dropdown label="Class" options={classOptions} onSelect={onClassChange} />
      <Dropdown label="Subject" options={subjectOptions.sort()} onSelect={onSubjectChange} />
      <Dropdown label="Medium" options={mediumOptions.sort()} onSelect={onMediumChange} />
      <Dropdown label="Newly Added" options={[]} />
    </div>
  );
};

export default Toolbar;
