import React, { useState, useEffect } from 'react';
import './ImageSlider.css';
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'

const images = [
  img1,img2,img3,img4
  // './images/img1.jpg',
  // './images/img2.jpg',
  // './images/img3.png'
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  // Auto-slide every 3 seconds (optional)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % length);
    }, 10000);
    return () => clearInterval(timer);
  }, [length]);

  const nextSlide = () => {
    setCurrent((current + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + length) % length);
  };

  return (
    <div className='back'>
    <div className="slider">
      <button className="left-arrow" onClick={prevSlide}>
        ❮
      </button>
      <button className="right-arrow" onClick={nextSlide}>
        ❯
      </button>
      {images.map((img, index) => (
        <div
          className={index === current ? 'slide active' : 'slide'}
          key={index}
        >
          {index === current && (
            <img src={img} alt="slider" className="image" />
          )}
        </div>
      ))}
    </div>
    </div>

    // <img src ={img1}></img>
  );
};

export default ImageSlider;
