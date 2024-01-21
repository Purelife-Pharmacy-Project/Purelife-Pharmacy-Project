'use client';
import { IconCart } from '@/components/icons/IconCart';
import { IconHandAndHeart } from '@/components/icons/IconHandAndHeart';
import { IconHome } from '@/components/icons/IconHome';
import { getCategoryUrl } from '@/helpers/utils';
import { useGetCategories } from '@/hooks/useCategory';
import { Button, Card, CardBody, Link } from '@nextui-org/react';
import { Section } from './Section';

export const HomeShopAndOrder = () => {
  const { categories: allCategories } = useGetCategories();

  const categories = [
    {
      title: 'Health Category',
      description:
        'Discover a wide range of healthcare and pharmaceutical products at budget-friendly rates.',
      icon: <IconHome size={48} />,
      url: getCategoryUrl('health', allCategories),
      bgColor: 'bg-gray-300',
    },
    {
      title: 'Beauty and Skin Care Category',
      description:
        'Get a sleek grasp on top-notch skincare and beauty products.',
      icon: <IconHandAndHeart size={48} />,
      url: getCategoryUrl('beauty', allCategories),
      bgColor: 'bg-primaryLight',
    },
    {
      title: 'Supermarket Category',
      description:
        'Easily purchase your everyday essentials from wherever you are.',
      icon: <IconCart size={48} color='success' />,
      url: getCategoryUrl('supermarket', allCategories),
      bgColor: 'bg-blueLight',
    },
  ];
  return (
    <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
      <Section className='bg-white'>
        <div className='grid gap-10'>
          <div className='flex flex-col justify-between gap-4 md:flex-row md:gap-0'>
            <div className='grid gap-2'>
              <h1 className='text-start text-2xl font-bold text-primaryGreenDark md:min-w-[476px] lg:text-4xl'>
                Shop and Order
              </h1>
              <p className='font-light text-content lg:max-w-[524px] lg:text-lg'>
                Discover our one-stop shop for your health, supermarket, beauty
                and skin essentials, and enjoy hassle-free ordering.
              </p>
            </div>

            <Button
              radius='full'
              as={Link}
              href={'/shop-and-order'}
              size='lg'
              className='border-primaryGreenDark bg-primaryGreenLight px-12 text-primaryGreenDark'
              variant='bordered'
            >
              Shop & Order
            </Button>
          </div>

          <div className='grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
            {categories?.map((category, index) => (
              <Card key={index} shadow='none' radius='lg'>
                <CardBody className='grid gap-6 bg-primaryGreenLight p-6'>
                  <div className='ml-auto grid h-[104px] w-[104px] place-content-center rounded-full bg-white'>
                    {category.icon}
                  </div>
                  <div className='grid h-max gap-2'>
                    <p className='mb-[66px] max-w-[227px] text-lg font-medium text-primaryGreenDark'>
                      {category.title}
                    </p>
                  </div>
                  <Button
                    variant='bordered'
                    as={Link}
                    href={category.url}
                    radius='sm'
                    size='lg'
                    className='border-primaryGreenDark bg-white py-[28px] uppercase text-primaryGreenDark'
                  >
                    Shop all
                  </Button>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};
