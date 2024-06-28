'use client';
import { IconWomen } from '@/components/icons/IconWomen';
import {
  useGetCategories,
  useGetProductsInfinity,
  useQueryParams,
} from '@/hooks';
import { Button, Input, Skeleton } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { TelehealthProductCard } from '../TelehealthProductCard';
import { Section } from '../home/Section';
import { IconHealthShield } from '../icons/IconHealthShield';
import { IconMensHealth } from '../icons/IconMensHealth';
import { IconStethoscope } from '../icons/IconStethoscope';
import { LabTestsSkeleton } from './skeleton/LabTestsSkeleton';
import InfiniteScroll from 'react-infinite-scroll-component';
import clsx from 'clsx';
import debounce from 'lodash/debounce';
import { IconSearch } from '@/components/icons/IconSearch';

type LabTestProductsProps = {};

enum CategoryNames {
  ALL = 'all',
  GENERAL = 'General',
  MEN = "Men's Health",
  WOMEN = "Women's Health",
  SEXUAL = 'Sexual Health',
}

export const LabTestProducts: FC<LabTestProductsProps> = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || undefined;

  const [searchStr, setSearchStr] = useState<string | undefined>('');

  const { setQuery, removeQuery } = useQueryParams();
  const { categories } = useGetCategories();

  const handleDebouncedSearch = debounce((value: string) => {
    setSearchStr(value);
  }, 800);

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

  const filteredLabTests = useMemo(() => {
    if (!searchStr) {
      return labTests;
    }
    return labTests?.filter((test) =>
      test.name.toLowerCase().includes(searchStr?.toLowerCase())
    );
  }, [searchStr, labTests]);

  // Filter out categories that are not related to lab tests
  const filteredData = [
    { id: 18, name: 'General' },
    { id: 19, name: "Men's Health" },
    { id: 20, name: "Women's Health" },
    { id: 21, name: 'Sexual Health' },
  ];

  const getCategoryIcon = (name: string, active?: boolean) => {
    switch (name) {
      case CategoryNames.MEN:
        return (
          <IconMensHealth
            className={clsx(
              {
                'text-success': active,
                'text-[#BFBFBF]': !active,
              },
              'lg:scale-[2]'
            )}
            size={32}
          />
        );
      case CategoryNames.WOMEN:
        return (
          <IconWomen
            className={clsx(
              {
                'text-success': active,
                'text-[#BFBFBF]': !active,
              },
              'lg:scale-[2]'
            )}
            size={32}
          />
        );
      case CategoryNames.SEXUAL:
        return (
          <IconHealthShield
            className={clsx(
              {
                'text-success': active,
                'text-[#BFBFBF]': !active,
              },
              'lg:scale-[2]'
            )}
            size={40}
          />
        );
      case CategoryNames.ALL:
        return (
          <IconStethoscope
            className={clsx(
              {
                'text-success': active,
                'text-[#BFBFBF]': !active,
              },
              'lg:scale-[2]'
            )}
            size={40}
          />
        );
      default:
        return (
          <IconStethoscope
            className={clsx(
              {
                'text-success': active,
                'text-[#BFBFBF]': !active,
              },
              'lg:scale-[2]'
            )}
            size={40}
          />
        );
    }
  };

  const labTestCategories = filteredData;

  const handleFilterByCategory = (
    categoryId: string | number,
    name: string
  ) => {
    if (categoryId === 0 || categoryId === '0') {
      return removeQuery(['category']);
    } else {
      setQuery({ category: categoryId });
    }
  };

  const handleInputChange = useCallback(
    (value: string) => {
      handleDebouncedSearch(value);
    },
    [handleDebouncedSearch]
  );

  useEffect(() => {
    handleFilterByCategory(18, '');
  }, []);

  return (
    <>
      <div className='grid'>
        <Section className='bg-white'>
          {
            <div className='flex justify-between gap-6 px-5 lg:justify-start lg:gap-10'>
              {labTestCategories?.map((_c, index) => (
                <div key={index} className='grid justify-center gap-2'>
                  <Button
                    isDisabled={
                      loadingLabTests || (labTests && labTests?.length === 0)
                    }
                    radius='full'
                    isIconOnly
                    onPress={() =>
                      handleFilterByCategory(String(_c.id), _c.name)
                    }
                    className={clsx(
                      'flex h-[62px] w-[62px] items-center justify-center lg:h-[120px] lg:w-[120px]',
                      category === String(_c.id)
                        ? 'bg-primaryGreenLight'
                        : 'bg-[#F8F7F8]'
                    )}
                  >
                    {getCategoryIcon(_c.name, category === String(_c.id))}
                  </Button>
                  <div className='flex justify-center'>
                    <p
                      className={twMerge(
                        'text-center text-[8px] font-medium capitalize lg:text-sm',
                        category === String(_c.id)
                          ? 'text-primaryGreen'
                          : 'text-header-100'
                      )}
                    >
                      {_c.name?.toLowerCase()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          }
        </Section>
      </div>
      {/* Products */}
      <div className='min-h-fit w-full bg-gray-100'>
        <div className='md:grid md:justify-center'>
          <Section className='bg-transparent py-10'>
            <div className='relative mx-auto my-10 w-11/12'>
              <Input
                size='lg'
                radius='full'
                type='Search'
                onChange={(e) => handleInputChange(e.target.value)}
                classNames={{
                  input: ['py-6'],
                  inputWrapper: [
                    'h-max',
                    'pr-2',
                    'bg-white',
                    'shadow-none',
                    'text-black capitalize',
                    'data-[hover=true]:bg-white',
                    'group-data-[focus=true]:bg-white transition-all group-data-[focus=true]:shadow-md',
                    'group-data-[active=true]:bg-white',
                  ],
                }}
                startContent={<IconSearch size={24} color='success' />}
                placeholder='Search all tests here'
              />
            </div>

            {loadingLabTests ? <LabTestsSkeleton /> : null}

            {filteredLabTests &&
            filteredLabTests?.length > 0 &&
            !loadingLabTests ? (
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
                  dataLength={filteredLabTests?.length}
                  className='relative grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'
                >
                  {filteredLabTests?.map((test, index) => (
                    <TelehealthProductCard
                      color='success'
                      test={test}
                      key={index}
                    />
                  ))}
                </InfiniteScroll>
              </div>
            ) : null}

            {!loadingLabTests && filteredLabTests?.length === 0 ? (
              <div className='grid w-full place-content-center'>
                <p className='text-center font-medium'>
                  No Lab Tests Yet. Try again
                </p>
              </div>
            ) : null}
          </Section>
        </div>
      </div>
    </>
  );
};
