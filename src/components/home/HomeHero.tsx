import { HeroImage } from '@/components/home/HeroImage';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { FC } from 'react';
import { Section } from './Section';
import { TypeAnimation } from 'react-type-animation';

interface HomeHeroProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}
export const HomeHero: FC<HomeHeroProps> = ({
  title = 'Your the one-stop shop for wellness and lifestyle.',
  description = 'Schedule laboratory tests, book vaccination appointments, and receive high-quality medical services from the convenience of wherever you are in Nigeria.',
  ctaText = 'Start here',
  ctaLink = '#',
}) => {
  return (
    <div className='grid h-max items-center justify-center bg-white pb-4 md:pb-0 lg:h-max lg:pb-10'>
      <section className='bg-white xl:w-full pt-6 sm:pt-0'>
        <div className='grid grid-cols-[1fr] lg:grid-cols-[3fr_2.7fr] lg:gap-0'>
          <div className='w-full flex flex-col gap-4 lg:gap-6 lg:justify-center'>
            <h1 className='text-balance mx-auto text-center text-[32px] sm:text-[50px] font-bold  text-header-100 lg:mx-0 lg:w-full  sm:w-[80%] md:w-[50%] lg:max-w-full lg:text-start lg:text-6xl'>
            Book an appointment<br/>  with <TypeAnimation
              sequence={[
                'Doctors',
                2000,
                'Pharmacists',
                2000,
                'Cosmetologists',
                2000,
                'Dermatologists',
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            /> <br/> at Purelife
            
            </h1>
            <p className='mx-auto w-[80%] lg:w-full text-center text-base font-normal sm:leading-[30px] text-content lg:mx-0 lg:text-start lg:text-lg'>
              {description}
            </p>

            {ctaText !== '' && (
              <div className='flex w-full justify-center lg:w-max lg:justify-start'>
                <Button
                  isDisabled={true}
                  as={Link}
                  href={`/telehealth/find-a-doctor/availability-calendar`}
                  className='px-12 py-6 rounded-[35px] w-[40%] lg:w-[auto]'
                  color='primary'
                  size='lg'
                >
                  {ctaText}
                </Button>
              </div>
            )}
          </div>
          <div className='relative mt-6 flex justify-center items-center lg:justify-end lg:mt-0'>
            <HeroImage/>
          </div>
        </div>
      </section>
    </div>
  );
};
