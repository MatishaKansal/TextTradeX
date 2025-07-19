import React, { useState , useEffect} from 'react';
import axios from 'axios';
import "./Filter.css";
import { baseUrl } from "../../Pages/urls";


const Filter = () => {


    // Price 
    const [filterPrice, setFilterPrice] = useState(0);

        const [showSlider, setShowSlider] = useState(false);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(3000);

    const handleMinChange = (e) => {
        const value = Math.min(Number(e.target.value), maxPrice - 100);
        setMinPrice(value);
    };

    const handleMaxChange = (e) => {
        const value = Math.max(Number(e.target.value), minPrice + 100);
        setMaxPrice(value);
    };

    // Class

    const [showClassOptions, setShowClassOptions] = useState(false);
    const [selectedClasses, setSelectedClasses] = useState([]);

    const classOptions = [
        "Nursery",
        "KG",
        "I", "II", "III", "IV", "V", "VI",
        "VII", "VIII", "IX", "X", "XI", "XII"
    ];

    const toggleClassSelection = (cls) => {
        setSelectedClasses((prev) =>
        prev.includes(cls)
            ? prev.filter((item) => item !== cls) 
            : [...prev, cls] 
        );
    };

    // Board
    const [showBoardOptions, setShowBoardOptions] = useState(false);
    const [filterBoard, setFilterBoard] = useState(undefined);
    const boardOptions = [
        "CBSE","ICSE","CISCE","IGCSE","NIOS","State Board","IB",
    ].sort();


    // Subject
    const [showSubjectOptions, setShowSubjectOptions] = useState(false);
    const [selectedSubjects, setSelectedSubjects] = useState([]);

    const subjectOptions = [
        "Hindi", "English", "Maths", "Chemistry", "Biology",
        "Physics", "Economics", "History", "Political Science","Civics"
    ].sort();

    const toggleSubjectSelection = (sub) => {
        setSelectedSubjects((prev) =>
        prev.includes(sub)
            ? prev.filter((item) => item !== sub) 
            : [...prev, sub] 
        );
    };

    useEffect(() => {
        const debounceTimeout = setTimeout(() => {
            const fetchFilteredData = async () => {
                try {
                    const response = await axios.post(`${baseUrl}/api/books/bookInfo`, {
                        priceRange: { min: minPrice, max: maxPrice },
                        classes: selectedClasses,
                        board: filterBoard,
                        subjects: selectedSubjects,
                    });

                    console.log("Filtered data:", response.data);
                } catch (error) {
                    console.error("Error fetching filtered data:", error);
                }
            };

            const hasFilters =
                minPrice > 0 ||
                maxPrice < 3000 ||
                selectedClasses.length > 0 ||
                filterBoard !== undefined ||
                selectedSubjects.length > 0;

            if (hasFilters) {
                fetchFilteredData();
            }

        }, 500);

        return () => clearTimeout(debounceTimeout);
    }, [minPrice, maxPrice, selectedClasses, filterBoard, selectedSubjects]);





    return (
        <div className='filterSection'>

            <label className='filterHeading' >FILTERS</label>


            { <hr className='searchlineGap' /> }
            <div className="filter">
            <button className="filterLabel" onClick={() => setShowSlider(prev => !prev)}>PRICE</button>

            {showSlider && (
                <div className="filterOptionLabel">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <input
                    type="range"
                    min={0}
                    max={3000}
                    value={minPrice}
                    onChange={handleMinChange}
                    />
                    <input
                    type="range"
                    min={0}
                    max={3000}
                    value={maxPrice}
                    onChange={handleMaxChange}
                    />
                    <label>₹{minPrice} – ₹{maxPrice}</label>
                </div>
                </div>
            )}
            </div>


            { <hr className='searchlineGap' /> }

            <div className="filter">
            <button
                className="filterLabel"
                onClick={() => setShowClassOptions((prev) => !prev)}
                style={{ cursor: 'pointer' }}
            >
                CLASS
            </button>

            {showClassOptions && (
                <div className="filterOptions">
                {classOptions.map((cls, index) => (
                    <label className="filterOptionLabel" key={index}>
                    <input
                        type="checkbox"
                        value={cls}
                        checked={selectedClasses.includes(cls)}
                        onChange={() => toggleClassSelection(cls)}
                    />
                    {cls}
                    </label>
                ))}
                </div>
            )}
            </div>

            { <hr className='searchlineGap' /> }


            <div className="filter">
                <button
                    className="filterLabel"
                    onClick={() => setShowBoardOptions((prev) => !prev)}
                    style={{ cursor: 'pointer' }}
                >
                    BOARD
                </button>

                {showBoardOptions && (
                    <div className="filterOptions">
                    {boardOptions.map((board, index) => (
                        <label className="filterOptionLabel" key={index}>
                        <input
                            type="radio"
                            name="board"
                            value={board}
                            onClick={() => {
                            if (filterBoard === board) setFilterBoard(undefined);
                            else setFilterBoard(board);
                            }}
                            checked={filterBoard === board}
                        />
                        {board}
                        </label>
                    ))}
                    </div>
                )}
                </div>

            { <hr className='searchlineGap' /> }


        <div className="filter">
            <button
                className="filterLabel"
                onClick={() => setShowSubjectOptions((prev) => !prev)}
                style={{ cursor: 'pointer' }}
            >
                SUBJECT
            </button>

            {showSubjectOptions && (
                <div className="filterOptions">
                {subjectOptions.map((sub, index) => (
                    <label className="filterOptionLabel" key={index}>
                    <input
                        type="checkbox"
                        value={sub}
                        checked={selectedSubjects.includes(sub)}
                        onChange={() => toggleSubjectSelection(sub)}
                    />
                    {sub}
                    </label>
                ))}
                </div>
            )}
            </div>

            { <hr className='searchlineGap' /> }

        </div>
    );
}

export default Filter
