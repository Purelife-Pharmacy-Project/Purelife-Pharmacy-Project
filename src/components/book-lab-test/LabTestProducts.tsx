'use client';
import { IconWomen } from '@/components/icons/IconWomen';
import { useGetCategories, useQueryParams } from '@/hooks';
import { useGetLabTests } from '@/hooks/useLabTest';
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
  ALL = 'All',
  MEN = "MEN'S HEALTH",
  WOMEN = "WOMEN'S HEALTH",
  SEXUAL = 'SEXUAL HEALTH',
}

export const LabTestProducts: FC<LabTestProductsProps> = () => {
  const searchParams = useSearchParams();
  const pageIndex = Number(searchParams.get('pageIndex')) || 1;
  const category = searchParams.get('category');

  const { setQuery, removeQuery } = useQueryParams();

  const { loadingLabTests, labTests } = useGetLabTests({
    pageSize: 12,
    pageIndex,
    categoryId: category ? Number(category) : undefined,
  });

  const { categories } = useGetCategories();

  // Filter out "Men's Health", "Women's Health", and "Sexual Health"
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
                      (labTests?.data && labTests?.data.length === 0)
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

            {labTests?.data && labTests?.data.length > 0 && !loadingLabTests ? (
              <div className='grid w-full gap-6'>
                <div className='grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
                  {labTests.data?.map((test, index) => (
                    <TelehealthProductCard
                      color='success'
                      test={test}
                      key={index}
                    />
                  ))}
                </div>

                <ProductsPagination
                  color='success'
                  loading={loadingLabTests}
                  className='text-white'
                  totalPages={labTests?.totalPages as number}
                />
              </div>
            ) : null}

            {!loadingLabTests && labTests?.data.length === 0 ? (
              <div className='grid w-full place-content-center'>
                <p className='text-center font-medium'>No Lab Tests Yet</p>
              </div>
            ) : null}
          </Section>
        </div>
      </div>
    </>
  );
};
