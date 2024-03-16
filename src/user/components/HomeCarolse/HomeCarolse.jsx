import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { HomeCarolseData } from './HomeCarolseData';

const HomeCarousel = () => {
  const items = HomeCarolseData.map((item) => (
    <img key={item.id} className='cursor-pointer' role='presentation' src={item.image} alt='' />
  ));

  return (
    <>
      <AliceCarousel
        mouseTracking
        items={items}
        controlsStrategy="none"
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={4000}
        animationDuration={1000}
        infinite
        disableButtonsControls
        
      />
    </>
  );
};

export default HomeCarousel;
