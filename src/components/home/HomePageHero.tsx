'use client';
import { Card, CardBody, Image, Link } from '@nextui-org/react';
import { FC } from 'react';
import { Section } from './Section';
import { IconDoubleCheck } from '@/components/icons/IconDoubleCheck';
import IconHomeHealth from '@/components/icons/IconHomeHealth';
import IconCardiology from '@/components/icons/IconCardiology';
import IconBookmarkStar from '@/components/icons/IconBookmarkStar';

interface HomePageHeroProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  features: string[];
}
export const HomePageHero: FC<HomePageHeroProps> = ({
  title = '',
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
          <h1 className='mx-auto w-4/5  text-center text-2xl font-bold capitalize  text-header-100 sm:max-w-[300px] md:max-w-[250px] lg:mx-0 lg:max-w-[415px] lg:text-start lg:text-5xl'>
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
            <Link href='/telehealth/shop-and-order'>
              <Card className='w-fit cursor-pointer bg-white px-4 py-1.5 shadow-sm transition-all hover:shadow-md lg:w-[175px] lg:px-4 lg:pb-6 lg:pt-8'>
                <CardBody className='flex flex-col justify-center p-0'>
                  <span className='mx-auto mb-2 grid h-16 w-16 place-content-center rounded-full bg-[#f4f4f4] p-4'>
                    <IconHomeHealth className='grid h-7 w-7 place-content-center' />
                  </span>
                  <h2 className='text-center text-sm capitalize text-header-100 lg:text-base lg:font-bold lg:leading-[30px]'>
                    Pharmacy
                  </h2>
                  <p className='hidden break-words text-center text-[8px] font-medium leading-[11px] lg:block'>
                    Shop for your health, supermarket, beauty and skin
                    essentials.
                  </p>
                </CardBody>
              </Card>
            </Link>

            <Link href='/telehealth'>
              <Card className='w-fit cursor-pointer bg-white px-4 py-1.5 shadow-sm transition-all hover:shadow-md lg:w-[175px] lg:px-4 lg:pb-6 lg:pt-8'>
                <CardBody className='flex flex-col justify-center p-0'>
                  <span className='mx-auto mb-2 grid h-16 w-16 place-content-center rounded-full bg-[#f4f4f4] p-4'>
                    <IconCardiology className='h-7 w-7' />
                  </span>
                  <h2 className='text-center text-sm capitalize text-header-100 lg:text-base lg:font-bold lg:leading-[30px]'>
                    Telehealth
                  </h2>
                  <p className='hidden break-words text-center text-[8px] font-medium leading-[11px] lg:block'>
                    Book lab tests, consult a doctor, and access quality medical
                    services.
                  </p>
                </CardBody>
              </Card>
            </Link>

            <Link href=''>
              <Card className='w-fit cursor-pointer bg-white px-4 py-1.5 shadow-sm transition-all hover:shadow-md lg:w-[175px] lg:px-4 lg:pb-6 lg:pt-8'>
                <CardBody className='flex flex-col justify-center p-0'>
                  <span className='mx-auto mb-2 grid h-16 w-16 place-content-center rounded-full bg-[#f4f4f4] p-4'>
                    <IconBookmarkStar className='h-7 w-7 ' />
                  </span>
                  <h2 className='text-center text-sm capitalize text-header-100 lg:text-base lg:font-bold lg:leading-[30px]'>
                    Lifestyle
                  </h2>
                  <p className='hidden text-center text-[8px] font-medium leading-[11px] lg:block'>
                    Get a custom meal plan, health insurance, and tailored
                    fitness plans.
                  </p>
                </CardBody>
              </Card>
            </Link>
          </div>
        </div>
        <div className='relative mt-4 flex w-full justify-center self-end md:mt-0'>
          <Image
            className='overflow-visible rounded-t-lg from-white to-transparent object-cover lg:!h-[55vh] lg:!w-[50vw] lg:bg-gradient-to-b'
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
