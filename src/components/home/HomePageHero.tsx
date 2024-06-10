'use client';
import { Button, Image, Link } from '@nextui-org/react';
import { FC } from 'react';
import { Section } from './Section';
import { IconDoubleCheck } from '@/components/icons/IconDoubleCheck';

interface HomePageHeroProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  features: string[];
}
export const HomePageHero: FC<HomePageHeroProps> = ({
  title = 'Your the one-stop shop for wellness and lifestyle.',
  description = 'Schedule laboratory tests, book vaccination appointments, and receive high-quality medical services from the convenience of wherever you are in Nigeria.',
  ctaText = 'Start here',
  ctaLink = '#',
  features,
}) => {
  // const ctaAction = () =>
  //   document
  //     .querySelector(ctaLink)
  //     ?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });

  return (
    <div className='w-full items-center bg-primaryLight md:h-[calc(100vh-260px)] xl:grid xl:justify-center'>
      <Section className='relative flex h-full w-full flex-col items-center justify-between overflow-x-visible bg-primaryLight lg:flex lg:flex-row'>
        <div className='mt-20 flex w-full flex-col justify-start gap-6 lg:mt-0 lg:justify-center'>
          <h1 className='mx-auto w-4/5  text-center text-2xl font-bold  text-header-100 sm:max-w-[300px] md:max-w-[250px] lg:mx-0 lg:max-w-[415px] lg:text-start lg:text-5xl'>
            {title}
          </h1>
          <p className='mx-auto flex w-full flex-wrap gap-x-1.5 gap-y-4 text-center text-base font-light leading-[30px] text-content sm:max-w-[300px] md:max-w-[250px] lg:mx-0 lg:max-w-[498px] lg:text-start lg:text-lg'>
            {features.map((feature) => (
              <span key={feature} className='flex items-center gap-2'>
                <span className='grid h-6 w-6 place-content-center rounded-full bg-white text-sm text-primary'>
                  <IconDoubleCheck size={14} />
                </span>
                <span className='font-medium first-letter:uppercase lg:text-lg'>
                  {feature}
                </span>
              </span>
            ))}
          </p>

          <div className='flex w-full justify-center gap-3 lg:w-max lg:justify-start'>
            <Button
              radius='full'
              as={Link}
              href='/telehealth'
              className='px-12 py-6 font-medium'
              color='primary'
              size='lg'
            >
              Telehealth
            </Button>
            <Button
              radius='full'
              as={Link}
              href='/telehealth/shop-and-order'
              className='border-header-100 bg-white px-12 py-6 font-medium text-header-100 transition-all hover:border-primary hover:bg-primary hover:text-white'
              variant='bordered'
              size='lg'
            >
              Pharmacy
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
        </div>
      </Section>
    </div>
  );
};
