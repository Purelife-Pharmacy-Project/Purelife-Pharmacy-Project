'use client';
import { Button, Image } from '@nextui-org/react';
import { FC } from 'react';
import { Section } from './Section';

interface HomePageHeroProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}
export const HomePageHero: FC<HomePageHeroProps> = ({
  title = 'Your the one-stop shop for wellness and lifestyle.',
  description = 'Schedule laboratory tests, book vaccination appointments, and receive high-quality medical services from the convenience of wherever you are in Nigeria.',
  ctaText = 'Start here',
  ctaLink = '#',
}) => {
  const ctaAction = () =>
    document
      .querySelector(ctaLink)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });

  return (
    <div className='grid h-[calc(100vh-260px)] items-center justify-center bg-primaryLight'>
      <Section className='flex w-max flex-col items-center justify-between bg-primaryLight lg:flex lg:h-full xl:flex-row'>
        <div className='flex w-full flex-col gap-6 lg:justify-center'>
          <h1 className='mx-auto max-w-[250px] text-center text-2xl  font-bold text-header-100 sm:max-w-[300px] md:max-w-[530px] lg:text-start lg:text-5xl xl:mx-0'>
            {title}
          </h1>
          <p className='mx-auto max-w-[250px] text-center text-base font-light leading-[30px] text-content sm:max-w-[300px] md:max-w-[498px] lg:mx-0 lg:text-start lg:text-lg'>
            {description}
          </p>

          <div className='flex w-full justify-center lg:w-max lg:justify-start'>
            <Button
              radius='full'
              onClick={ctaAction}
              className='px-12 py-7'
              color='primary'
              size='lg'
            >
              {ctaText}
            </Button>
          </div>
        </div>
        <div className='relative hidden justify-end md:block xl:hidden'>
          <Image
            className='h-[40vh] w-[60vw] overflow-visible object-cover'
            src='/images/joyful-caring-couple.png'
            alt='charming joyful youth couple'
          />
        </div>
        <div className='hidden w-full self-end xl:block'>
          <Image
            className='overflow-visible rounded-t-lg bg-gradient-to-b from-white to-transparent object-cover xl:h-[55vh] xl:w-[50vw]'
            radius='none'
            src='/images/joyful-caring-couple.png'
            alt='charming joyful youth couple'
          />
        </div>
      </Section>
    </div>
  );
};
