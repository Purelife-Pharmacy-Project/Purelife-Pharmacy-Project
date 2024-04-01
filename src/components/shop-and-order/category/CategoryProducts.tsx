'use client';
import { MobileProductsByPrice } from '@/components/shop-and-order/category/partials/MobileProductsByPrice';
import { ProductSearch } from '@/components/shop-and-order/category/partials/ProductSearch';
import { useGetProducts } from '@/hooks';
import { usePathname, useSearchParams } from 'next/navigation';
import { Section } from '../../home/Section';
import { ProductsFilterContainer } from './partials/ProductsFilterContainer';
import { ProductsList } from './partials/ProductsList';
import { ProductSortDropdown } from './partials/ProductsSortDropdown';

export const CategoryProducts = () => {
  const currentPath = usePathname();
  const category = currentPath.split('/')[3]?.split('-');
  const searchParams = useSearchParams();
  const isShopPage = currentPath === '/shop';

  const searchString = searchParams.get('searchString') || undefined;
  const minPrice = searchParams.get('minPrice') || undefined;
  const maxPrice = searchParams.get('maxPrice') || undefined;
  const pageIndex = searchParams.get('pageIndex') || 1;
  const categoryId = searchParams.get('categoryId') || category?.pop();

  const {
    refetch: refetchProducts,
    products,
    loadingProducts,
  } = useGetProducts({
    categoryId: categoryId as string,
    name: searchString as string,
    pageSize: 20,
    pageIndex: Number(pageIndex),
    active: true,
    minPrice: minPrice,
    maxPrice: maxPrice,
  });

  return (
    <div id='products' className='lg:grid lg:justify-center lg:pb-10'>
      <Section className='grid gap-4 bg-white'>
        <div className='mt-6 grid w-full grid-cols-[10fr_2fr]  items-center justify-between gap-2 lg:mt-0 lg:grid-cols-2 lg:gap-4'>
          <ProductSearch
            searchString={searchString as string}
            onRefetch={refetchProducts}
          />
          <div className={'block lg:hidden'}>
            <MobileProductsByPrice
              categoryId={categoryId}
              searchString={searchString as string}
              minPrice={minPrice}
              maxPrice={maxPrice}
            />
          </div>
          {isShopPage ? (
            <div className='hidden w-full justify-end lg:flex'>
              <ProductSortDropdown loadingProducts={loadingProducts} />
            </div>
          ) : null}
        </div>
        <div className='grid gap-4 lg:grid-flow-col lg:grid-cols-[3fr_9fr]'>
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
            totalPages={products?.totalPages as number}
          />
        </div>
      </Section>
    </div>
  );
};
