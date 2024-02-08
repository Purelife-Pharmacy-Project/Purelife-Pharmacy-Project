'use client';
import { Button, Card, CardBody, Image } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import { Section } from '../../home/Section';

interface CategoryHeroProps {}

export const CategoryHero: FC<CategoryHeroProps> = ({}) => {
  const currentPath = usePathname();

  const generateHero = () => {
    if (currentPath.startsWith('/telehealth/shop-and-order/health')) {
      return {
        image: '/images/health-basket.png',
        title: 'Health Category',
        bgColor: 'bg-gray-300',
        description:
          'Discover a wide range of healthcare and pharmaceutical products at budget-friendly rates.',
      };
    } else if (currentPath.startsWith('/telehealth/shop-and-order/beauty')) {
      return {
        image: '/images/beauty-kit.png',
        title: 'Beauty and Skin Care Category',
        bgColor: 'bg-primaryLight',
        description:
          'Get a sleek grasp on top-notch skincare and beauty products.',
      };
    } else if (
      currentPath.startsWith('/telehealth/shop-and-order/supermarket')
    ) {
      return {
        image: '/images/shopping-cart.png',
        title: 'Supermarket Category',
        bgColor: 'bg-blueLight',
        description:
          'Easily purchase your everyday essentials from wherever you are.',
      };
    } else {
      return {
        image: '/images/health-basket.png',
        title: 'Health Category',
        bgColor: 'bg-gray-300',
        description:
          'Discover a wide range of healthcare and pharmaceutical products at budget-friendly rates.',
      };
    }
  };

  return (
    <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
      <Section className='bg-white'>
        <Card shadow='none' className={generateHero().bgColor} radius='lg'>
          <div className='flex items-center justify-between gap-4'>
            <CardBody>
              <div className='grid w-full gap-4 p-1 md:p-4 lg:p-20'>
                <div className='flex gap-2 '>
                  <div className='grid gap-4'>
                    <h1 className='text-center text-2xl font-bold text-header-100 lg:text-start lg:text-4xl'>
                      {generateHero().title}
                    </h1>
                    <p className='text-center text-base font-light  leading-4 text-content lg:max-w-[353px] lg:text-start lg:text-lg'>
                      {generateHero().description}
                    </p>
                    <Button
                      radius='full'
                      className='mx-auto w-max px-20 py-6 lg:mx-0'
                      color='primary'
                      as={Link}
                      href='#products'
                      size='lg'
                    >
                      Shop all
                    </Button>
                  </div>
                </div>
              </div>
            </CardBody>
            <div className='mr-20 hidden justify-center lg:flex'>
              <Image
                width={600}
                height={600}
                src={generateHero().image}
                className='object-cover'
                alt='image'
              />
            </div>
          </div>
        </Card>
      </Section>
    </div>
  );
};
