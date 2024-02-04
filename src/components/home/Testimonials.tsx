'use client';
import { Quotes } from '@/library/illustrations/Quotes';
import { Image } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Section } from './Section';

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      name: 'Amanam Israel',
      testimonial:
        "You can't buy peace of mind but you can join Purelife. There's so much less to worry about when you can get advice before you need it and answers when you need them.",
      image: 'https://i.pravatar.cc/150',
    },
    {
      name: 'Victor Oluwasegun',
      testimonial:
        'I have been a member of Purelife for over 2 years now and I can say that it has been a wonderful experience. I have been able to get quality healthcare services at a very affordable rate.',
      image: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    },
    {
      name: 'Billie Eilish',
      testimonial:
        'So far, I have had a great experience with Purelife. I have been able to get value off the shop and order and buy quality healthcare services at a very affordable rate. ',
      image: 'https://i.pravatar.cc/150?u=fake@pravatar.com',
    },
  ];
  const [startInterval, setStartInterval] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);
  const timerRef = useRef<NodeJS.Timeout>();

  // Automatically change the activeIndex every 5 seconds
  useEffect(() => {
    if (!startInterval) return;

    timerRef.current = setInterval(() => {
      setActiveIndex((prev: number) => {
        if (prev === testimonials.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(timerRef.current);
  }, [activeIndex, testimonials.length, startInterval]);

  // Start the process when it's in the viewPort
  const elementRef = useRef(null);

  useEffect(() => {
    const elementCurrent = elementRef.current;
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setStartInterval(true);
          observer.disconnect(); // Stop observing after the element is in the viewport.
        } else {
          setStartInterval(false);
          setActiveIndex(0);
        }
      });
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementCurrent) {
        observer.unobserve(elementCurrent);
      }
    };
  }, []);

  //show only one P in the dom when activeIndex changes
  useEffect(() => {
    if (!startInterval) return;
    setShouldRender(true);
    setTimeout(() => {
      setShouldRender(false);
    }, 3000);
  }, [activeIndex, startInterval]);

  // const handleOnButtonSwitch = () => {
  //   setStartInterval(false);
  //   clearInterval(timerRef.current);
  //
  //   setActiveIndex((prev: number) => {
  //     if (prev === testimonials.length - 1) {
  //       return 0;
  //     }
  //     return prev + 1;
  //   });
  //
  //   setShouldRender(true); // Show the testimonial immediately after button click
  // };

  return (
    <div
      ref={elementRef}
      className='h-max min-h-[380px] w-full bg-primaryGreenLight py-6 lg:min-h-[484px] lg:py-0'
    >
      <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
        <Section className='bg-primaryGreenLight'>
          <div className='flex flex-col justify-center gap-4 lg:flex-row lg:justify-between lg:gap-0'>
            <h1 className='text-center text-4xl font-bold text-primaryGreenDark lg:text-start'>
              People ❤️ Purelife
            </h1>

            <div className='flex justify-center gap-2'>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  // onClick={handleOnButtonSwitch}
                  style={{
                    borderImage:
                      'linear-gradient(white, white), radial-gradient(circle at top left, #f00,#3020ff)',
                    borderImageSlice: 1,
                    backgroundClip: 'padding-box',
                    backgroundOrigin: 'border-box',
                  }}
                  className={twMerge(
                    'h-max rounded-full border-2 border-gray-300 transition duration-500',
                    [activeIndex === index ? 'border-primary' : '']
                  )}
                >
                  <Image
                    className={twMerge('h-10 w-10', [
                      activeIndex === index ? '' : 'grayscale',
                    ])}
                    radius='full'
                    alt='customer'
                    src={testimonial.image}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='flex w-full justify-center'>
            <div className='relative w-full lg:w-[699px]'>
              <Quotes />
              {shouldRender && (
                <div className='absolute mt-3 max-w-[680px] md:mt-10'>
                  <motion.p
                    className='left-5 top-10 text-center text-medium md:text-start lg:text-2xl'
                    initial={{ opacity: 0 }}
                    key={testimonials[activeIndex].testimonial}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                  >
                    {testimonials[activeIndex].testimonial}
                  </motion.p>

                  <motion.span
                    className='mt-3 block text-center font-bold text-primaryGreenDark md:mt-8 md:text-start lg:text-2xl'
                    initial={{ opacity: 0 }}
                    key={testimonials[activeIndex].name}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                  >
                    {testimonials[activeIndex].name}
                  </motion.span>
                </div>
              )}
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};
