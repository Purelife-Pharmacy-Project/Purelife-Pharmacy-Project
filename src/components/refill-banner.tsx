'use client';
import React, { useEffect, useRef, useState } from 'react';

const RefillBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const divRef = useRef<HTMLDivElement>(null);

  const bannerImages = [
    '/images/pharmacy-banner-1.jpg',
    '/images/pharmacy-banner-2.jpg',
    '/images/pharmacy-banner-1.jpg',
    '/images/pharmacy-banner-2.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      const timeout = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
        setFade(true);
      }, 500);
      return () => clearTimeout(timeout);
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${bannerImages[currentIndex]})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className={`banner-container mt-16 hidden min-h-[434px] w-full flex-col items-start justify-center rounded-[20px] lg:flex ${
        fade ? 'fade-in' : 'fade-out'
      }`}
    >
      <div className='mx-auto w-[95%] lg:ml-[5%] lg:w-[50%]'>
        <div
          className={`mb-7 mt-8 text-center text-5xl font-semibold lg:mt-0 lg:text-left ${
            (currentIndex === 1 || currentIndex === 3) && 'text-white'
          }`}
        >
          {currentIndex === 0 || currentIndex === 2
            ? 'Limited Time offer! Up to 50%'
            : 'Subscribe to a drug refill'}
        </div>
        <div
          ref={divRef}
          className={`mb-7 mr-auto text-center text-xl font-medium lg:text-left ${
            (currentIndex === 1 || currentIndex === 3) && 'text-white'
          }`}
        >
          {currentIndex === 0 || currentIndex === 2
            ? 'Take control of your health and experience the benefits of Purelife health'
            : 'Get your medications delivered to you at your preferred intervals.'}
        </div>
        <div className='mt-8 flex w-fit gap-2'>
          {bannerImages.map((_, index) => (
            <div
              key={index}
              className={`h-[8px] w-[30px] rounded-full ${
                currentIndex === index ? 'bg-[#1E272F]' : 'bg-[#D9D9D9]'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RefillBanner;
