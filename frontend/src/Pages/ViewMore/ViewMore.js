import React, { useEffect, useState } from 'react';
import "./ViewMore.css";
import axios from 'axios';
import { baseUrl } from "../urls";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import Banner from '../../Components/Banner/Banner'
import Footer from '../../Components/Footer/Footer'
import Toolbar from '../../Components/Toolbar/Toolbar'
import { IoIosPricetags } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";
import { IoSchool } from "react-icons/io5";
import { MdClass } from "react-icons/md";
import { LuSchool } from "react-icons/lu";
import { TbListDetails } from "react-icons/tb";
import { FaLocationArrow } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";

const ViewMore = () => {

  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        console.log(id)
        const res = await axios.get(`${baseUrl}/api/books/bookInfo/${id}`);
        setBook(res.data);
      } catch (err) {
        console.error('Failed to load book:', err);
        setError('Book not found');
      }
    };
    fetchBook();
  }, [id]);

  if (error) return <div>{error}</div>;
  if (!book) return <div>Loading...</div>;

  const images = book.images || [];
  const length = images.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + length) % length);
  };

  return (
    <div>
      <div>
        <Banner />
        <Toolbar />
      </div>
      

      <div className="detailScreen">
        <div className='detailBox'>

          <div className="infoLeftSide">
            <div className='block'>
              <div className="slider">
                <button className="left-arrow" 
                onClick={prevSlide}
                >
                  ❮
                </button>
                <button className="right-arrow" 
                onClick={nextSlide}
                >
                  ❯
                </button>
                {images.map((img, index) => (
                  <div
                    className={index === current ? 'slide active' : 'slide'}
                    key={index}
                  >
                    {index === current && (
                      <img src={`${baseUrl}/${img.path}`} alt="slider" className="adImage" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="chatButtons">
            <div className="chatBtn1">
              <button className='btnChat1'>Chat With Seller <FaLongArrowAltRight className="icon-fix" /></button>
              </div>
            <div className="chatBtn2">
              <button className='btnChat2'>Deal !! </button>
              </div>
          </div>
          </div>

          <div className="infoRightSide">

            <div className="mainInfo">
              
              <div className="infoTitle">
                <span className="titleText"> {book.title}</span>
              </div>
              <hr className='lineGap' />

              <div className="infoPriceTitle">
                <div className='infoPrice'> 
                  <IoIosPricetags />
                   <span style = {{fontWeight: '700'}}> Price:</span> <br></br>
                    <span className= "priceStyle" style = {{fontWeight: '400'}}> {book.price}</span>
                  </div>
                  </div>
            </div>

            <hr className='lineGap' />

            { <hr className='lineGap' /> }

            <div className="additional">
              <div className="moreDetailsText">
                  <TbListDetails className="iconDetails" />
                  <span className="aboutTheBook"> About the book</span>
              </div>
              <div className="extraInfo">
                <LuSchool style={{color: "#164841"}}/>
                <span className="details_margin"> Subject : </span>
                <span className="details_text"> {book.subject} </span>
                </div>
              <div className="extraInfo">
                <MdClass style ={{color: "#4300DB"}}/>
                <span className="details_margin"> Class : </span>
                <span className="details_text"> {book.Class} </span>
                </div>
              <div className="extraInfo">
                <IoSchool style= {{color: "brown"}}/>
                <span className="details_margin"> Board : </span>
                <span className="details_text"> {book.board} </span>
              </div>
              <div className="extraInfo">
                <GrLanguage style={{color: "#4DAADD"}}/>
                <span className="details_margin"> Medium : </span>
                <span className="details_text"> {book.medium} </span>
                </div>
              <div className="extraInfo">
                <FaLocationArrow style={{color:"#636363"}}/>
                <span className="details_margin"> Location : </span> 
                <span className="details_text"> {book.location} </span>
            </div>
            </div>

            <hr className='lineGap' />

              <div className="moreDetailsText">
              <span><IoMdInformationCircleOutline className="icon-fix"/> Description </span>
            </div>
                <div className="infoDesc">
                <span> {book.description}</span>

              </div>

            <hr className='lineGap' />
                            <div className="chatButtons">
            <div className="chatBtn3">
              <button className='btnChat3'> <FaRegHeart className="heart-icon-fix" />  Add to Favourites</button>
              </div>
          </div>
                

          </div>
        </div>
      </div>

          <div><Footer /></div>

    </div>
  );
}

export default ViewMore;
