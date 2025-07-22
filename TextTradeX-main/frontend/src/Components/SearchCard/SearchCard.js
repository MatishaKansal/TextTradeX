import React, { useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import "./SearchCard.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { VscHeartFilled } from "react-icons/vsc";
import { Link } from 'react-router-dom';

const SearchCard = () => {

    const [state, setState] = useState(false);

    const addToCart = (e) => {
        setState((prev) => !prev);
    }


    return (
        <div className='searchCard'>
            <div className="leftSearch">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKTezalux1__3KwbJ1Bt-WnQQkW82G1Nwy6g&s" className="searchcardImage" />
                <button className="searchheartbutton" onClick={addToCart}>
                    {state ? <VscHeartFilled className="searchheart" /> : <FaRegHeart className="searchheart" />}
                </button>
            </div>
            <div className="rightSearch">
                <p className="searchprice">₹ 500</p>
                <p className="searchtitle">ijojjijioj</p>
                <p className="searchdesc">######################### ############ ######################### ####################33</p>
                <div className="button">
                    {/* <Link to={"`/${props.key}`"}> */}
                        <button className='searchbtText'>View More
                            <FaLongArrowAltRight style={{ fontSize: "20px" }} />
                        </button>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    );
}

export default SearchCard;
