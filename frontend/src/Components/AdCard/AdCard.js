import React,{useState} from 'react';
import { FaRegHeart } from "react-icons/fa";
import "./AdCard.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { VscHeartFilled } from "react-icons/vsc";
import { Link,useNavigate } from 'react-router-dom';


const AdCard = (props) => {

  const [state,setState]= useState(false);

  const addToCart = () => {
        const newState = !state;
        setState(newState);
        props.onCartToggle(props.id, newState);
    };

  return (
    <div className="card">
      <div className="card_top">
        <img src={
          props.images && props.images.length > 0
            ? `http://localhost:8080/${props.images[0].path}`
            : 'https://via.placeholder.com/150'
        } 
        alt={props.title}
        className="cardImage"/> 
        <button className="heartbutton" onClick={addToCart}> 
          {state? <VscHeartFilled className="heart"/> : <FaRegHeart className="heart"/>}
        </button>
      </div>
      <div className="bottom">
        <h3 className="price">₹ {props.price}</h3>
        <p className="title">{props.title}</p>
        <p className="desc">{props.desc}</p>
        <div className="button_style">
          <Link to={`/ViewMore/${props.id}`}>
            <button className='ViewbuttonText'>View More <FaLongArrowAltRight className="arrow_style" />
            </button>
          </Link>
      </div>
      </div>
      
      
    </div>
  );
}

export default AdCard;
