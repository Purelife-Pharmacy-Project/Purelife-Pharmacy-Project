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
import { useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
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

  const iconArray = Array(5).fill({ icon: <IconStarBold /> });
  const [leftIcon, setLeftIcon] = useState(false);
  const [rightIcon, setRightIcon] = useState(false);

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
              ctaLink='#doctors'
            />
          </Section>
        </div>

        <div id='doctors' className='bg-white lg:justify-center py-10'>
          <div className='bg-white lg:justify-center'>
            <Section className='flex flex-col sm:flex-row items-center justify-between px-6'>
              <div>
                <h3 className='mb-3 lg:mb-0 text-3xl md:text-[40px] font-bold text-[#1E272F]'>
                  Top-Rated Doctors on Our Platform
                </h3>
                <p className='lg:w-[75%] text-base md:text-[20px] text-[#5A5A5A] mb-5'>
                  Find trusted, highly rated doctors available to assist you
                  with personalized care and expert medical services.
                </p>
              </div>
              <div className='sm:w-auto w-full flex justify-between gap-10 sm:mb-0 mb-7'>
                <Button
                  color=''
                  size='md'
                  radius='full'
                  className='h-fit min-w-0 rotate-180 rounded-full border-2 border-[#1E272F] p-4'
                  onClick={scrollLeft}
                >
                  <IconArrowRight color='#1E272F' className='sm:w-auto w-[18px] sm:h-auto h-[18px]'/>
                </Button>
                <Button
                  color=''
                  size='md'
                  radius='full'
                  className='h-fit min-w-0 rounded-full border-2 border-[#1E272F] p-4'
                  onClick={scrollRight}
                >
                  <IconArrowRight color='#1E272F' className='sm:w-auto w-[18px] sm:h-auto h-[18px]'/>
                </Button>
              </div>
            </Section>
            <Section className='bg-white pb-4 lg:pb-28 lg:pt-10'>
              <div
                ref={scrollRef}
                className='scrollbar-none flex md:gap-0 lg:gap-7 overflow-x-scroll'
              >
                {allDoctors.map((doctor, i) => (
                  <div
                    key={doctor.slug}
                    className='min-w-[100%] md:min-w-[50%] max-w-[30%] lg:min-w-[35%]'
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
            <h2 className='text-center md:text-left mb-2 w-[85%] mx-auto text-3xl md:text-4xl font-bold text-[#1E272F]'>
              The best and experienced medical workers in their field
            </h2>
            <p className='mb-10 mx-auto w-[85%] text-center md:text-left text-base sm:text-[20px] text-[#5A5A5A]'>
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
            'bg-white lg:justify-center lg:pb-10 lg:pt-[55px] mt-20 sm:mt-0'
          )}
        >
          <Section className='bg-white lg:px-0'>
            <div className='relative mb-10 h-[450px] sm:h-[900px] w-full overflow-hidden'>
              <div className='absolute top-[50px] flex w-full justify-center  leading-[1.2]'>
                <div className='w-[80%] md:w-[65%] text-center text-3xl sm:text-[40px] font-bold text-[#1E272F]'>
                  Hear What Our Patients Are Saying About Our Exceptional
                  Doctors
                </div>
              </div>

              <div className='absolute right-[5%] top-[200px] sm:top-[350px] z-[9] flex w-[90%] justify-center'>
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
                    className='scrollbar-none flex w-[90%] sm:w-[57%] overflow-x-scroll'
                  >
                    {reviews.map((review, index) => (
                      <div key={index} className='min-w-[100%] lg:min-w-[100%]'>
                        <div className='flex  flex-col items-center justify-center gap-[10px]'>
                          <h3 className='text-2xl sm:text-[32px] font-semibold text-[#1E272F]'>
                            {review.title}
                          </h3>
                          <p className='text-xs sm:text-base font-medium text-[#5A5A5A]'>
                            {review.description}
                          </p>
                          <div className='flex'>
                            {Array.from({ length: review.noOfStars }).map(
                              (_, index) => (
                                <IconStarBold key={index} className='sm:w-auto w-[14px] sm:h-auto h-[14px]' />
                              )
                            )}
                          </div>
                          <p className='text-xs sm:text-sm font-bold text-[#1E272F]'>
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

              <div className='-mr-[13%] sm:-mr-3 -mt-3 mb-[50px] flex justify-end '>
                <Image
                  src='/images/patients/patient1.png'
                  alt='doctor image'
                  className=' h-[120px] sm:w-auto sm:h-auto'
                />
              </div>
              <div className='flex justify-start '>
                <Image
                  src='/images/patients/patient2.png'
                  alt='doctor image'
                  className=' h-[100px] sm:w-auto sm:h-auto'
                />
              </div>
              <div className='hidden sm:flex absolute md:right-[30%] lg:right-[50%] top-[250px] w-full justify-end '>
                <Image
                  src='/images/patients/patient3.png'
                  alt='doctor image'
                  className=''
                />
              </div>
              <div className='hidden md:flex absolute right-[20%] top-[420px] w-full justify-end '>
                <Image
                  src='/images/patients/patient4.png'
                  alt='doctor image'
                  className=''
                />
              </div>

              <div className='hidden sm:flex absolute bottom-0 -mb-3 w-full items-end justify-between overflow-hidden'>
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
    </>
  );
}
