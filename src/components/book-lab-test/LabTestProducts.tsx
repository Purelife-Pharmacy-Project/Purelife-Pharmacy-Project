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
  const pageIndex = Number(searchParams.get('pageIndex')) || 1;

  const { loadingLabTests, labTests, isSuccess } = useGetLabTests({
    pageSize: 6,
    pageIndex,
  });

  return (
    <>
      <div className='min-h-fit w-full bg-gray-100'>
        <div className='md:grid md:justify-center'>
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
              color='primary'
              loading={loadingLabTests}
              className='text-white'
              totalPages={labTests?.totalPages as number}
            />
          </Section>
        </div>
      </div>
    </>
  );
};
