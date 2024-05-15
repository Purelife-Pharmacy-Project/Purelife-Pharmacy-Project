'use client';
import { IconWomen } from '@/components/icons/IconWomen';
import { useGetCategories, useGetProducts, useQueryParams } from '@/hooks';
import { Button } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { TelehealthProductCard } from '../TelehealthProductCard';
import { Section } from '../home/Section';
import { IconHealthShield } from '../icons/IconHealthShield';
import { IconMensHealth } from '../icons/IconMensHealth';
import { IconStethoscope } from '../icons/IconStethoscope';
import { ProductsPagination } from '../shop-and-order/category/partials/ProductPagination';
import { LabTestsSkeleton } from './skeleton/LabTestsSkeleton';

type LabTestProductsProps = {};

enum CategoryNames {
  ALL = 'all',
  MEN = 'Men',
  WOMEN = 'Women',
  SEXUAL = 'Sexual',
}

export const LabTestProducts: FC<LabTestProductsProps> = () => {
  const searchParams = useSearchParams();
  const pageIndex = Number(searchParams.get('pageIndex')) || 1;
  const category = searchParams.get('category') || undefined;

  const { setQuery, removeQuery } = useQueryParams();
  const { categories } = useGetCategories();

  const { loadingProducts: loadingLabTests, products: labTests } =
    useGetProducts({
      limit: 12,
      offset: pageIndex,
      categoryId: category || '21',
    });

  // Filter out categories that are not related to lab tests
  const filteredData = categories
    ?.filter(
      (item) =>
        item.name === CategoryNames.SEXUAL ||
        item.name === CategoryNames.WOMEN ||
        item.name === CategoryNames.MEN
    )
    .map((item) => ({
      id: item.id,
      name: item.name,
    }));

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case CategoryNames.MEN:
        return <IconMensHealth size={75} color='success' />;
      case CategoryNames.WOMEN:
        return <IconWomen size={75} color='success' />;
      case CategoryNames.SEXUAL:
        return <IconHealthShield size={75} color='success' />;
      case CategoryNames.ALL:
        return <IconStethoscope color='success' />;
      default:
        return <IconStethoscope size={75} color='success' />;
    }
  };

  const labTestCategories = filteredData
    ? [...filteredData, { id: 0, name: 'All', icon: '' }]
    : [];

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

  return (
    <>
      <div className='grid justify-center'>
        <Section className='bg-white'>
          {
            <div className='grid gap-10 sm:grid-cols-2 lg:grid-flow-col lg:grid-cols-4'>
              {labTestCategories?.map((_c, index) => (
                <div key={index} className='gap-2 xl:grid xl:justify-center'>
                  <Button
                    isDisabled={
                      loadingLabTests ||
                      (labTests?.products && labTests.products?.length === 0)
                    }
                    radius='full'
                    isIconOnly
                    onPress={() =>
                      handleFilterByCategory(String(_c.id), _c.name)
                    }
                    className={twMerge(
                      'flex h-[140px] w-[140px] items-center justify-center bg-primaryGreenLight p-0',
                      category === String(_c.id)
                        ? 'border-3 border-primaryGreen'
                        : 'border-3 border-transparent'
                    )}
                  >
                    {getCategoryIcon(_c.name)}
                  </Button>
                  <div className='flex justify-center'>
                    <p
                      className={twMerge(
                        'text-center text-lg font-medium capitalize',
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
          <Section className='border-t-2 border-primaryGreen bg-transparent py-20'>
            {loadingLabTests ? <LabTestsSkeleton /> : null}

            {labTests?.products &&
            labTests?.products.length > 0 &&
            !loadingLabTests ? (
              <div className='grid w-full gap-6'>
                <div className='grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
                  {labTests.products?.map((test, index) => (
                    <TelehealthProductCard
                      color='success'
                      test={test}
                      key={index}
                    />
                  ))}
                </div>
              </div>
            ) : null}

            {!loadingLabTests && labTests?.products.length === 0 ? (
              <div className='grid w-full place-content-center'>
                <p className='text-center font-medium'>
                  No Lab Tests Yet. Try again
                </p>
              </div>
            ) : null}

            {!loadingLabTests && labTests?.products ? (
              <ProductsPagination
                color='success'
                loading={loadingLabTests}
                className='text-white'
                totalPages={labTests?.totalPages as number}
              />
            ) : null}
          </Section>
        </div>
      </div>
    </>
  );
};
