'use client';
import { Image } from '@nextui-org/react';
import { Section } from './Section';
import React, { useRef, useState } from 'react';

export const GlobalHealthSolutions = () => {
  return (
    <Section className='mt-10'>
      <h3 className='text-4xl font-semibold mb-14 w-[75%]'>
        Empowering Wellness Through Global Health Solutions
      </h3>
      <div className=' grid grid-cols-[1fr_1fr] grid-rows-2 gap-5 pb-10'>
        <div className='row-span-2'>
          <div
            className='h-full w-full flex flex-col items-center justify-end '
            style={{
              backgroundImage: 'url(/images/mission.jpg)',
              backgroundPosition: 'center bottom 55%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '',
              borderRadius: '20px',
            }}
          >
            <div className='w-[85%] px-auto mb-10'>
              <p className='text-white font-medium mb-6 text-left w-full'>Our Mission</p>
            <h3 className='font-bold text-white text-4xl'>Integrated access to primary healthcare services.</h3>
            </div>
            
          </div>
        </div>
        <div className='row-span-1'>
          <div
            className='relative h-[357px] w-full'
            style={{
              backgroundImage: 'url(/images/location.jpg)',
              backgroundPosition: 'center bottom 100%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              borderRadius: '20px',
            }}
          ></div>
        </div>
        <div className='row-span-1'>
          <div
            className='relative h-[357px] w-full'
            style={{
              backgroundImage: 'url(/images/esg-promise.jpg)',
              backgroundPosition: 'center bottom 20%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              borderRadius: '20px',
            }}
          ></div>
        </div>
      </div>
    </Section>
  );
};
