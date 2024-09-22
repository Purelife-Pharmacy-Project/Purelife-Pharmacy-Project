'use client';

import { Section } from '@/components/home/Section';
import { useGetProductsInfinity } from '@/hooks';
import React, { FC, useMemo } from 'react';
import { LabTestsSkeleton } from '../book-lab-test/skeleton/LabTestsSkeleton';
import InfiniteScroll from 'react-infinite-scroll-component';
import { LabTestCard } from '@/components/book-lab-test/LabTestCard';

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
    <div id='scroll' className='min-h-fit w-full scroll-mt-24'>
      <div className='lg:grid lg:justify-center'>
        <Section className='bg-transparent'>
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
                  <LabTestCard
                    product={product}
                    key={product.id}
                    baseUrl='/telehealth/get-vaccination'
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
