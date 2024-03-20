'use client';
import { Button, Image, Link } from '@nextui-org/react';
import { FC } from 'react';
import { IconShopAndOrderRound } from '../icons/IconShopAndOrderRound';
import { IconTellehealthRound } from '../icons/IconTellehealthRound';
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
  // const ctaAction = () =>
  //   document
  //     .querySelector(ctaLink)
  //     ?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });

  return (
    <div className='w-full items-center bg-primaryLight md:h-[calc(100vh-260px)] xl:grid xl:justify-center'>
      <Section className='relative flex h-full w-full flex-col items-center justify-between overflow-x-visible bg-primaryLight lg:flex lg:flex-row'>
        <div className='mt-20 flex w-full flex-col justify-start gap-6 lg:mt-0 lg:justify-center'>
          <h1 className='mx-auto w-4/5  text-center text-2xl font-bold  text-header-100 sm:max-w-[300px] md:max-w-[250px] lg:mx-0 lg:max-w-[530px] lg:text-start lg:text-5xl'>
            {title}
          </h1>
          <p className='mx-auto w-full text-center text-base font-light leading-[30px] text-content sm:max-w-[300px] md:max-w-[250px] lg:mx-0 lg:max-w-[498px] lg:text-start lg:text-lg'>
            {description}
          </p>

          <div className='flex w-full justify-center lg:w-max lg:justify-start'>
            <Button
              radius='full'
              as={Link}
              href={ctaLink}
              className='px-12 py-6'
              color='primary'
              size='lg'
            >
              {ctaText}
            </Button>
          </div>
        </div>
        <div className='relative mt-4 flex w-full justify-center self-end md:mt-0'>
          <Image
            className='overflow-visible rounded-t-lg bg-gradient-to-b from-white to-transparent object-cover lg:!h-[55vh] lg:!w-[50vw]'
            radius='none'
            width={300}
            height={200}
            src='/images/joyful-caring-couple.png'
            alt='charming joyful youth couple'
          />
          <Link
            href='/telehealth'
            className='absolute bottom-10 left-[-7px] z-10 flex items-center gap-3 rounded-md bg-white p-1.5 shadow-lg md:bottom-[105px] lg:px-6 lg:py-2.5'
          >
            <IconTellehealthRound />
            <p className='text-xs font-bold text-header-100 md:text-sm'>
              TeleHealth
            </p>
          </Link>

          <Link
            href='/telehealth/shop-and-order'
            className='absolute bottom-2 right-[-7px] z-10 flex items-center gap-3 rounded-md bg-white p-1.5 shadow-lg md:bottom-[25px] lg:px-6 lg:py-2.5'
          >
            <IconShopAndOrderRound />
            <p className='text-xs font-bold text-header-100 md:text-sm'>
              Shop & Order
            </p>
          </Link>
        </div>
      </Section>
    </div>
  );
};
