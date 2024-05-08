'use client';
import { MobileProductsByPrice } from '@/components/shop-and-order/category/partials/MobileProductsByPrice';
import { ProductSearch } from '@/components/shop-and-order/category/partials/ProductSearch';
import { useGetCategories, useGetProducts } from '@/hooks';
import { usePathname, useSearchParams } from 'next/navigation';
import { Section } from '../../home/Section';
import { ProductsFilterContainer } from './partials/ProductsFilterContainer';
import { ProductsList } from './partials/ProductsList';
import { ProductSortDropdown } from './partials/ProductsSortDropdown';

export const CategoryProducts = () => {
  const { categories } = useGetCategories();

  const currentPath = usePathname();
  const searchParams = useSearchParams();

  const category = usePathname().split('/').pop();
  const isShopPage = currentPath === '/shop';

  const getCategoryId = () => {
    const category = currentPath.split('/').pop();
    const categoryParam = searchParams.get('category');

    if (isShopPage) {
      return categories?.find(
        (c) => c.name?.toLowerCase() === categoryParam?.toLowerCase()
      )?.id;
    }
    return categories?.find(
      (c) => c.name?.toLowerCase() === category?.toLowerCase()
    )?.id;
  };

  const searchString = searchParams.get('searchString') || undefined;
  const minPrice = searchParams.get('minPrice') || undefined;
  const maxPrice = searchParams.get('maxPrice') || undefined;
  const pageIndex = searchParams.get('pageIndex') || 1;
  const categoryId = getCategoryId();

  const {
    refetch: refetchProducts,
    products,
    loadingProducts,
  } = useGetProducts({
    categoryId: searchString ? undefined : (categoryId as string),
    name: searchString as string,
    limit: 20,
    offset: Number(pageIndex),
    MinListPrice: minPrice ? Number(minPrice) : undefined,
    MaxListPrice: maxPrice ? Number(maxPrice) : undefined,
  });

  return (
    <div id='products' className='lg:grid lg:justify-center lg:pb-10'>
      <Section className='grid gap-4 bg-white'>
        <div className='mt-6 grid w-full grid-cols-[10fr_2fr]  items-center justify-between gap-2 lg:mt-0 lg:grid-cols-2 lg:gap-4'>
          <ProductSearch loadingProducts={loadingProducts} />
          <div className={'block lg:hidden'}>
            <MobileProductsByPrice loadingProducts={loadingProducts} />
          </div>
          {isShopPage ? (
            <div className='hidden w-full justify-end lg:flex'>
              <ProductSortDropdown loadingProducts={loadingProducts} />
            </div>
          ) : null}
        </div>
        <div className='grid gap-4 lg:grid-flow-col lg:grid-cols-[3fr_9fr]'>
          {/* sidebar */}
          <ProductsFilterContainer />

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
