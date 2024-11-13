'use client';
import { Image } from '@nextui-org/react';
import { Section } from './Section';
import React, { useRef, useState } from 'react';

export const GlobalHealthSolutions = () => {
  return (
    <Section className=''>
      <h3 className='mb-14 lg:w-[75%] w-full text-[19px] sm:text-3xl lg:text-4xl font-semibold'>
        Empowering Wellness Through Global Health Solutions
      </h3>
      <div className=' grid lg:grid-cols-[1fr_1fr] grid-cols-1 grid-rows-2 gap-5 pb-10'>
        <div className='row-span-2'>
          <div
            className='flex lg:h-full h-[362px] sm:h-[400px] w-full flex-col justify-end'
            style={{
              backgroundImage: 'url(/images/mission.jpg)',
              backgroundPosition: 'center bottom 55%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              borderRadius: '20px',
            }}
          >
            <div className='px-auto mb-10 mx-auto sm:mx-auto sm:ml-[8%] w-[95%] sm:w-[85%]'>
              <p className='mb-3 w-full text-left font-medium sm:font-semibold text-white'>
                Our Mission
              </p>
              <h3 className='text-[17px] sm:text-3xl font-bold text-white'>
                Integrated access to primary healthcare services.
              </h3>
            </div>
          </div>
        </div>
        <div className='row-span-1'>
          <div
            className='relative flex items-end  lg:h-[290px] h-[163px] sm:h-[400px] w-full flex-col'
            style={{
              backgroundImage: 'url(/images/location.jpg)',
              backgroundPosition: 'center bottom 100%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              borderRadius: '20px',
            }}
          >
            <p className='-mb-5 ml-[8%] w-[30%] mt-2 sm:mt-10 mr-[1.5%] text-xs sm:text-lg font-semibold leading-[1.2]'>
                Lekki, Admiralty, Ligali, Link bridge <br/> ... <br/> and many more coming
                to you soon
            </p>
            <div className='absolute bottom-4 sm:bottom-10 left-[4%] sm:left-[8%] sm:w-[60%]'>
              <p className='sm:mb-3 w-full text-left font-semibold text-sm sm:text-base'>Our Location</p>
              <h3 className='text-base sm:text-xl lg:text-3xl font-bold'>
                We have teams around the world.
              </h3>
            </div>
          </div>
        </div>
        <div className='row-span-1'>
          <div
            className='relative flex lg:h-[290px]  h-[163px] sm:h-[400px] w-full flex-col justify-end'
            style={{
              backgroundImage: 'url(/images/esg-promise.jpg)',
              backgroundPosition: 'center bottom 20%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              borderRadius: '20px',
            }}
          >
            <div className='px-auto mb-4 sm:mb-10 ml-[4%] sm:ml-[8%] w-[85%]'>
              <p className='sm:mb-3 w-full text-left font-semibold text-sm sm:text-base'>
                Our ESG Promise
              </p>
              <h3 className='text-base sm:text-xl lg:text-3xl font-bold'>
                Sustainable healthcare, responsible innovation.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
