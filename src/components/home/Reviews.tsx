'use client';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { IconArrowRight } from '../icons/IconArrowRight';
import clsx from 'clsx';
import { IconStarBold } from '../icons/IconStarBold';

interface ReviewProps {
  title: string;
  reviews: {
    title : string;
    description : string;
    noOfStars : number;
    name : string;
  }[];
}

export const Reviews: React.FC<ReviewProps> = ({title, reviews}) => {
  const scrollReviewsRef = useRef<HTMLDivElement | null>(null);
  const scrollReviewsLeft = () => {
    scrollReviewsRef.current?.scrollBy({
      top: 0,
      left: -scrollReviewsRef.current.clientWidth,
      behavior: 'smooth',
    });
  };

  const scrollReviewsRight = () => {
    scrollReviewsRef.current?.scrollBy({
      top: 0,
      left: scrollReviewsRef.current.clientWidth,
      behavior: 'smooth',
    });
  };

  const [leftIcon, setLeftIcon] = useState(false);
  const [rightIcon, setRightIcon] = useState(false);

  return (
    <div
      className={clsx(
        'mt-20 bg-white sm:mt-0 lg:justify-center lg:pb-10 lg:pt-[55px] max-w-[1440px] mx-auto'
      )}
    >
      <div className='bg-white lg:px-0'>
        <div className='relative mb-10 h-[450px] w-full overflow-hidden sm:h-[800px]'>
          <div className='absolute top-[60px] flex w-full justify-center'>
            <h3 className='w-[75%] text-center text-3xl font-bold leading-[1.2] text-[#1E272F] md:w-[65%] lg:text-[40px]'>
              {title}
            </h3>
          </div>

          <div className='absolute right-[5%] top-[200px] z-[1] flex w-[90%] justify-center sm:top-[300px]'>
            <div className='flex max-w-[100%] items-center justify-between text-center text-[40px] font-bold text-[#1E272F]'>
              <Button
                onMouseEnter={() => {
                  setLeftIcon(true);
                }}
                onMouseLeave={() => {
                  setLeftIcon(false);
                }}
                color=''
                size='md'
                radius='full'
                className={`h-fit min-w-0 rotate-180 rounded-full border-2 border-[#1E272F] p-2 sm:p-4  ${
                  leftIcon ? 'bg-[#1E272F]' : 'bg-transparent'
                }`}
                onClick={scrollReviewsLeft}
              >
                <IconArrowRight color={`${leftIcon ? '#FFFFFF' : '#1E272F'}`} />
              </Button>
              <div
                ref={scrollReviewsRef}
                className='scrollbar-none flex w-[90%] overflow-x-scroll sm:w-[57%]'
              >
                {reviews.map((review, index) => (
                  <div key={index} className='min-w-[100%] lg:min-w-[100%]'>
                    <div className='flex  flex-col items-center justify-center gap-[10px]'>
                      <h3 className='text-2xl font-semibold text-[#1E272F] sm:text-[32px]'>
                        {review.title}
                      </h3>
                      <p className='text-xs font-medium text-[#5A5A5A] sm:text-base'>
                        {review.description}
                      </p>
                      <div className='flex'>
                        {Array.from({ length: review.noOfStars }).map(
                          (_, index) => (
                            <IconStarBold
                              key={index}
                              className='h-[14px] w-[14px] sm:h-auto sm:w-auto'
                            />
                          )
                        )}
                      </div>
                      <p className='text-xs font-bold text-[#1E272F] sm:text-sm'>
                        Mrs Adebayo Gregson
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                onMouseEnter={() => {
                  setRightIcon(true);
                }}
                onMouseLeave={() => {
                  setRightIcon(false);
                }}
                color=''
                size='md'
                radius='full'
                className={`h-fit min-w-0 rounded-full border-2 border-[#1E272F] p-2 sm:p-4 ${
                  rightIcon ? 'bg-[#1E272F]' : 'bg-transparent'
                }`}
                onClick={scrollReviewsRight}
              >
                <IconArrowRight
                  color={`${rightIcon ? '#FFFFFF' : '#1E272F'}`}
                />
              </Button>
            </div>
          </div>
          <div className='-mr-[13%] -mt-3 mb-[100px] flex justify-end sm:-mr-3 '>
            <Image
              width={324}
              height={213}
              src='/images/patients/patient1.png'
              alt='doctor image'
              className=' h-[120px] sm:h-auto sm:w-auto'
            />
          </div>
          <div className='flex justify-start '>
            <Image
              width={324}
              height={213}
              src='/images/patients/patient2.png'
              alt='doctor image'
              className=' h-[100px] sm:h-auto sm:w-auto'
            />
          </div>
          <div className='absolute top-[200px] hidden w-full justify-end sm:flex md:right-[30%] lg:right-[43%] '>
            <Image
              width={279}
              height={213}
              src='/images/patients/patient3.png'
              alt='doctor image'
              className=''
            />
          </div>
          <div className='absolute right-[15%] top-[420px] hidden w-full justify-end md:flex '>
            <Image
              width={279}
              height={213}
              src='/images/patients/patient4.png'
              alt='doctor image'
              className=''
            />
          </div>

          <div className='absolute bottom-0 -mb-3 hidden w-full items-end justify-between overflow-hidden sm:flex'>
            <div className='ml-[10%]'>
              <Image
                width={324}
                height={213}
                src='/images/patients/patient5.png'
                alt='doctor image'
                className=''
              />
            </div>
            <div className='-mr-4'>
              <Image
                width={279}
                height={213}
                src='/images/patients/patient6.png'
                alt='doctor image'
                className=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
