import { IconShopAndOrderRound } from '@/components/icons/IconShopAndOrderRound';
import { IconTellehealthRound } from '@/components/icons/IconTellehealthRound';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
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
    <div className='grid justify-center bg-primaryLight'>
      <Section className='bg-primaryLight'>
        <div className='justify-between py-12 lg:flex'>
          <div className='flex flex-col gap-6 lg:justify-center'>
            <h1 className='mx-auto max-w-[530px] text-center text-4xl font-bold text-header-100 lg:text-start lg:text-5xl'>
              {title}
            </h1>
            <p className='mx-auto max-w-[498px] text-center text-base leading-[30px] text-content lg:mx-0 lg:text-start lg:text-xl'>
              {description}
            </p>

            <div className='flex w-full justify-center lg:w-max lg:justify-start'>
              <Button
                as={Link}
                href={ctaLink}
                radius='full'
                className='px-12 py-6'
                color='primary'
                size='lg'
              >
                {ctaText}
              </Button>
            </div>
          </div>
          <div className='relative hidden lg:block'>
            <Image
              width={400}
              height={400}
              className='rounded-medium'
              src='/images/hero-image.png'
              alt='woman in red smiling'
            />
            <div className='absolute left-[-50px] top-36 z-10 flex items-center gap-3 rounded-md bg-white p-3 shadow-lg'>
              <IconTellehealthRound />
              <p className='text-sm font-bold text-header-100'>TeleHealth</p>
            </div>
            <div className='absolute  right-[-50px] top-48 z-10 flex items-center gap-3 rounded-md bg-white p-3 shadow-lg'>
              <IconShopAndOrderRound />
              <p className='text-sm font-bold text-header-100'>Shop & Order</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};