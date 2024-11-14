'use client';
import { Button, Link } from '@nextui-org/react';
import { Section } from './home/Section';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface QualityHomeBannerProps {
  backgroundClassName?: string;
  buttonClassName?: string;
  textClassName?: string;
  theme?: string;
}
export const QualityHomeBanner: React.FC<QualityHomeBannerProps> = ({
  backgroundClassName,
  buttonClassName,
  textClassName,
  theme,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const divRef = useRef<HTMLDivElement>(null);

  const bannerImages = [
    theme === 'light'
      ? '/images/banner-frame-1.png'
      : '/images/banner-frame-2.png',
    '/images/pharmacy-banner-2.jpg',
    // '/images/pharmacy-banner-1.jpg',
  ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setFade(false);
  //     const timeout = setTimeout(() => {
  //       setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
  //       setFade(true);
  //     }, 500);
  //     return () => clearTimeout(timeout);
  //   }, 5000);
  //   return () => clearInterval(interval);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  const [backgroundSize, setBackgroundSize] = useState("");

  useEffect(() => {
    const updateBackgroundSize = () => {
      setBackgroundSize(window.innerWidth < 768 ? "70%" : "");
    };
    updateBackgroundSize();
    window.addEventListener("resize", updateBackgroundSize);
    return () => window.removeEventListener("resize", updateBackgroundSize);
  }, []);
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bannerImages[currentIndex]})`,
          backgroundPosition: `${currentIndex !== 0 ? 'center' : 'right bottom'}`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: `${currentIndex !== 0 ? 'cover' : backgroundSize}`,
        }}
        className={`banner-container min-h-[215px] md:min-h-[434px] w-full flex flex-col items-start justify-center ${currentIndex === 0 && theme === 'dark' && 'bg-[#1E272F]'} `}
      >
        <div className={`w-[95%] ml-[5%] md:w-[50%]`}>
          <div
            className={`mb-3 md:mb-7 mt-8 text-center text-[24px] sm:text-3xl lg:text-5xl font-bold sm:font-semibold md:text-left 
              ${currentIndex === 0 && 'w-[50%] md:w-[80%] mb-[20px] !text-left text-[24px] leading-[1.2] !mb-2 sm:mb-7'} 
              ${currentIndex === 1 && 'text-white !mt-10'}
              ${currentIndex === 0 && theme === 'dark' && 'text-white'}
              ${currentIndex === 0 && theme === 'light' && 'text-[#1E272F]'}`}
          >
            {currentIndex === 0
              ? 'Quality home healthcare you can trust'
              : currentIndex === 1
                && 'Subscribe to a drug refill'
                // : 'Limited Time offer! Up to 50%'
                }
          </div>
          <div
            ref={divRef}
            className={`mb-3 md:mb-7 mr-auto w-[100%] text-center text-sm sm:text-base font-medium md:text-left ${currentIndex === 0 && 'sm:block w-[60%] md:w-[80%] mt-2 !text-left mb-0'} ${
              currentIndex === 1 && 'text-white'
            } ${currentIndex === 0 && theme === 'light' && ' text-[#1E272F] !text-left text-xs mt-0'} ${currentIndex === 0 && theme === 'dark' && 'text-white !text-left text-xs mt-0  '}`}
          >
            {currentIndex === 0
              ? 'We provide homecare services such as Sample pickup for lab tests, Home vaccination and Home doctor visitation.'
              : currentIndex === 1
                && 'Get your medications delivered to you at your preferred intervals.'
                // : 'Take control of your health and experience the benefits of Purelife health'
                }
          </div>
          {currentIndex === 0 && (
            <Button
              as={Link}
              target='_blank'
              className={`sm:mt-3 w-[25%] bg-white h-auto py-3 text-[13px] text-[#262629] md:w-[30%] md:text-base lg:py-4 lg:text-lg ${currentIndex === 0 && theme === 'light' && 'bg-[#1E272F] text-white text-xs py-2'} ${currentIndex === 0 && theme === 'dark' && 'bg-white text-[#1E272F] text-xs py-2'}`}
              radius='full'
              // size='lg'
              isDisabled
            >
              Coming soon
            </Button>
          )}
          <div className={`mx-auto md:mx-0 mt-8 flex w-fit gap-2 cursor-pointer mb-5 ${currentIndex === 0 && '!mx-0 mb-6'}`}>
            {bannerImages.map((_, index) => (
              <div
                key={index}
                onClick={()=>{setCurrentIndex(index)}}
                className={`lg:h-[8px] lg:w-[30px] h-[5px] w-[20px] rounded-full 
                ${
                  currentIndex === index
                    ? theme === 'light'
                      ? 'bg-[#1E272F]'
                      : 'bg-[#000000]'
                    : 'bg-[#F6F6F6]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
