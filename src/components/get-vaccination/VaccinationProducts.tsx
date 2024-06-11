'use client';

import { Section } from '@/components/home/Section';
import { useGetProductsInfinity } from '@/hooks';
import { FC, useMemo } from 'react';
import { TelehealthProductCard } from '../TelehealthProductCard';
import { LabTestsSkeleton } from '../book-lab-test/skeleton/LabTestsSkeleton';
import InfiniteScroll from 'react-infinite-scroll-component';

const limit = 20;

type VaccinationProductsProps = {};

export const VaccinationProducts: FC<VaccinationProductsProps> = () => {
  const {
    products,
    loadingProducts: loadingVaccines,
    fetchProductNextPage,
    productHasNextPage,
  } = useGetProductsInfinity({
    categoryId: process.env.NEXT_PUBLIC_VACCINE_ID,
    limit,
  });

  const vaccines = useMemo(() => {
    return products?.pages.reduce((acc, page) => {
      return [...acc, ...page];
    }, []);
  }, [products]);

  return (
    <div className='min-h-fit w-full bg-gray-100'>
      <div className='lg:grid lg:justify-center'>
        <Section className='border-t-2 border-primary bg-transparent py-20'>
          {loadingVaccines ? <LabTestsSkeleton /> : null}

          {vaccines && vaccines?.length > 0 && !loadingVaccines ? (
            <div className='grid w-full gap-6'>
              <InfiniteScroll
                next={fetchProductNextPage}
                hasMore={productHasNextPage}
                loader={<LabTestsSkeleton />}
                dataLength={vaccines?.length || 0}
                className='grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'
              >
                {vaccines?.map((product) => (
                  <TelehealthProductCard
                    color='primary'
                    test={product}
                    key={product.id}
                  />
                ))}
              </InfiniteScroll>
            </div>
          ) : null}

          {!loadingVaccines && vaccines?.length === 0 ? (
            <div className='grid w-full place-content-center'>
              <p className='text-center font-medium'>
                No Vaccines Yet. Try again
              </p>
            </div>
          ) : null}
        </Section>
      </div>
    </div>
  );
};
