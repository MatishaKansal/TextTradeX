import React from 'react';
import './Dropdown.css';

const Dropdown = ({ label, options, onSelect }) => {
    const handleSelect = (item, e) => {
        e.preventDefault();
        if (onSelect) onSelect(item);
    };
    return (
        <div className="dropdown">
            <div className="dropbtn">{label}</div>
            <div className="dropdown-content">
                {options.map((item, index) => (
                    <a href="#" key={index} onClick={(e) => handleSelect(item, e)}>{item}</a>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;