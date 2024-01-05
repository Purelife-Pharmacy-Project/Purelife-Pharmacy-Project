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

  const searchString = searchParams.get('searchString') || undefined;
  const minPrice = searchParams.get('minPrice') || undefined;
  const maxPrice = searchParams.get('maxPrice') || undefined;
  const pageIndex = searchParams.get('pageIndex') || 1;

  useEffect(() => {
    const invalidId = !!Number.isNaN(Number(categoryId));
    const invalidSearchString = !!(searchString && searchString.length === 0);
    const invalidMinPrice = !!(minPrice && isNaN(Number(minPrice)));
    const invalidMaxPrice = !!(maxPrice && isNaN(Number(maxPrice)));
    const invalidPageIndex = !!(pageIndex && isNaN(Number(pageIndex)));

    if (
      invalidId ||
      invalidSearchString ||
      invalidMinPrice ||
      invalidMaxPrice ||
      invalidPageIndex
    ) {
      router.push(currentPath);
    }
  }, [
    categoryId,
    maxPrice,
    minPrice,
    noId,
    router,
    searchString,
    currentPath,
    pageIndex,
  ]);

  const {
    refetch: refetchProducts,
    products,
    loadingProducts,
  } = useGetProducts(
    categoryId as string,
    searchString as string,
    20,
    Number(pageIndex),
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
            loading={loadingProducts}
          />
          <div className='flex w-full items-center justify-end gap-4'>
            <p className='font-light'>Sort By:</p>
            <ProductSortDropdown
              onRefetch={() => {}}
              loading={loadingProducts}
            />
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
          <ProductsList
            products={products?.products}
            loadingProducts={loadingProducts}
            totalPages={products?.totalPages || 0}
          />
        </div>
      </Section>
    </div>
  );
};
