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
    <div className='grid h-max items-center justify-center bg-primaryLight pb-4 sm:h-[calc(100vh-88px)] md:pb-0'>
      <Section className='bg-primaryLight'>
        <div className='flex flex-col justify-between lg:flex-row lg:gap-10'>
          <div className='flex flex-col gap-6 lg:justify-center'>
            <h1 className='mx-auto w-4/5  text-center text-2xl font-bold  text-header-100 sm:max-w-[300px] md:max-w-[250px] lg:mx-0 lg:max-w-[530px] lg:text-start lg:text-5xl'>
              {title}
            </h1>
            <p className='mx-auto w-full text-center text-base font-light leading-[30px] text-content sm:max-w-[300px] md:max-w-[250px] lg:mx-0 lg:max-w-[498px] lg:text-start lg:text-lg'>
              {description}
            </p>

            {ctaText !== '' && (
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
            )}
          </div>
          <div className='relative mt-6 flex justify-end lg:mt-0'>
            <HeroImage />
          </div>
        </div>
      </Section>
    </div>
  );
};
