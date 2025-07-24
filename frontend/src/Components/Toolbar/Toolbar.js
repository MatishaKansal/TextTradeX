import React from 'react';
import Dropdown from './Dropdown/Dropdown';
import "./Toolbar.css"

const Toolbar = ({ onClassChange, onBoardChange, onSubjectChange, onMediumChange, onClearFilters }) => {
  const boardOptions = ["CBSE","ICSE","CISCE","IGCSE","NIOS","State Board","IB"];
  const classOptions = [ "Nursery", "KG", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
  const subjectOptions = ["Hindi", "English", "Mathematics", "Chemistry", "Biology", "Physics", "Economics", "History", "Political Science","Civics"];
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
