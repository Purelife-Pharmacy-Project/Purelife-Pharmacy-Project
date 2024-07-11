'use client';
import { Image, Link } from '@nextui-org/react';
import { FC } from 'react';
import { Section } from './Section';
import { IconArrowRight } from '@/components/icons/IconArrowRight';

interface HomePageHeroProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  features: string[];
  featuresWithLinks: Array<{ label: string; href: string }>;
}
export const HomePageHero: FC<HomePageHeroProps> = ({
  title = '',
  description = 'Schedule laboratory tests, book vaccination appointments, and receive high-quality medical services from the convenience of wherever you are in Nigeria.',
  ctaText = 'Start here',
  ctaLink = '#',
  features,
  featuresWithLinks,
}) => {
  return (
    <div className='relative w-full items-center bg-primaryLight md:min-h-[calc(100vh-260px)] lg:bg-transparent xl:grid xl:justify-center'>
      <div
        className='absolute left-0 top-0 hidden h-full w-full lg:block'
        style={{
          backgroundImage:
            'url(/images/pharamacist-smiling.png), linear-gradient(to right,#000000, #0000004D)',
          backgroundPosition: 'right',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto 100%',
        }}
      ></div>
      <div className='absolute left-0 top-0 z-[2] hidden h-full w-5/6 bg-gradient-to-r from-black/100 from-40% to-black/0 lg:block'></div>
      <Section className='relative z-[3] flex h-full w-full flex-col items-center justify-between overflow-x-visible bg-primaryLight px-6 lg:flex lg:flex-row lg:!bg-transparent'>
        <div className='mt-8 flex w-full flex-col justify-start gap-6 lg:mt-0 lg:justify-center'>
          <h1 className='text-start text-3xl font-bold capitalize text-header-100 lg:mx-0 lg:max-w-[550px] lg:text-start lg:text-5xl lg:text-white'>
            {title}
          </h1>
          <p className='grid grid-cols-1 gap-x-5 gap-y-3.5 md:grid-cols-2 lg:max-w-[605px]'>
            {featuresWithLinks.map((feature) => (
              <Link
                className='flex items-center justify-between rounded-[10px] bg-white px-5 py-4'
                key={feature.label}
                href={feature.href}
              >
                <span className='capitalize text-header-100'>
                  {feature.label}
                </span>
                <span className='grid h-7 w-7 place-content-center rounded-full bg-[#F4F4F4]'>
                  <IconArrowRight className='text-primary' size={12} />
                </span>
              </Link>
            ))}
          </p>
        </div>
        <div className='relative mb-9 mt-6 flex w-full justify-center self-end  lg:hidden'>
          <Image
            className='overflow-hidden from-white to-transparent object-cover lg:!h-[55vh] lg:!w-[50vw] lg:bg-gradient-to-b'
            radius='lg'
            width={400}
            height={200}
            src='/images/pharamacist-smiling.png'
            alt='charming joyful youth couple'
          />
        </div>
      </Section>
    </div>
  );
};
