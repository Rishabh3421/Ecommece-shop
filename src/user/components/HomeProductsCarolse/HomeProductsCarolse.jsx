import React, { useState, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeProducts from '../HomeProducts/HomeProducts'; 
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


const HomeProductsCarousel = ({data,section}) => {
  const [activeIndex, setActiveIndex] = useState(0); 
  const carouselRef = useRef(null); 

  const responsive = {
    0: { items: 1.5 }, 
    720: { items: 3 },
    1024: { items: 4.5 },
  };

  const handleSlidePrev = () => {
    // Use AliceCarousel method to navigate left
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
      setActiveIndex(prevIndex => prevIndex + 1); 
    }
  };

  const handleSlideNext = () => {
    // Use AliceCarousel method to navigate right
    if (carouselRef.current) {
      carouselRef.current.slideNext();
      setActiveIndex(prevIndex => prevIndex + 1); 
    }
  };

  const items = data.slice(0, 12).map((item, index) => (
    <HomeProducts key={index} product={item} />
  ));

  return (
    <div className='relative px-4 lg:px-8'>
      <h2 className='font-bold text-2xl'>{section}</h2>
      <div className='relative p-5'>
        <AliceCarousel
          disableDotsControls 
          disableButtonsControls // Disable default arrow buttons navigation
          responsive={responsive}
          items={items}
          onSlideChange={setActiveIndex} // Keep for state update on user interaction
          activeIndex={activeIndex}
          ref={carouselRef} 
        />

        <button
          variant="contained"
          className='z-50 transition-transform duration-300 ease-in-out' // Add transition for smooth animation
          onClick={handleSlidePrev}
          style={{
            position: 'absolute',
            top: '8rem',
            left: '0rem',
            transform: `translateX(-50%) rotate(90deg) translateX(${activeIndex === 0 ? '-2rem' : '0'})`, // Adjust transform based on activeIndex
          }}
          color='white'
          aria-label='next'
        >
          <KeyboardArrowLeftIcon sx={{ transform: "rotate(-90deg)" }} />
        </button>

        <button
          variant="contained"
          className='z-50 transition-transform duration-300 ease-in-out' // Add transition for smooth animation
          onClick={handleSlideNext}
          style={{
            position: 'absolute',
            top: '8rem',
            right: '0rem',
            transform: `translateX(50%) rotate(90deg) translateX(${activeIndex === items.length - 4 ? '2rem' : '0'})`, // Adjust transform based on activeIndex
          }}
          color='white'
          aria-label='previous'
        >
          <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)" }} />
        </button>

      </div>
    </div>
  );
};

export default HomeProductsCarousel;
