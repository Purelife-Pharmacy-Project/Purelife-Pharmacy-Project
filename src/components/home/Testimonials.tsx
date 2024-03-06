'use client';
import { Quotes } from '@/library/illustrations/Quotes';
import { Button } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Section } from './Section';

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      name: 'Aisosa Urhoghide',
      testimonial:
        "Purelife Pharmacy is the best. It's your go-to for all health needs, with top-notch service. No matter how rare your medication, they've got you covered. I recommend them anytime.",
    },
    {
      name: 'Abigeal Remilekun',
      testimonial:
        'Purelife Pharmacy has great customer service. They always greet me whenever I visit the shop, and I also receive phone calls and text messages after getting my medication.',
    },
    {
      name: 'Mmeme Amune',
      testimonial:
        "I love this pharmacy. I went there for my toddler's meds, and when they started throwing up, the staff were super helpful. Their prices were fair, and they didn’t push the most expensive products on me right away. I’m definitely a fan!",
    },
    {
      name: 'Emmanuel Ohaeri',
      testimonial:
        'Nice, organized, clean, and smart pharmacy that deals with a variety of pharmaceutical products, beverages, and outstanding cosmetics. Customer satisfaction is their priority goal.  You can make your choice in person or through ordering and delivery',
    },
    {
      name: 'Ogedengbe Patience',
      testimonial:
        'Great friendly service, smiling faces, and knowledgeable staff. A much better customer experience.',
    },
    {
      name: 'Osang Caleb',
      testimonial:
        'There is no place like Purelife Pharmacy; the experience here is overwhelming, and customer service is simply unparalleled.',
    },
    {
      name: 'Seunfunmi Omale',
      testimonial:
        "Great ambiance, spacious. The highlight for me is the hospitality and excellence of the members of the staff. Overall, it's a good store with a good variety.",
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

  return (
    <div
      ref={elementRef}
      className='h-max min-h-[380px] w-full bg-primaryGreenLight py-6 lg:min-h-[484px] lg:py-0'
    >
      <div className='lg:grid lg:justify-center lg:pb-10 lg:pt-[55px]'>
        <Section className='bg-primaryGreenLight'>
          <div className='flex flex-col items-center justify-between gap-4 lg:flex-row lg:justify-between lg:gap-0'>
            <h1 className='text-center text-4xl font-bold text-primaryGreenDark lg:text-start'>
              People ❤️ Purelife
            </h1>

            <div className='flex h-max w-2/5 justify-center gap-2'>
              {testimonials.map((testimonial, index) => (
                <Button
                  variant='flat'
                  key={index}
                  isIconOnly
                  className={twMerge(
                    'h-[9px] w-6 cursor-pointer rounded-full bg-green-100',
                    index === activeIndex && 'bg-success'
                  )}
                  onClick={() => {
                    setStartInterval(false);
                    setActiveIndex(index);
                    setShouldRender(true);
                  }}
                ></Button>
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
