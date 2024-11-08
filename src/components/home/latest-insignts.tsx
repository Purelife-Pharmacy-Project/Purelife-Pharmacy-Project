'use client';
import { Button, Image } from '@nextui-org/react';
import { Section } from './Section';
import React, { useEffect, useRef, useState } from 'react';
import { IconArrowRight } from '../icons/IconArrowRight';
import { IconStarBold } from '../icons/IconStarBold';

export const LatestInsights = () => {
  const scrollInsightsRef = useRef<HTMLDivElement | null>(null);
  const scrollInsightsLeft = () => {
    scrollInsightsRef.current?.scrollBy({
      top: 0,
      left: -scrollInsightsRef.current.clientWidth / 4,
      behavior: 'smooth',
    });
  };

  const scrollInsightsRight = () => {
    scrollInsightsRef.current?.scrollBy({
      top: 0,
      left: scrollInsightsRef.current.clientWidth / 4,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    scrollInsightsRight();
  }, []);
  const [leftIcon, setLeftIcon] = useState(false);
  const [rightIcon, setRightIcon] = useState(false);
  const insights = [
    {
      title: 'Getting Started with Purelife Health',
      image: '/images/insights-1.jpg',
    },
    {
      title: 'Quality Homecare with Purelife',
      image: '/images/insights-2.jpg',
    },
    {
      title: 'Choosing the right medications',
      image: '/images/insights-3.jpg',
    },
  ];
  return (
    <Section className='mt-10'>
      <div className='mb-10 flex justify-between'>
        <h3 className='text-4xl font-semibold'>Latest Insights</h3>
        <div className='flex items-center justify-between gap-5'>
          <Button
            onMouseEnter={() => {
              setLeftIcon(true);
            }}
            onMouseLeave={() => {
              setLeftIcon(false);
            }}
            color={undefined}
            size='md'
            radius='full'
            className={`h-fit min-w-0 rotate-180 rounded-full border-2 border-[#1E272F] p-2 sm:p-4  ${
              leftIcon ? 'bg-[#1E272F]' : 'bg-transparent'
            }`}
            onClick={scrollInsightsLeft}
          >
            <IconArrowRight color={`${leftIcon ? '#FFFFFF' : '#1E272F'}`} />
          </Button>
          <Button
            onMouseEnter={() => {
              setRightIcon(true);
            }}
            onMouseLeave={() => {
              setRightIcon(false);
            }}
            color={undefined}
            size='md'
            radius='full'
            className={`h-fit min-w-0 rounded-full border-2 border-[#1E272F] p-2 sm:p-4  ${
              rightIcon ? 'bg-[#1E272F]' : 'bg-transparent'
            }`}
            onClick={scrollInsightsRight}
          >
            <IconArrowRight color={`${rightIcon ? '#FFFFFF' : '#1E272F'}`} />
          </Button>
        </div>
      </div>

      <div className='bg-[#F6F6F6] py-14'>
        <div
          ref={scrollInsightsRef}
          className='scrollbar-none flex w-[100%] overflow-x-scroll'
        >
          {insights.map((item, index) => (
            <div key={index} className='lg:min-w-[50%] min-w-[70%] border-x'>
              <div
                className='mx-auto h-[570px] w-[83%]'
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  borderRadius: '20px',
                }}
              ></div>
              <div className='mx-auto mt-3 flex w-[83%] items-center justify-between border-t pt-5'>
                <p className='px-auto text-xl font-semibold'>{item.title}</p>
                <Button
                  color='primary'
                  size='md'
                  radius='full'
                  className={`h-fit min-w-0 rounded-full p-2`}
                  onClick={scrollInsightsRight}
                >
                  <IconArrowRight size={12} color={`#FFFFFF`} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
