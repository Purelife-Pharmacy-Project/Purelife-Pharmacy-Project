'use client';
import { getCategoryUrl } from '@/helpers/utils';
import { useGetCategories } from '@/hooks/useCategory';
import { Button, Card, CardBody, Image, Link } from '@nextui-org/react';

interface shopCategory {
  title: string;
  image: string;
  url: string;
  align: 'left' | 'right';
}

export const ShopCategory = () => {
  const {
    categories: allCategories,
    loadingCategories,
    isError,
  } = useGetCategories();

  const categories = [
    {
      title: 'Health Category',
      description:
        'Discover a wide range of healthcare and pharmaceutical products at budget-friendly rates.',
      image: '/images/health-basket.png',
      url: getCategoryUrl('health', allCategories),
      bgColor: 'bg-gray-300',
    },
    {
      title: 'Beauty and Skin Care Category',
      description:
        'Get a sleek grasp on top-notch skincare and beauty products.',
      image: '/images/beauty-kit.png',
      url: getCategoryUrl('beauty', allCategories),
      bgColor: 'bg-primaryLight',
    },
    {
      title: 'Supermarket Category',
      description:
        'Easily purchase your everyday essentials from wherever you are.',
      image: '/images/shopping-cart.png',
      url: getCategoryUrl('supermarket', allCategories),
      bgColor: 'bg-blueLight',
    },
  ];

  return (
    <div className='grid gap-8 lg:gap-12'>
      {categories.map((category, index) => (
        <Card
          key={index}
          shadow='none'
          className={category.bgColor}
          radius='lg'
        >
          <div className='flex flex-col-reverse items-center justify-center gap-4 lg:flex-row lg:justify-between'>
            <CardBody className='p-6 lg:p-20'>
              <div className='flex flex-col gap-4'>
                <h1 className='text-center text-2xl font-bold text-header-100 lg:text-start lg:text-4xl'>
                  {category.title}
                </h1>
                <p className='text-center text-sm font-light text-content lg:max-w-[353px] lg:text-start lg:text-base lg:text-lg'>
                  {category.description}
                </p>
                <Button
                  variant='bordered'
                  as={Link}
                  isLoading={loadingCategories}
                  isDisabled={
                    loadingCategories || isError || category.url === ''
                  }
                  href={category.url}
                  radius='full'
                  className='w-full border-header-100 px-[54px] py-6 text-lg text-header-100 disabled:cursor-not-allowed disabled:opacity-50 lg:w-max'
                >
                  {category.url === '' ? 'Unavailable' : 'Start Here'}
                </Button>
              </div>
            </CardBody>
            <div className='flex justify-center lg:mr-20'>
              <Image
                src={category.image}
                className='mx-auto h-60 w-60 object-contain lg:w-[600px]'
                alt='image'
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
