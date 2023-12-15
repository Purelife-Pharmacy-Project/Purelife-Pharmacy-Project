import { Button, Image, Pagination } from '@nextui-org/react';
import { FC } from 'react';
import { Section } from '../home/Section';
import { DrugTestCard } from './DrugTestCard';

interface LabTestProductsProps {}

export const LabTestProducts: FC<LabTestProductsProps> = () => {
  const categories = [
    {
      name: 'All',
      image: '/images/care-package.png',
    },
    {
      name: 'Sexual Health',
      image: '/images/care-package.png',
    },
    {
      name: "Women's Health",
      image: '/images/care-package.png',
    },
    {
      name: 'Men’s Health',
      image: '/images/care-package.png',
    },
  ];
  return (
    <>
      <div className='grid justify-center'>
        <Section className='bg-white'>
          <div className='grid gap-10 sm:grid-cols-2 lg:grid-flow-col lg:grid-cols-4'>
            {categories.map((category, index) => (
              <Button
                variant='flat'
                key={index}
                className='flex h-max flex-col gap-2 border-none bg-transparent py-2'
              >
                <div className='flex justify-center'>
                  <Image
                    radius='full'
                    src={category.image}
                    alt={category.name}
                    width={140}
                    height={140}
                  />
                </div>
                <div className='flex justify-center'>
                  <p className='text-center text-lg font-medium text-header-100'>
                    {category.name}
                  </p>
                </div>
              </Button>
            ))}
          </div>
        </Section>
      </div>

      {/*products  */}
      <div className='min-h-fit w-full bg-gray-100'>
        <div className='grid justify-center'>
          <Section className='border-t-2 border-primaryGreen bg-transparent py-20'>
            <div className='grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
              {Array.from({ length: 5 })
                .fill(0)
                .map((_, index) => (
                  <DrugTestCard key={index} />
                ))}
            </div>
            <div className='mt-8 flex justify-end'>
              <Pagination
                color='success'
                className='text-white'
                total={10}
                initialPage={1}
              />
            </div>
          </Section>
        </div>
      </div>
    </>
  );
};
