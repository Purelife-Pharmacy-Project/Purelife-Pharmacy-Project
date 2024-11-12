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
      title: 'Purelife Group Launches Groundbreaking Digital Platform to Transform Primary Healthcare in Africa',
      image: '/images/insights-1.png',
      link: 'https://www.thisdaylive.com/index.php/2024/07/16/purelife-group-launches-groundbreaking-digital-platform-to-transform-primary-healthcare-in-africa/'
    },
    {
      title: 'Pharmaceutical firm unveils Primary Care Mobile App Purelife',
      image: '/images/insights-2.jpg',
      link: 'https://www.vanguardngr.com/2024/07/pharmaceutical-firm-unveils-primary-care-mobile-app-purelife/'
    },
    {
      title: "Purelife Group Launches Purelifehealth.io, a Revolutionary Digital Platform to Bridge Africa's Primary Healthcare Gap",
      image: '/images/insights-3.jpg',
      link: 'https://techpoint.africa/2024/07/23/purelife-group-launches-purelifehealth-io-a-revolutionary-digital-platform-to-bridge-africas-primary-healthcare-gap/'
    },
    {
      title: 'Purelife Group launches Purelifehealth.io, a revolutionary digital platform to bridge Africa’s primary healthcare gap',
      image: '/images/insights-4.png',
      link: 'https://technext24.com/2024/07/23/group-launches-purelifehealth-platform/'
    },
    {
      title: 'Purelife Pharmacy Revolutionizes Healthcare Access with Primary Care Mobile App',
      image: '/images/insights-5.jpg',
      link: 'https://techeconomy.ng/purelife-pharmacy-revolutionizes-healthcare-access-with-primary-care-mobile-app/'
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [maxNameWidth, setMaxNameWidth] = useState('100%');
  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      setMaxNameWidth(`${containerWidth * 0.9}px`);
    }
  }, []);
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
            <Link
            key={index}
            href={item.link}
            target="_blank"
            className="lg:min-w-[50%] min-w-[70%] border-x hover:opacity-100"
          >
            <div className='w-full'>
                <div
                  ref={containerRef}
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
                <p style={{ maxWidth: maxNameWidth }} className=' text-[#1E272F] truncate px-auto text-xl font-semibold'>{item.title}</p>
                  <Button
                  color='primary'
                  size='md'
                  radius='full'
                  className={`h-fit min-w-0 rounded-full p-2`}
                >
                  <IconArrowRight size={12} color={`#FFFFFF`} />
                </Button>
                
                
              </div>
            </div></Link>
          ))}
        </div>
      </div>
    </Section>
  );
};
