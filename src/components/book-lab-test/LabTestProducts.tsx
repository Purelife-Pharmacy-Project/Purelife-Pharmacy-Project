'use client';
import { useGetCategories, useQueryParams } from '@/hooks';
import { useGetLabTests } from '@/hooks/useLabTest';
import { Button, Image } from '@nextui-org/react';
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
  const category = searchParams.get('category');

  const { setQuery, removeQuery } = useQueryParams();

  const { loadingLabTests, labTests } = useGetLabTests({
    pageSize: 6,
    pageIndex,
    categoryId: category ? Number(category) : undefined,
  });

  const { categories } = useGetCategories();

  // Filter out "Men's Health", "Women's Health", and "Sexual Health"
  const filteredData = categories
    ?.filter(
      (item) =>
        item.name.toLowerCase() === "men's health" ||
        item.name.toLowerCase() === "women's health" ||
        item.name.toLowerCase() === 'sexual health'
    )
    .map((item) => ({
      id: item.id,
      name: item.name,
      image: '/images/care-package.png',
    }));

  const labTestCategories = filteredData
    ? [
        { id: 0, name: 'All', image: '/images/care-package.png' },
        ...filteredData,
      ]
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
          <div className='grid gap-10 sm:grid-cols-2 lg:grid-flow-col lg:grid-cols-4'>
            {labTestCategories?.map((category, index) => (
              <Button
                variant='flat'
                key={index}
                isDisabled={loadingLabTests}
                radius='full'
                onClick={() =>
                  handleFilterByCategory(String(category.id), category.name)
                }
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
                  <p className='text-center text-lg font-medium capitalize text-header-100'>
                    {category.name?.toLowerCase()}
                  </p>
                </div>
              </Button>
            ))}
          </div>
        </Section>
      </div>
      {/* Products */}
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
