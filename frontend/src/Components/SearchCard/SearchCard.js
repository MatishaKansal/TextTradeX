import React, { useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import "./SearchCard.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { VscHeartFilled } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import { baseUrl } from '../../Pages/urls.jsx';

const SearchCard = (props) => {
    const [state, setState] = useState(false);

    const addToCart = () => {
        const newState = !state;
        setState(newState);
        props.onCartToggle(props.id, newState);
    };

    // Handle image rendering (array or string)
    let imageUrl = '/default-book.jpg'; // fallback

    if (Array.isArray(props.image) && props.image.length > 0) {
        imageUrl = `${baseUrl}/${props.image[0].path.replace(/\\/g, '/')}`; // Ensure proper URL format
    } else if (typeof props.image === 'string' && props.image.startsWith('http')) {
        imageUrl = props.image;
    }

    return (
        <div className="searchCardContainer">
            <div className='searchCard'>
                <div className="leftSearch">
                    <img src={imageUrl} className="searchcardImage" alt="Book" />
                    <button className="searchheartbutton" onClick={addToCart}>
                        {state ? <VscHeartFilled className="searchheart" /> : <FaRegHeart className="searchheart" />}
                    </button>
                </div>
                <div className="rightSearch">
                    <p className="searchprice">₹ {props.price}</p>
                    <p className="searchtitle">{props.title}</p>
                    <p className="searchdesc">{props.desc}</p>
                    <div className="search_button_style">
                        <Link to={`/ViewMore/${props.id}`}>
                            <button className='searchViewbuttonText'>
                                View More <FaLongArrowAltRight className="search_arrow_style" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchCard;
