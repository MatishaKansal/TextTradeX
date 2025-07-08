import React,{useState} from 'react';
import { FaRegHeart } from "react-icons/fa";
import "./AdCard.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { VscHeartFilled } from "react-icons/vsc";



const AdCard = (props) => {

  const [state,setState]= useState(false);

  const addToCart =(e) =>{
    setState((prev) => !prev);
  }

  return (
    <div className="card">
      <div className="top">
        <img src={props.image} className="cardImage"/>
        <button className="heartbutton" onClick={addToCart}> 
          {state? <VscHeartFilled className="heart"/> : <FaRegHeart className="heart"/>}
        </button>
      </div>
      <div className="bottom">
        <h3 className="price">₹ {props.price}</h3>
        <p className="title">{props.title}</p>
        <p className="desc">{props.desc}</p>
        <div className="button">
        <button className='btText'>View More</button>
        <FaLongArrowAltRight style={{fontSize: "20px"}}/>
      </div>
      </div>
      
      
    </div>
  );
}

export default AdCard;
