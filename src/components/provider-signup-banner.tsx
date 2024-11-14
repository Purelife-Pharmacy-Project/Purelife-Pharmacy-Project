'use client';
import { Button, Link } from '@nextui-org/react';
import { useEffect, useRef, useState } from 'react';

interface ProviderSignupBannerProps {
}
export const ProviderSignupBanner: React.FC<ProviderSignupBannerProps> = ({

}) => {
  const [backgroundSize, setBackgroundSize] = useState("");

  useEffect(() => {
    const updateBackgroundSize = () => {
      if (window.innerWidth < 640) {
        setBackgroundSize("65%");
      } else if (window.innerWidth < 768) {
        setBackgroundSize("50%");
      } else if (window.innerWidth < 1024) {
        setBackgroundSize("50%");
      } else if (window.innerWidth < 1280) {
        setBackgroundSize("42%");
      } else {
        setBackgroundSize("36%");
      }
    };
  
    updateBackgroundSize();
    window.addEventListener('resize', updateBackgroundSize);
    return () => window.removeEventListener('resize', updateBackgroundSize);
  }, []);
  const [rightPadding, setRightPadding] = useState("");

  useEffect(() => {
    const updateRightPadding = () => {
      if (window.innerWidth < 640) {
        setRightPadding("-8%");
      } else if (window.innerWidth < 768) {
        setRightPadding("2%");
      } else {
        setRightPadding("5%");
      }
    };
  
    updateRightPadding();
    window.addEventListener('resize', updateRightPadding);
    return () => window.removeEventListener('resize', updateRightPadding);
  }, []);
  return (
    <>
      <div
        style={{
          backgroundImage: `url('/images/provider-signup-image.png')`,
          backgroundPosition: `calc(100% - ${rightPadding}) bottom`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: backgroundSize,
        }}
        className={`banner-container h-[215px] sm:h-[320px] md:h-[370px] lg:h-[434px] w-full flex flex-col items-start justify-center`}
      >
        <div className={`ml-[5%] w-[50%]`}>
          <div
            className={`mb-3 md:mb-7 mt-2 sm:mt-8 text-center text-[18px] sm:text-3xl md:text-[37px] lg:text-5xl font-bold md:text-left w-[] sm:w-[100%] lg:w-[90%] xl:w-[80%] mb-[20px] !text-left leading-[1.2] !mb-2 sm:mb-7`}
          >
            Are you a healthcare provider interested in partnering with us?
          </div>
            <Button
              as={Link}
              href='/partner-with-us'
              target='_blank'
              className={`mt-0 sm:mt-3 lg:mt-6 h-auto w-[23%] bg-white py-[8px] sm:py-2 sm:text-sm text-[#262629] md:w-[30%] md:text-base lg:py-4 lg:text-lg ${'bg-[#FF0028] text-xs text-white'}`}
              radius='full'
              // size='lg'
            >
              Start Here
            </Button>
        </div>
      </div>
    </>
  );
};
