import React from 'react';
import './Dropdown.css';

const Dropdown = ({ label, options }) => {
    return (
        <div className="dropdown">
            <div className="dropbtn">{label}</div>
            <div className="dropdown-content">
                {options.map((item, index) => (
                    <a href="#" key={index} onClick={(e) => {e.preventDefault();}}>{item}</a>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;