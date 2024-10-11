'use client';
import { HowItWorks } from '@/components/book-lab-test/HowItWorks';
import { DoctorCard } from '@/components/find-a-doctor/DoctorCard';
import { Footer } from '@/components/home/Footer';
import { HomeHero } from '@/components/home/HomeHero';
import { Section } from '@/components/home/Section';
import { IconArrowRight } from '@/components/icons/IconArrowRight';
import { IconCalendarTime } from '@/components/icons/IconCalendarTime';
import { IconPen } from '@/components/icons/IconPen';
import { IconProfessional } from '@/components/icons/IconProfessional';
import { allDoctors } from '@/helpers/mocks/doctors';
import { Button, Image } from '@nextui-org/react';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { IconStarBold } from '@/components/icons/IconStarBold';

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
      icon: <IconProfessional size={48} color='primary' />,
    },
    {
      title: 'Schedule Your Appointment',
      description:
        'Choose a time, provide name, contact info, reason. Appointment confirmed, professional assigned for consultation.',
      icon: <IconPen size={60} color='primary' />,
    },
    {
      title: 'Appointment Confirmation',
      description:
        'Your appointment will be confirmed, and a health professional will be assigned to you for your consultation.',
      icon: <IconCalendarTime size={60} color='primary' />,
    },
  ];

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      top: 0,
      left: -scrollRef.current.clientWidth,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      top: 0,
      left: scrollRef.current.clientWidth,
      behavior: 'smooth',
    });
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
  const [hoverScroll, setHoverScroll] = useState(true);
  const iconArray = Array(5).fill({ icon: <IconStarBold /> });
  const [leftIcon, setLeftIcon] = useState(false);
  const [rightIcon, setRightIcon] = useState(false);
  const repeatedDoctors = Array(5).fill(allDoctors).flat();
  console.log(repeatedDoctors);
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
          id='doctors' className='bg-white py-10 lg:justify-center'>
          <div className='bg-white lg:justify-center'>
            <Section className='flex flex-col items-center justify-between px-6 sm:flex-row'>
              <div>
                <h3 className='mb-3 text-3xl font-bold text-[#1E272F] md:text-[40px] lg:mb-3'>
                  Top-Rated Doctors on Our Platform
                </h3>
                <p className='mb-5 text-base text-[#5A5A5A] md:text-[20px] lg:w-[75%]'>
                  Find trusted, highly rated doctors available to assist you
                  with personalized care and expert medical services.
                </p>
              </div>
              <div
                onMouseEnter={()=>{setHoverScroll(false)}}
                onMouseLeave={()=>{setHoverScroll(true)}}
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
            <Section
              className={`max-w-[90vw] ${hoverScroll && 'overflow-x-scroll scrollbar-none'} bg-white pb-4 lg:pb-16 lg:pt-10`}>
              <div
                onMouseEnter={()=>{setHoverScroll(false)}}
                onMouseLeave={()=>{setHoverScroll(true)}} 
                ref={scrollRef}
                className={`${hoverScroll ? 'swipe-animation' : 'overflow-x-scroll'} scrollbar-none flex gap-[3%] lg:gap-[3%]`}
                style={{ '--speed': `${hoverScroll ? '10000ms' : '0ms'}` } as React.CSSProperties}
              >
                {repeatedDoctors.map((doctor, i) => (
                  <div
                    key={doctor.slug}
                    className='min-w-[100%] max-w-[30%] md:min-w-[50%] lg:min-w-[35%]'
                  >
                    <DoctorCard doctor={doctor} />
                  </div>
                ))}
              </div>
            </Section>
          </div>
        </div>

        <div
          className={clsx(
            'bg-primaryLight lg:grid lg:justify-center lg:pb-10 lg:pt-[55px]'
          )}
        >
          <Section className='bg-primaryLight py-10'>
            <h2 className='mx-auto mb-2 w-[85%] text-center text-3xl font-bold text-[#1E272F] md:text-left md:text-4xl'>
              The best and experienced medical workers in their field
            </h2>
            <p className='mx-auto mb-10 w-[85%] text-center text-base text-[#5A5A5A] sm:text-[20px] md:text-left'>
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
          <Section className='bg-white lg:px-0'>
            <div className='relative mb-10 h-[450px] w-full overflow-hidden sm:h-[900px]'>
              <div className='absolute top-[50px] flex w-full justify-center  leading-[1.2]'>
                <div className='w-[80%] text-center text-3xl font-bold text-[#1E272F] sm:text-[40px] md:w-[65%]'>
                  Hear What Our Patients Are Saying About Our Exceptional
                  Doctors
                </div>
              </div>

              <div className='absolute right-[5%] top-[200px] z-[9] flex w-[90%] justify-center sm:top-[350px]'>
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

              <div className='-mr-[13%] -mt-3 mb-[50px] flex justify-end sm:-mr-3 '>
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
              <div className='absolute top-[250px] hidden w-full justify-end sm:flex md:right-[30%] lg:right-[50%] '>
                <Image
                  src='/images/patients/patient3.png'
                  alt='doctor image'
                  className=''
                />
              </div>
              <div className='absolute right-[20%] top-[420px] hidden w-full justify-end md:flex '>
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
          </Section>
        </div>

        <Footer />
      </main>
      <style>
        {`
          .swipe-animation {
            display: flex;
            animation: swipe var(--speed) linear infinite;
          }

          @keyframes swipe {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-113%);
            }
          }
        `}
      </style>
    </>
  );
}
