'use client';
import { ProductSearch } from '@/components/shop-and-order/category/partials/ProductSearch';
import { useGetProducts } from '@/hooks';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { Section } from '../../home/Section';
import { ProductsFilterContainer } from './partials/ProductsFilterContainer';
import { ProductsList } from './partials/ProductsList';
import { ProductSortDropdown } from './partials/ProductsSortDropdown';

export const CategoryProducts = () => {
  const currentPath = usePathname();
  const router = useRouter();
  const category = currentPath.split('/')[2].split('-');
  const noId = category.length === 1;
  const categoryId = category.pop() || '1';
  const searchParams = useSearchParams();

  const searchString = searchParams.get('searchString');
  const minPrice = searchParams.get('minPrice') || undefined;
  const maxPrice = searchParams.get('maxPrice') || undefined;

  useEffect(() => {
    const invalidId = Number.isNaN(Number(categoryId));
    const invalidSearchString = searchString && searchString.length > 50;
    const invalidMinPrice = minPrice && Number.isNaN(Number(minPrice));
    const invalidMaxPrice = maxPrice && Number.isNaN(Number(maxPrice));

    if (
      invalidId ||
      invalidSearchString ||
      invalidMinPrice ||
      invalidMaxPrice
    ) {
      router.push('/shop-and-order');
    }
  }, [categoryId, maxPrice, minPrice, noId, router, searchString]);

  const {
    refetch: refetchProducts,
    products,
    loadingProducts,
  } = useGetProducts(
    categoryId as string,
    searchString as string,
    undefined,
    undefined,
    true,
    undefined,
    minPrice,
    maxPrice
  );

  return (
    <div className='grid justify-center lg:pb-10'>
      <Section className='grid gap-6 bg-white'>
        <div className='grid w-full grid-flow-col grid-cols-2 items-center justify-between gap-4'>
          <ProductSearch
            searchString={searchString as string}
            onRefetch={refetchProducts}
          />
          <div className='flex w-full items-center justify-end gap-4'>
            <p className='font-light'>Sort By:</p>
            <ProductSortDropdown />
          </div>
        </div>
        <div className='grid grid-flow-col grid-cols-[3fr_9fr] gap-4'>
          {/* sidebar */}
          <ProductsFilterContainer
            categoryId={categoryId}
            searchString={searchString as string}
            minPrice={minPrice}
            maxPrice={maxPrice}
          />
          {/* products */}
          <ProductsList products={products} loadingProducts={loadingProducts} />
        </div>
      </Section>
    </div>
  );
};
