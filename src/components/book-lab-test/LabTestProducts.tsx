'use client';
import { useGetProductsInfinity, useQueryParams } from '@/hooks';
import { Button, Skeleton } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';
import React, { FC, useEffect, useMemo } from 'react';
import { Section } from '../home/Section';
import { LabTestsSkeleton } from './skeleton/LabTestsSkeleton';
import InfiniteScroll from 'react-infinite-scroll-component';
import clsx from 'clsx';
import { LabTestCard } from '@/components/book-lab-test/LabTestCard';

type LabTestProductsProps = {};

export const LabTestProducts: FC<LabTestProductsProps> = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || undefined;

  const { setQuery, removeQuery } = useQueryParams();

  const {
    products,
    loadingProducts: loadingLabTests,
    fetchProductNextPage,
    productHasNextPage,
  } = useGetProductsInfinity({
    categoryId: category || '21',
    limit: 12,
  });

  const labTests = useMemo(() => {
    return products?.pages.reduce((acc, page) => {
      return [...acc, ...page];
    }, []);
  }, [products]);

  // Filter out categories that are not related to lab tests
  const labTestCategories = [
    { id: 18, name: 'General' },
    { id: 19, name: "Men's Health" },
    { id: 20, name: "Women's Health" },
    { id: 21, name: 'Sexual Health' },
  ];

  const handleFilterByCategory = (categoryId: string | number) => {
    if (categoryId === 0 || categoryId === '0') {
      return removeQuery(['category']);
    } else {
      setQuery({ category: categoryId });
    }
  };

  useEffect(() => {
    handleFilterByCategory(18);
  }, []);

  return (
    <>
      <div id='scroll' className='grid scroll-mt-24'>
        <Section className='flex flex-wrap justify-center gap-3 bg-white md:px-5'>
          {labTestCategories?.map((_c, index) => (
            <Button
              isDisabled={
                loadingLabTests || (labTests && labTests?.length === 0)
              }
              key={index}
              color={category === String(_c.id) ? 'primary' : 'default'}
              variant={category === String(_c.id) ? 'solid' : 'bordered'}
              radius='full'
              onPress={() => handleFilterByCategory(String(_c.id))}
              className={clsx('h-fit w-40 px-5 py-2.5 capitalize')}
            >
              {_c.name?.toLowerCase()}
            </Button>
          ))}
        </Section>
      </div>
      {/* Products */}

      <Section className='bg-transparent'>
        {loadingLabTests ? <LabTestsSkeleton /> : null}

        {labTests && labTests?.length > 0 && !loadingLabTests ? (
          <div className='grid w-full gap-6'>
            <InfiniteScroll
              next={fetchProductNextPage}
              hasMore={productHasNextPage}
              loader={
                <>
                  {Array(6)
                    .fill(0)
                    .map((_, index) => (
                      <Skeleton
                        key={index}
                        className={
                          'h-[188px] w-full rounded-xl bg-white sm:w-[350px] lg:w-[384px]'
                        }
                      ></Skeleton>
                    ))}
                </>
              }
              scrollThreshold={0.4}
              dataLength={labTests?.length}
              className='relative grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'
            >
              {labTests?.map((test, index) => (
                <LabTestCard
                  product={test}
                  key={index}
                  baseUrl='/telehealth/book-lab-test'
                />
              ))}
            </InfiniteScroll>
          </div>
        ) : null}

        {!loadingLabTests && labTests?.length === 0 ? (
          <div className='grid w-full place-content-center'>
            <p className='text-center font-medium'>
              No Lab Tests Yet. Try again
            </p>
          </div>
        ) : null}
      </Section>
    </>
  );
};
