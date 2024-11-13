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
  const [backgroundSize, setBackgroundSize] = useState("");

  useEffect(() => {
    const updateBackgroundSize = () => {
      setBackgroundSize(window.innerWidth < 768 ? "80%" : "");
    };
    updateBackgroundSize();
    window.addEventListener("resize", updateBackgroundSize);
    return () => window.removeEventListener("resize", updateBackgroundSize);
  }, []);
  return (
    <>
      {/* <div
        className={`flex justify-center ${backgroundClassName}`}
      >
        <Section
          className={`grid gap-4 bg-[#1E272F] sm:grid-cols-[1fr_1.4fr] ${backgroundClassName}`}
        >
          <div className='flex flex-col justify-center pt-10 sm:py-14'>
            <div className='relative flex w-[60%] sm:w-full flex-col justify-between text-[#1E272F] md:h-fit '>
              <h1 className={`${textClassName} mb-4 flex h-auto max-w-[70%] flex-col xl:gap-3 bg-transparent font-bold  sm:max-w-[100%] text-3xl md:text-4xl lg:max-w-[500px] xl:text-5xl`}>
                <span className='whitespace-nowrap'>Quality home</span>
                <span className='whitespace-nowrap'>healthcare you can</span>
                <span className='whitespace-nowrap'>trust</span>
              </h1>
              <p className={`md:text-base text-xs ${textClassName}`}>
                We provide homecare services such as Sample pickup for lab
                tests, Home vaccination and Home doctor visitation.
              </p>
            </div>

            <Button
              as={Link}
              target='_blank'
              className={`mt-6 w-[30%] bg-white text-sm text-[#262629] md:text-base md:w-[40%] py-3 lg:py-8 lg:text-lg ${buttonClassName}`}
              radius='full'
              size='lg'
            >
              Book Session
            </Button>
            <div className=' mt-4 flex w-fit gap-2'>
              {[1,2,3,4].map((_, index) => (
                <div
                  key={index}
                  className={`h-[8px] w-[30px] rounded-full ${
                    _ === 1 ? 'bg-[#1E272F]' : 'bg-[#D9D9D9]'
                  }`}
                />
              ))}
            </div>
          </div>
          <div className='relative -mt-[130px] md:h-[400px] lg:h-[500px] flex items-end justify-end overflow-hidden pt-[50px] sm:-mt-0 sm:pt-0'>
            <Image
              width={300}
              height={270}
              className=' -mb-[50px] h-auto w-[600px] max-w-[400px] sm:-ml-[10%] md:-mb-[40px] md:mr-[5%] md:max-w-[450px] lg:max-w-[650px]'
              src={'/images/quality-home-bg.png'}
              alt={'quality home image'}
            />
            <Image
              width={400}
              height={470}
              className='absolute -right-12 bottom-0 h-auto w-[800px] max-w-[450px] sm:-right-14 sm:max-w-[580px] md:-right-20 md:max-w-[620px] lg:-right-24 lg:max-w-[780px]'
              src={'/images/quality-home-image.png'}
              alt={'quality home image'}
            />
          </div>
        </Section>
      </div> */}
      <div
        style={{
          backgroundImage: `url(${bannerImages[currentIndex]})`,
          backgroundPosition: `${currentIndex !== 0 ? 'center' : 'right bottom'}`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: `${currentIndex !== 0 ? 'cover' : backgroundSize}`,
        }}
        className={`banner-container mt-16 min-h[250px] sm:min-h-[250px] md:min-h-[434px] w-full flex flex-col items-start justify-center ${currentIndex === 0 && theme === 'dark' && 'bg-[#1E272F]'} `}
      >
        <div className={`w-[95%] ml-[5%] md:w-[50%] ${currentIndex === 0 && 'mt-10'}`}>
          <div
            className={`mb-3 md:mb-7 mt-8 text-center text-2xl sm:text-4xl lg:text-5xl font-semibold lg:mt-0 md:text-left 
              ${currentIndex === 0 && 'w-[50%] md:w-[80%] mt-8 !text-left text-xl mb-1'} 
              ${currentIndex === 1 && 'text-white'}
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
            className={`mb-3 md:mb-7 mr-auto w-[100%] text-center text-sm sm:text-lg font-medium md:text-left ${currentIndex === 0 && 'w-[50%] md:w-[80%] mt-8 !text-left'} ${
              currentIndex === 1 && 'text-white'
            } ${currentIndex === 0 && theme === 'light' && ' text-[#1E272F] !text-left text-xs mt-2'} ${currentIndex === 0 && theme === 'dark' && 'text-white !text-left text-xs mt-2  '}`}
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
              className={`mt-3 w-[25%] bg-white h-auto py-3 text-sm text-[#262629] md:w-[30%] md:text-base lg:py-4 lg:text-lg ${currentIndex === 0 && theme === 'light' && 'bg-[#1E272F] text-white text-xs py-2'} ${currentIndex === 0 && theme === 'dark' && 'bg-white text-[#1E272F] text-xs py-2'}`}
              radius='full'
              // size='lg'
            >
              Book Session
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
