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
import { NewsLetterCard } from '@/components/home/NewsletterCard';
import { ReportDrugReaction } from '@/components/ReportDrugReaction';
import { Reviews } from '@/components/home/Reviews';
import { QualityHomeBanner } from '@/components/quality-home-banner';

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
      icon: <IconProfessional color='white' />,
    },
    {
      title: 'Schedule Your Appointment',
      description:
        'Choose a time, provide name, contact info, reason. Appointment confirmed, professional assigned for consultation.',
      icon: <IconPen color='white' />,
    },
    {
      title: 'Appointment Confirmation',
      description:
        'Your appointment will be confirmed, and a health professional will be assigned to you for your consultation.',
      icon: <IconProfessional color='white' />,
    },
  ];
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);

  const startAutoScroll = () => {
    if (scrollRef.current) {
      autoScrollInterval.current = setInterval(() => {
        if (scrollRef.current) {
          const maxScrollLeft =
            scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
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
      const newScrollPosition =
        scrollRef.current.scrollLeft - scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: newScrollPosition > 0 ? newScrollPosition : 0,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const newScrollPosition =
        scrollRef.current.scrollLeft + scrollRef.current.clientWidth;
      const maxScrollLeft =
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left:
          newScrollPosition < maxScrollLeft ? newScrollPosition : maxScrollLeft,
        behavior: 'smooth',
      });
    }
  };
  const repeatedDoctors = Array(5).fill(allDoctors).flat();
  const reviews = [
    {
      title: 'This Care Truly Made a Difference',
      description:
        'When I had a consultation with Dr. Bayo, I felt like I was in the hands of someone who truly cared. He took the time to explain everything, making me feel comfortable and understood. The whole team was attentive, and it made all the difference in my recovery.',
      noOfStars: 4,
      name: 'Mrs Adebayo Gregson',
    },
    {
      title: 'Super convenient!',
      description: `Amazing service! The online pharmacist consultation was so convenient, and the pharmacist was super helpful in explaining my medications. Highly recommend this pharmacy!`,
      noOfStars: 5,
      name: 'Sarah Adegbite',
    },
    {
      title: 'Purelife is a top-notch pharmacy',
      description: `Virtual doctor consultation was a game-changer for me. The doctor was attentive and caring, and the pharmacist's advice was invaluable. Purelife is a top-notch pharmacy with exceptional virtual services!`,
      noOfStars: 5,
      name: 'Nkechi Anozie',
    },
    {
      title: 'Clear guidance and professionalism',
      description: `Impressed by the professionalism of the virtual consultations. The doctor was thorough, and the pharmacist provided clear guidance on my prescriptions. Will be using their services again!`,
      noOfStars: 4,
      name: 'John Adaranijo',
    },
    {
      title: 'The consultations are a lifesaver',
      description: `Virtual consultations at this pharmacy are a lifesaver! The doctor was knowledgeable, and the pharmacist went above and beyond to ensure I felt comfortable with my treatment plan. Fantastic experience!`,
      noOfStars: 5,
      name: 'Ahmed Adarale',
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
              ctaText='Coming Soon'
              ctaLink=''
            />
          </Section>
        </div>
        <div id='doctors' className='bg-white pb-10 pt-20 lg:justify-center'>
          <div className='bg-white lg:justify-center'>
            <Section className='flex flex-col items-center justify-between px-6 sm:flex-row'>
              <div className='text-center sm:text-left'>
                <h3 className='mb-4 text-3xl font-bold text-[#1E272F] md:text-[40px] lg:mb-4'>
                  Top-Rated Doctors on Our Platform
                </h3>
                <p className='mb-8 text-base font-light leading-7 text-[#5A5A5A] sm:mb-5 sm:w-[75%] sm:leading-6 xl:text-[20px]'>
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
                className='mb-7 flex w-full justify-between gap-10 sm:mb-0 sm:w-auto'
              >
                <Button
                  size='md'
                  radius='full'
                  className='h-fit min-w-0 rotate-180 rounded-full border-2 border-[#1E272F] bg-white p-4'
                  onClick={scrollLeft}
                >
                  <IconArrowRight
                    color='#1E272F'
                    className='h-[18px] w-[18px] sm:h-auto sm:w-auto'
                  />
                </Button>
                <Button
                  size='md'
                  radius='full'
                  className='h-fit min-w-0 rounded-full border-2 border-[#1E272F] bg-white p-4'
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
              className={`scrollbar-none ml-auto max-w-[95vw] overflow-x-scroll bg-white pb-4 pl-2 lg:pb-16 lg:pt-10`}
              onMouseEnter={() => {
                stopAutoScroll();
              }}
              onMouseLeave={() => {
                startAutoScroll();
              }}
            >
              <div className={`flex gap-[3%]`}>
                {repeatedDoctors.map((doctor, i) => (
                  <div
                    key={doctor.slug + i}
                    className='min-w-[90%] max-w-[30%] md:min-w-[50%] lg:min-w-[35%]'
                  >
                    <DoctorCard doctor={doctor} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={clsx('bg-[#F9F6EF] lg:grid lg:pt-2')}>
          <Section className='bg-[#F9F6EF] pb-5 pt-10'>
            <h2 className='mb-4 text-center text-3xl font-bold leading-[1.2] text-[#1E272F] sm:text-left md:w-[60%] xl:text-[40px]'>
              The best and experienced medical workers in their field
            </h2>
            <p className='mx-auto mb-6 w-[80%] text-center text-[1rem] font-light leading-7 text-[#5A5A5A] sm:mb-10 sm:text-left sm:text-[18px] sm:leading-6 lg:w-[60%] lg:text-[20px]'>
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

        <HowItWorks
          className='!bg-[#F9F6EF] pb-6 sm:pb-4'
          data={howItWorksData}
          variant='primary'
        />
        <QualityHomeBanner theme='light' />
        <Reviews
          title='Hear What Our Patients Are Saying About Our Exceptional Doctors'
          reviews={reviews}
        />
        <ReportDrugReaction />
        <div className='py-8'></div>
        <NewsLetterCard />
        <Footer />
      </main>
    </>
  );
}
