import React from 'react';
import Dropdown from './Dropdown/Dropdown';
import "./Toolbar.css"

const App = () => {
  const boardOptions = ['CBSE', 'CISCE', 'IB', 'IGCSE', 'NIOS', 'ICSE'];
  const classOptions = ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'];
  const subjectOptions = ['Math', 'Science', 'English', 'History', 'Geography', 'Computer Science','Hindi',];
  const mediumOptions = ['English', 'Hindi'];

  return (
    <div className = "bar">
      <Dropdown label="All" options={[]} />
      <Dropdown label="Board" options={boardOptions.sort()} />
      <Dropdown label="Class" options={classOptions} />
      <Dropdown label="Subject" options={subjectOptions.sort()} />
      <Dropdown label="Medium" options={mediumOptions.sort()} />
      <Dropdown label="Newly Added" options={[]} />
    </div>
  );
};

export default App;
