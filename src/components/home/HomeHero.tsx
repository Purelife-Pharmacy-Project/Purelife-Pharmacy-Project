import { HeroImage } from '@/components/home/HeroImage';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { FC } from 'react';
import { Section } from './Section';

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
      <section className='bg-white xl:w-full '>
        <div className='grid grid-cols-[1fr] lg:grid-cols-[3fr_2.7fr] lg:gap-0'>
          <div className='w-full flex flex-col gap-2 lg:gap-6 lg:justify-center'>
            <h1 className='text-balance mx-auto text-center text-4xl font-bold  text-header-100 lg:mx-0 lg:w-full  sm:w-[80%] md:w-[50%] lg:max-w-full lg:text-start lg:text-6xl'>
              {title}
            </h1>
            <p className='mx-auto sm:w-[80%] w-[60%] lg:w-full text-center text-base font-medium leading-[30px] text-content lg:mx-0 lg:text-start lg:text-lg'>
              {description}
            </p>

            {ctaText !== '' && (
              <div className='flex w-full justify-center lg:w-max lg:justify-start'>
                <Button
                  as={Link}
                  href={`/telehealth/find-a-doctor/salako`}
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
