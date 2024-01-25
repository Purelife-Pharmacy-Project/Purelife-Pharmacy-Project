'use client';

import { Section } from '@/components/home/Section';
import { useGetVaccines } from '@/hooks';
import { useSearchParams } from 'next/navigation';
import { FC } from 'react';
import { TelehealthProductCard } from '../TelehealthProductCard';
import { LabTestsSkeleton } from '../book-lab-test/skeleton/LabTestsSkeleton';
import { ProductsPagination } from '../shop-and-order/category/partials/ProductPagination';

type VaccinationProductsProps = {};

export const VaccinationProducts: FC<VaccinationProductsProps> = () => {
  const searchParams = useSearchParams();
  const pageIndex = Number(searchParams.get('pageIndex') || '1');

  const { vaccines, loadingVaccines } = useGetVaccines({
    pageSize: 6,
    pageIndex,
  });

  return (
    <div className='min-h-fit w-full bg-gray-100'>
      <div className='grid justify-center'>
        <Section className='border-t-2 border-primary bg-transparent py-20'>
          {loadingVaccines ? <LabTestsSkeleton /> : null}

          <div className='grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
            {vaccines?.data.map((vaccine, index) => (
              <TelehealthProductCard
                color='primary'
                test={vaccine}
                key={index}
              />
            ))}
          </div>

          <div className='mt-8 flex justify-end'>
            <ProductsPagination
              totalPages={vaccines?.totalPages!}
              className='text-white'
              color='primary'
              loading={loadingVaccines}
            />
          </div>
        </Section>
      </div>
    </div>
  );
};
