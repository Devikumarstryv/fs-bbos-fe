import React, { useState, useEffect } from "react";
import image1 from '../Assets/images/BBOS_Banner.jpg'
import image2 from '../Assets/images/BBOS_Banner1.jpg'

function Slider() {
    const images = [image1, image2];

      const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      };

      useEffect(() => {
        const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval); // Clean up the interval on component unmount
      }, []);
    
  return (
    <div className="w-auto lg:mx-14 mx-3 mt-24">
      <div className="overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full"
        />
      </div>

      {/* Previous button */}
      {/* <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
      >
        &#10094;
      </button> */}

      {/* Next button */}
      {/* <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
      >
        &#10095;
      </button> */}
    </div>
  )
}

export default Slider
