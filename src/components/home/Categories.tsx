'use client';
import { Button, Image } from '@nextui-org/react';
import { Section } from './Section';
import React, { useEffect, useRef, useState } from 'react';
import { IconCategoryImage } from '../icons/IconCategoryImage';
import { IconArrowRight } from '../icons/IconArrowRight';

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
  const scrollCategoriesRef = useRef<HTMLDivElement | null>(null);
  const scrollCategoriesLeft = () => {
    scrollCategoriesRef.current?.scrollBy({
      top: 0,
      left: -scrollCategoriesRef.current.clientWidth,
      behavior: 'smooth',
    });
  };

  const scrollCategoriesRight = () => {
    scrollCategoriesRef.current?.scrollBy({
      top: 0,
      left: scrollCategoriesRef.current.clientWidth,
      behavior: 'smooth',
    });
  };

  const [leftIcon, setLeftIcon] = useState(false);
  const [rightIcon, setRightIcon] = useState(false);
  const repeatedCategories = Array(5).fill(categories).flat();
  const chunkArray = (array: any, size: any) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };
  const groupedCategories = chunkArray(repeatedCategories, 12);
  const groupedCategories6 = chunkArray(repeatedCategories, 6);
  const containerRef = useRef(null);
  const [maxNameWidth, setMaxNameWidth] = useState('');

  const updateMaxWidth = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      setMaxNameWidth(`${containerWidth}px`);
    }
  };
  useEffect(() => {
    updateMaxWidth();
    window.addEventListener('resize', updateMaxWidth);
    return () => {
      window.removeEventListener('resize', updateMaxWidth);
    };
  }, []);
  const containerTwoRef = useRef(null);
  const [maxCircleWidth, setMaxCircleWidth] = useState('');

  const updateCircleMaxWidth = () => {
    if (containerTwoRef.current) {
      const containerWidth = containerTwoRef.current.offsetWidth;
      setMaxCircleWidth(`${containerWidth}px`);
    }
  };
  useEffect(() => {
    updateCircleMaxWidth();
    window.addEventListener('resize', updateCircleMaxWidth);
    return () => {
      window.removeEventListener('resize', updateCircleMaxWidth);
    };
  }, []);
  return (
    <Section>
      <div>
        <h3 className='mx-auto w-[95%] text-center text-3xl font-semibold lg:w-[75%]'>
          Discover personalized health solutions tailored to your wellness needs
          with PureLife Health
        </h3>
        <div className='mx-auto mt-10 grid w-[95%] grid-cols-[1fr_1fr_1fr] lg:mt-20 lg:w-[80%]'>
          <div>
            <h4 className='mb-2 w-full border-r text-center text-5xl font-medium'>
              100k+
            </h4>
            <p className='text-center text-[#5A5A5A]'>
              Approved healthcare products
            </p>
          </div>
          <div>
            <h4 className='mb-2 w-full border-r text-center text-5xl font-medium'>
              8k+
            </h4>
            <p className='text-center text-[#5A5A5A]'>
              Verified and accredited laboratory results
            </p>
          </div>
          <div>
            <h4 className='mb-2 w-full text-center text-5xl font-medium'>2%</h4>
            <p className='text-center text-[#5A5A5A]'>
              Top 2% telehealth service providers in Nigeria
            </p>
          </div>
        </div>
        <div className='relative'>
          <div
            ref={scrollCategoriesRef}
            className='scrollbar-none mx-auto mt-20 flex w-[88%] gap-6 overflow-x-scroll'
            style={{
              scrollSnapType: 'x mandatory',
              scrollSnapStop: 'always',
            }}
          >
            <div>
              <div className='hidden lg:flex'>
                {groupedCategories.map((group, index) => (
                  <div
                    key={index}
                    style={{
                      scrollSnapAlign: 'center',
                      minWidth: '100%',
                      
                    }}
                    className='grid w-[100%] grid-cols-3 grid-rows-2 gap-6 lg:grid-cols-6'
                  >
                    {group.map((category: any, categoryIndex: number) => (
                      <div
                      ref={containerTwoRef}
                      key={categoryIndex}
                      style={{ height: maxCircleWidth }}
                        className='flex snap-center items-center justify-center rounded-full border border-[#E7E7E7]'
                      >
                        <div className='flex flex-col place-content-center items-center rounded-full'>
                          <IconCategoryImage />
                          <p className='overflow-ellipsis text-center text-[#5A5A5A]'>
                            {category.category}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className='flex lg:hidden'>
                {groupedCategories6.map((group, index) => (
                  <div
                    key={index}
                    style={{
                      scrollSnapAlign: 'center',
                      minWidth: '100%',
                    }}
                    className='grid w-[100%] grid-cols-3 grid-rows-2 gap-6'
                  >
                    {group.map((category: any, categoryIndex: number) => (
                      <div
                        ref={containerRef}
                        key={categoryIndex}
                        style={{ height: maxNameWidth }}
                        className='flex snap-center items-center justify-center rounded-full border border-[#E7E7E7]'
                      >
                        <div className='flex max-w-[100px] flex-col place-content-center items-center rounded-full'>
                          <IconCategoryImage />
                          <p className='overflow-ellipsis text-center text-[#5A5A5A]'>
                            {category.category}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Button
            onMouseEnter={() => setLeftIcon(true)}
            onMouseLeave={() => setLeftIcon(false)}
            color=''
            size='md'
            radius='full'
            className={`absolute left-0 top-[40%] h-fit min-w-0 rotate-180 rounded-full border-2 border-[#1E272F] p-2 sm:p-4 ${leftIcon ? 'bg-[#1E272F]' : 'bg-white'}`}
            onClick={scrollCategoriesLeft}
          >
            <IconArrowRight color={`${leftIcon ? '#FFFFFF' : '#1E272F'}`} />
          </Button>
          <Button
            onMouseEnter={() => setRightIcon(true)}
            onMouseLeave={() => setRightIcon(false)}
            color=''
            size='md'
            radius='full'
            className={`absolute right-0 top-[40%] h-fit min-w-0 rounded-full border-2 border-[#1E272F] p-2 sm:p-4 ${rightIcon ? 'bg-[#1E272F]' : 'bg-white'}`}
            onClick={scrollCategoriesRight}
          >
            <IconArrowRight color={`${rightIcon ? '#FFFFFF' : '#1E272F'}`} />
          </Button>
        </div>
      </div>
    </Section>
  );
};
