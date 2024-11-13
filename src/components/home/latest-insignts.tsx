'use client';
import { Button, Image, Link } from '@nextui-org/react';
import { Section } from './Section';
import React, { useEffect, useRef, useState } from 'react';
import { IconArrowRight } from '../icons/IconArrowRight';
import { IconStarBold } from '../icons/IconStarBold';

export const LatestInsights = () => {
  const scrollInsightsRef = useRef<HTMLDivElement | null>(null);
  const scrollInsightsLeft = () => {
    scrollInsightsRef.current?.scrollBy({
      top: 0,
      left: -scrollInsightsRef.current.clientWidth,
      behavior: 'smooth',
    });
  };

  const scrollInsightsRight = () => {
    scrollInsightsRef.current?.scrollBy({
      top: 0,
      left: scrollInsightsRef.current.clientWidth,
      behavior: 'smooth',
    });
  };
  // useEffect(() => {
  //   scrollInsightsRight();
  // }, []);
  const [leftIcon, setLeftIcon] = useState(false);
  const [rightIcon, setRightIcon] = useState(false);
  const insights = [
    {
      title:
        'Purelife Group Launches Groundbreaking Digital Platform to Transform Primary Healthcare in Africa',
      image: '/images/insights-1.png',
      link: 'https://www.thisdaylive.com/index.php/2024/07/16/purelife-group-launches-groundbreaking-digital-platform-to-transform-primary-healthcare-in-africa/',
    },
    {
      title: 'Pharmaceutical firm unveils Primary Care Mobile App Purelife',
      image: '/images/insights-2.png',
      link: 'https://www.vanguardngr.com/2024/07/pharmaceutical-firm-unveils-primary-care-mobile-app-purelife/',
    },
    {
      title:
        "Purelife Group Launches Purelifehealth.io, a Revolutionary Digital Platform to Bridge Africa's Primary Healthcare Gap",
      image: '/images/insights-3.png',
      link: 'https://techpoint.africa/2024/07/23/purelife-group-launches-purelifehealth-io-a-revolutionary-digital-platform-to-bridge-africas-primary-healthcare-gap/',
    },
    {
      title:
        'Purelife Group launches Purelifehealth.io, a revolutionary digital platform to bridge Africa’s primary healthcare gap',
      image: '/images/insights-4.png',
      link: 'https://technext24.com/2024/07/23/group-launches-purelifehealth-platform/',
    },
    {
      title:
        'Purelife Pharmacy Revolutionizes Healthcare Access with Primary Care Mobile App',
      image: '/images/insights-5.png',
      link: 'https://techeconomy.ng/purelife-pharmacy-revolutionizes-healthcare-access-with-primary-care-mobile-app/',
    },
  ];

  return (
    <Section className='mt-10'>
      <div className='mb-10 flex items-center justify-between'>
        <h3 className='text-xl font-medium sm:text-3xl'>Latest Insights</h3>
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
            <IconArrowRight
              className='h-5 w-5'
              color={`${leftIcon ? '#FFFFFF' : '#1E272F'}`}
            />
          </Button>
          <Button
            onMouseEnter={() => {
              setRightIcon(true);
            }}
            onMouseLeave={() => {
              setRightIcon(false);
            }}
            color={undefined}
            size='sm'
            radius='full'
            className={`h-fit min-w-0 rounded-full border-2 border-[#1E272F] p-2 sm:p-4  ${
              rightIcon ? 'bg-[#1E272F]' : 'bg-transparent'
            }`}
            onClick={scrollInsightsRight}
          >
            <IconArrowRight
              className='h-5 w-5'
              color={`${rightIcon ? '#FFFFFF' : '#1E272F'}`}
            />
          </Button>
        </div>
      </div>

      <div className='max-w-[calc(100dvw-2rem)] bg-[#F6F6F6] py-14'>
        <div
          ref={scrollInsightsRef}
          className='scrollbar-none flex w-[100%] overflow-x-scroll'
        >
          {insights.map((item, index) => (
            //  <a href={item.link} >
            <div className='w-[80%] border-r px-6 hover:opacity-100 sm:min-w-[500px] sm:px-8'>
              {/* <div
                  ref={containerRef}
                  className='mx-auto h-[570px] w-[83%]'
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    borderRadius: '20px',
                  }}
                ></div> */}
              <img className='w-full' src={item.image} />

              <div className='mx-auto mt-4 flex items-center justify-between gap-4 border-t pt-2 sm:mt-6 sm:pt-4'>
                <p className='px-auto truncate text-sm font-semibold text-[#1E272F] sm:text-xl'>
                  {item.title}
                </p>
                <span className='flex h-6 min-h-6 w-6 min-w-6 items-center justify-center rounded-full bg-[#ff0028] sm:h-8 sm:min-h-8 sm:w-8 sm:min-w-8'>
                  <IconArrowRight size={12} color={`#FFFFFF`} />
                </span>
              </div>
            </div>
            //  </a>
          ))}
        </div>
      </div>
    </Section>
  );
};
