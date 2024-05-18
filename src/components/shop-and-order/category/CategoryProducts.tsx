'use client';
import { MobileProductsByPrice } from '@/components/shop-and-order/category/partials/MobileProductsByPrice';
import { ProductSearch } from '@/components/shop-and-order/category/partials/ProductSearch';
import { useGetCategories, useGetProducts, useSearchProducts } from '@/hooks';
import { usePathname, useSearchParams } from 'next/navigation';
import { Section } from '../../home/Section';
import { ProductsFilterContainer } from './partials/ProductsFilterContainer';
import { ProductsList } from './partials/ProductsList';
import { useMemo, useState } from 'react';

const limit = 20;

export const CategoryProducts = () => {
  const { categories } = useGetCategories();

  const [pageIndex, setPageIndex] = useState(0);

  const currentPath = usePathname();
  const searchParams = useSearchParams();
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
  const categoryId = getCategoryId();

  const {
    products,
    loadingProducts,
    isFetchingProductNextPage,
    fetchProductNextPage,
    productHasNextPage,
  } = useGetProducts({
    categoryId: categoryId?.toString(),
    limit,
    MinListPrice: minPrice ? Number(minPrice) : undefined,
    MaxListPrice: maxPrice ? Number(maxPrice) : undefined,
  });

  const {
    filteredProductHasNextPage,
    isFetchingFilteredProductNextPage,
    loadingFilteredProducts,
    fetchFilteredProductNextPage,
    filteredProducts,
  } = useSearchProducts({
    searchQuery: searchString,
    limit,
    offset: pageIndex * limit,
  });

  const productItems = useMemo(() => {
    return products?.pages.reduce((acc, page) => {
      return [...acc, ...page];
    }, []);
  }, [products]);

  const filteredProductItems = useMemo(() => {
    return filteredProducts?.pages.reduce((acc, page) => {
      return [...acc, ...page];
    }, []);
  }, [filteredProducts]);

  return (
    <div id='products' className='lg:grid lg:justify-center lg:pb-10'>
      <Section className='grid gap-4 bg-white'>
        <div className='mt-6 grid w-full grid-cols-[10fr_2fr]  items-center justify-between gap-2 lg:mt-0 lg:grid-cols-2 lg:gap-4'>
          <ProductSearch loadingProducts={loadingProducts} />
          <div className={'block lg:hidden'}>
            <MobileProductsByPrice loadingProducts={loadingProducts} />
          </div>
          {isShopPage ? (
            <div className='hidden w-full justify-end lg:flex'></div>
          ) : null}
        </div>
        <div className='grid gap-4 lg:grid-flow-col lg:grid-cols-[3fr_9fr]'>
          {/* sidebar */}
          <ProductsFilterContainer />

          {/* products */}
          <ProductsList
            isFetchingNextPage={
              searchString
                ? isFetchingFilteredProductNextPage
                : isFetchingProductNextPage
            }
            fetchNextPage={
              searchString ? fetchFilteredProductNextPage : fetchProductNextPage
            }
            products={
              searchString ? filteredProductItems || [] : productItems || []
            }
            hasNextPage={
              searchString ? filteredProductHasNextPage : productHasNextPage
            }
            loadingProducts={
              searchString ? loadingFilteredProducts : loadingProducts
            }
          />
        </div>
      </Section>
    </div>
  );
};
