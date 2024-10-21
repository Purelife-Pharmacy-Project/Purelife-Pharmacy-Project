'use client';
import { HowItWorks } from '@/components/book-lab-test/HowItWorks';
import { DoctorCard } from '@/components/find-a-doctor/DoctorCard';
import { Footer } from '@/components/home/Footer';
import { HomeHero } from '@/components/home/HomeHero';
import { Section } from '@/components/home/Section';
import { IconArrowRight } from '@/components/icons/IconArrowRight';
import { allDoctors } from '@/helpers/mocks/doctors';
import { Button, Image } from '@nextui-org/react';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { IconStarBold } from '@/components/icons/IconStarBold';
import { IconProfessional } from '@/components/icons/IconProfessional';
import { IconPen } from '@/components/icons/IconPen';

export default function FindADoctor() {
  const howItWorksData: {
    title: string;
    description: string;
    icon: JSX.Element;
  }[] = [
    {
      title: 'Choose Your Specialist',
      description:
        'Select the specific health professional you would like to consult with.',
      icon: <IconProfessional color='primary' />,
    },
    {
      title: 'Schedule Your Appointment',
      description:
        'Choose a time, provide name, contact info, reason. Appointment confirmed, professional assigned for consultation.',
      icon: <IconPen color='primary' />,
    },
    {
      title: 'Appointment Confirmation',
      description:
        'Your appointment will be confirmed, and a health professional will be assigned to you for your consultation.',
        icon: <IconProfessional color='primary' />,
    },
  ];
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);


  const startAutoScroll = () => {
    if (scrollRef.current) {
      autoScrollInterval.current = setInterval(() => {
        if (scrollRef.current) {
          const maxScrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
          if (scrollRef.current.scrollLeft < maxScrollLeft) {
            scrollRef.current.scrollBy({
              left: 3,
            });
          } else {
            scrollRef.current.scrollLeft = 0;
          }
        }
      }, 10); 
    }
  };

  const stopAutoScroll = () => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
    }
  };


  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);


  const scrollLeft = () => {
    if (scrollRef.current) {
      const newScrollPosition = scrollRef.current.scrollLeft - scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: newScrollPosition > 0 ? newScrollPosition : 0,
        behavior: 'smooth',
      });
    }
  };


  const scrollRight = () => {
    if (scrollRef.current) {
      const newScrollPosition = scrollRef.current.scrollLeft + scrollRef.current.clientWidth;
      const maxScrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: newScrollPosition < maxScrollLeft ? newScrollPosition : maxScrollLeft,
        behavior: 'smooth',
      });
    }
  };

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
  const repeatedDoctors = Array(5).fill(allDoctors).flat();
  const reviews = [
    {
      title: 'This Care Truly Made a Difference',
      description:
        'When I had a consultation with Dr. Smith, I felt like I was in the hands of someone who truly cared. He took the time to explain everything, making me feel comfortable and understood. The whole team was attentive, and it made all the difference in my recovery.',
      noOfStars: 5,
      name: 'Mrs Adebayo Gregson',
    },
    {
      title: 'I did not like how this went',
      description:
        'When I had a consultation with Dr. Smith, I felt like I was in the hands of someone who truly cared. He took the time to explain everything, making me feel comfortable and understood. The whole team was attentive, and it made all the difference in my recovery.',
      noOfStars: 3,
      name: 'Mrs Adebayo Gregson',
    },
    {
      title: 'This Care Truly Made a Difference',
      description:
        'When I had a consultation with Dr. Smith, I felt like I was in the hands of someone who truly cared. He took the time to explain everything, making me feel comfortable and understood. The whole team was attentive, and it made all the difference in my recovery.',
      noOfStars: 2,
      name: 'Mrs Adebayo Gregson',
    },
    {
      title: 'This Care Truly Made a Difference',
      description:
        'When I had a consultation with Dr. Smith, I felt like I was in the hands of someone who truly cared. He took the time to explain everything, making me feel comfortable and understood. The whole team was attentive, and it made all the difference in my recovery.',
      noOfStars: 5,
      name: 'Mrs Adebayo Gregson',
    },
  ];

  return (
    <>
      <main className=''>
        <div className='mt-2 justify-center bg-white'>
          <Section>
            <HomeHero
              title='Book an appointment with Doctors at Purelife'
              description='Take the first step towards a healthier you. Book your appointment with one of our dedicated doctors at Purelife and embark on your journey to wellness today.'
              ctaText='Consult Now'
              ctaLink=''
            />
          </Section>
        </div>
        <div
          id='doctors' className='bg-white pt-20 pb-10 lg:justify-center'>
          <div className='bg-white lg:justify-center'>
            <Section className='flex flex-col items-center justify-between px-6 sm:flex-row'>
              <div>
                <h3 className='mb-3 text-3xl font-bold text-[#1E272F] xl:text-[40px] lg:mb-3'>
                  Top-Rated Doctors on Our Platform
                </h3>
                <p className='mb-5 text-base text-[#5A5A5A] xl:text-[20px] sm:w-[75%]'>
                  Find trusted, highly rated doctors available to assist you
                  with personalized care and expert medical services.
                </p>
              </div>
              <div
                onMouseEnter={() => {
                  stopAutoScroll();
                }}
                onMouseLeave={() => {
                  startAutoScroll();
                }}
                className='mb-7 flex w-full justify-between gap-10 sm:mb-0 sm:w-auto'>
                <Button
                  color=''
                  size='md'
                  radius='full'
                  className='h-fit min-w-0 rotate-180 rounded-full border-2 border-[#1E272F] p-4'
                  onClick={scrollLeft}
                >
                  <IconArrowRight
                    color='#1E272F'
                    className='h-[18px] w-[18px] sm:h-auto sm:w-auto'
                  />
                </Button>
                <Button
                  color=''
                  size='md'
                  radius='full'
                  className='h-fit min-w-0 rounded-full border-2 border-[#1E272F] p-4'
                  onClick={scrollRight}
                >
                  <IconArrowRight
                    color='#1E272F'
                    className='h-[18px] w-[18px] sm:h-auto sm:w-auto'
                  />
                </Button>
              </div>
            </Section>
            <div
              ref={scrollRef}
              className={`pl-2 max-w-[95vw] ml-auto overflow-x-scroll scrollbar-none bg-white pb-4 lg:pb-16 lg:pt-10`}>
              <div
                onMouseEnter={() => {
                  stopAutoScroll();
                }}
                onMouseLeave={() => {
                  startAutoScroll();
                }}
                className={`flex gap-[3%]`}
              >
                {repeatedDoctors.map((doctor, i) => (
                  <div
                    key={doctor.slug + i}
                    className='min-w-[100%] max-w-[30%] md:min-w-[50%] lg:min-w-[35%]'
                  >
                    <DoctorCard doctor={doctor} />
                  </div>
                ))}
              </div>
            </div>  
          </div>
        </div>

        <div
          className={clsx(
            'bg-primaryLight lg:grid lg:pt-2'
          )}
        >
          <Section className='bg-primaryLight pt-10 pb-5'>
            <h2 className='md:w-[60%] mb-2 font-bold text-[#1E272F] text-3xl xl:text-[40px] leading-[1.2]'>
              The best and experienced medical workers in their field
            </h2>
            <p className='lg:w-[60%] mb-10 text-base text-[#5A5A5A] sm:text-[18px] lg:text-[20px]'>
              Discover how our seamless platform matches you with the right
              healthcare specialists effortlessly.
            </p>
            <div className='flex w-full'>
              <Image
                src='/images/doctor-appointment.png'
                alt='doctor image'
                className='rounded-[20px]'
                width={1230}
              />
            </div>
          </Section>
        </div>

        <HowItWorks data={howItWorksData} variant='primary' />

        <div
          className={clsx(
            'mt-20 bg-white sm:mt-0 lg:justify-center lg:pb-10 lg:pt-[55px]'
          )}
        >
          <div className='bg-white lg:px-0'>
            <div className='relative mb-10 h-[450px] w-full overflow-hidden sm:h-[750px]'>
              <div className='absolute top-[60px] flex w-full justify-center'>
                <h3 className='w-[75%] text-center text-3xl font-bold text-[#1E272F] lg:text-[40px] md:w-[65%] leading-[1.2]'>
                  Hear What Our Patients Are Saying About Our Exceptional
                  Doctors
                </h3>
              </div>

              <div className='absolute right-[5%] top-[200px] z-[9999] flex w-[90%] justify-center sm:top-[300px]'>
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
                    <IconArrowRight
                      color={`${leftIcon ? '#FFFFFF' : '#1E272F'}`}
                    />
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
                  src='/images/patients/patient1.png'
                  alt='doctor image'
                  className=' h-[120px] sm:h-auto sm:w-auto'
                />
              </div>
              <div className='flex justify-start '>
                <Image
                  src='/images/patients/patient2.png'
                  alt='doctor image'
                  className=' h-[100px] sm:h-auto sm:w-auto'
                />
              </div>
              <div className='absolute top-[200px] hidden w-full justify-end sm:flex md:right-[30%] lg:right-[43%] '>
                <Image
                  src='/images/patients/patient3.png'
                  alt='doctor image'
                  className=''
                />
              </div>
              <div className='absolute right-[15%] top-[420px] hidden w-full justify-end md:flex '>
                <Image
                  src='/images/patients/patient4.png'
                  alt='doctor image'
                  className=''
                />
              </div>

              <div className='absolute bottom-0 -mb-3 hidden w-full items-end justify-between overflow-hidden sm:flex'>
                <div className='ml-[10%]'>
                  <Image
                    src='/images/patients/patient5.png'
                    alt='doctor image'
                    className=''
                  />
                </div>
                <div className='-mr-4'>
                  <Image
                    src='/images/patients/patient6.png'
                    alt='doctor image'
                    className=''
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
