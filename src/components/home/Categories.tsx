'use client';
import { Button, Image } from '@nextui-org/react';
import { Section } from './Section';
import React, { useRef } from 'react';

const categories = [
  {
    category: 'Supermarket',
    href: '/shop?category=supermarket',
    image: '/images/supermarket.png',
  },
  {
    category: 'Skin Care',
    href: '/shop?category=skincare',
    image: '/images/category-skin.png',
  },
  {
    category: 'Beauty',
    href: '/shop?category=beauty',
    image: '/images/category-beauty.png',
  },
  {
    category: 'Health',
    href: '/shop?category=health',
    image: '/images/category-health.png',
  },
];

export const Categories = () => {
  const ref = useRef<any>(null);

  return (
    <div className='relative mx-2 overflow-hidden md:mx-0 lg:grid lg:justify-center lg:pb-10 lg:pt-[55px]'>
      <button
        onClick={() =>
          ref.current?.scrollBy({
            left: -100,
            behavior: 'smooth',
          })
        }
        className='absolute left-2 top-1/2 z-20 grid h-6 w-6 -translate-y-1/2 place-content-center rounded-full bg-[#FFEAED] shadow-md md:hidden'
      >
        <svg
          width='10'
          height='9'
          viewBox='0 0 7 6'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M6.15967 2.64698L1.86261 2.64698L3.83908 0.670509L3.33614 0.176391L0.512608 2.99992L3.33614 5.82345L3.83908 5.32933L1.86261 3.35286L6.15967 3.35286L6.15967 2.64698Z'
            fill='#1C1B1F'
          />
        </svg>
      </button>
      <Section className='bg-white'>
        <h1 className='mb-8 text-center text-lg font-semibold text-black md:mb-10 lg:mb-12 lg:text-4xl xl:mb-14'>
          Explore Our Product Categories
        </h1>
        <div
          className='flex snap-x flex-nowrap gap-6 overflow-hidden md:justify-center'
          ref={ref}
        >
          {categories.map((category) => (
            <div
              className='flex snap-start flex-col items-center gap-3'
              key={category.category}
            >
              <Image
                src={category.image}
                alt=''
                width={200}
                height={200}
                className='max-h-[150px] min-w-[150px] lg:min-h-[200px] lg:min-w-[200px]'
              />
              <p className='mt-2.5 whitespace-nowrap text-center'>
                {category.category}
              </p>
              <Button
                as='a'
                className='w-[83px] bg-primaryLight text-[10px] font-medium text-primary lg:w-[134px] lg:text-sm'
                radius='full'
                href={category.href}
              >
                Shop Now
              </Button>
            </div>
          ))}
        </div>
      </Section>
      <button
        onClick={() =>
          ref.current?.scrollBy({
            left: 100,
            behavior: 'smooth',
          })
        }
        className='absolute right-0 top-1/2 z-10 grid h-6 w-6 -translate-y-1/2 place-content-center rounded-full bg-[#FFEAED] shadow-md md:hidden'
      >
        <svg
          width='7'
          height='6'
          viewBox='0 0 7 6'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0.840332 3.35302L5.13739 3.35302L3.16092 5.32949L3.66386 5.82361L6.48739 3.00008L3.66386 0.17655L3.16092 0.670667L5.13739 2.64714L0.840332 2.64714L0.840332 3.35302Z'
            fill='#1C1B1F'
          />
        </svg>
      </button>
    </div>
  );
};
