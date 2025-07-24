import React, { useState, useEffect } from 'react';
import { FaRegHeart } from "react-icons/fa";
import "./CartCard.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { VscHeartFilled } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import "./CartCard.css";

const CartCard = (props) => {

 const [removed, setRemoved] = useState(false);

  useEffect(() => {
    if (removed) {
      props.onRemove(props.key);
    }
  }, [removed, props.key, props.onRemove]);

  const handleRemove = () => {
    setRemoved(true);
  };


  return (
    <div className='cartCard'>
      <div className="cartCardLeft">
        <img src={props.image} className="cartCardImage" />

      </div>
      <div className="cartCardRight">
        <h3 className="price">₹ {props.price}</h3>
        <p className="title">{props.title}</p>
        <p className="cartDesc">{props.desc}</p>
        <button className="heartbutton" onClick={handleRemove}>
          <VscHeartFilled className="cartHeart" />
        </button>
        <div className="button">
          <Link to={`/${props.key}`}>
          <button className='btText'>View More</button>
          <FaLongArrowAltRight style={{ fontSize: "20px" }} />
          </Link>
        </div>

      </div>
    </div>
  );
}

export default CartCard;
