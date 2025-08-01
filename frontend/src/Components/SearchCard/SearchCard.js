import React, { useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import "./SearchCard.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { VscHeartFilled } from "react-icons/vsc";
import { Link } from 'react-router-dom';

const SearchCard = (props) => {

    const [state, setState] = useState(false);

    const addToCart = () => {
        const newState = !state;
        setState(newState);
        props.onCartToggle(props.id, newState);
    };



    return (
        <div className="searchCardContainer">
            <div className='searchCard'>
                <div className="leftSearch">
                    <img src={props.image} className="searchcardImage" />
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
                            <button className='searchViewbuttonText'>View More <FaLongArrowAltRight className="search_arrow_style" /></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default SearchCard;
