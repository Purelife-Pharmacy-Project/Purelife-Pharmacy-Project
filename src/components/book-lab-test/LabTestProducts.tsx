'use client';
import { useGetLabTests } from '@/hooks/useLabTest';
import { useSearchParams } from 'next/navigation';
import { FC } from 'react';
import { TelehealthProductCard } from '../TelehealthProductCard';
import { Section } from '../home/Section';
import { ProductsPagination } from '../shop-and-order/category/partials/ProductPagination';
import { LabTestsSkeleton } from './skeleton/LabTestsSkeleton';

interface LabTestProductsProps {}

export const LabTestProducts: FC<LabTestProductsProps> = () => {
  const searchParams = useSearchParams();
  const pageIndex = Number(searchParams.get('pageIndex') || '1');

  const { loadingLabTests, labTests } = useGetLabTests({
    pageSize: 3,
    pageIndex,
  });

  // const categories = [
  //   {
  //     name: 'All',
  //     image: '/images/care-package.png',
  //   },
  //   {
  //     name: 'Sexual Health',
  //     image: '/images/care-package.png',
  //   },
  //   {
  //     name: "Women's Health",
  //     image: '/images/care-package.png',
  //   },
  //   {
  //     name: 'Men’s Health',
  //     image: '/images/care-package.png',
  //   },
  // ];

  return (
    <>
      {/* <div className='grid justify-center'>
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
      </div> */}

      {/*products  */}
      <div className='min-h-fit w-full bg-gray-100'>
        <div className='grid justify-center'>
          <Section className='border-t-2 border-primaryGreen bg-transparent py-20'>
            {loadingLabTests ? <LabTestsSkeleton /> : null}

            <div className='grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
              {labTests?.data.map((test, index) => (
                <TelehealthProductCard
                  color='primary'
                  test={test}
                  key={index}
                />
              ))}
            </div>

            <ProductsPagination
              color='success'
              loading={loadingLabTests}
              className='text-white'
              totalPages={labTests?.totalPages!}
            />
          </Section>
        </div>
      </div>
    </>
  );
};
