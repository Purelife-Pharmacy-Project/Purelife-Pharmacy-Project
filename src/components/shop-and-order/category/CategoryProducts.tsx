'use client';
import { MobileProductsByPrice } from '@/components/shop-and-order/category/partials/MobileProductsByPrice';
import { ProductSearch } from '@/components/shop-and-order/category/partials/ProductSearch';
import {
  useGetCategories,
  useGetProductsInfinity,
  useQueryParams,
  useSearchProducts,
} from '@/hooks';
import { usePathname, useSearchParams } from 'next/navigation';
import { Section } from '../../home/Section';
import { ProductsFilterContainer } from './partials/ProductsFilterContainer';
import { ProductsList } from './partials/ProductsList';
import { useEffect, useMemo, useRef, useState } from 'react';
import HotOffersProduct from '@/components/home/HotOffersProduct';
import BestSellers from '@/components/home/BestSellers';
import { Button, Image } from '@nextui-org/react';
import { Pagination } from '@/components/pagination';
import { IconLock } from '@/components/icons/IconLock';
import { IconChevronLeft } from '@/components/icons/IconChevronLeft';
import { useClickOutside } from '@/helpers/utils';

const limit = 9;

interface SortData {
  id: number;
  value: string;
}

export const CategoryProducts = () => {
  const { categories } = useGetCategories();

  const [pageIndex, setPageIndex] = useState(0);

  const currentPath = usePathname();
  const searchParams = useSearchParams();
  const isShopPage = currentPath === '/shop';

  const getCategoryId = () => {
    const category = currentPath.split('/').pop();
    const categoryParam = searchParams.get('category')?.replaceAll('-', ' ');

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
  const [offset, setOffset] = useState(0);
  const [currPage, setCurrPage] = useState(1);
  const {
    products,
    loadingProducts,
    isFetchingProductNextPage,
    fetchProductNextPage,
    productHasNextPage,
    productHasPreviousPage,
    fetchProductPreviousPage,
  } = useGetProductsInfinity({
    categoryId: categoryId?.toString(),
    limit,
    MinListPrice: minPrice ? Number(minPrice) : undefined,
    MaxListPrice: maxPrice ? Number(maxPrice) : undefined,
    offset: offset
  });

  const handleNextPage = () => {
    if (productHasNextPage) {
      fetchProductNextPage();
      setOffset(offset + 9);
    }
  };

  const handlePrevPage = () => {
    if (offset !==0) {
      fetchProductPreviousPage();
      setOffset(offset - 9);
    }
  };

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
  const divRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const bannerImages = [
    '/images/pharmacy-banner-1.jpg',
    '/images/pharmacy-banner-2.jpg',
    '/images/pharmacy-banner-1.jpg',
    '/images/pharmacy-banner-2.jpg',
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      const timeout = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
        setFade(true);
      }, 500);
      return () => clearTimeout(timeout);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const sortRanges: SortData[] = [
    { id: 1, value: 'Lowest to Highest' },
    { id: 2, value: 'Highest to Lowest' },
  ];
  const [sort, setSort] = useState('Sort By');
  const [sortDropdown, setSortDropdown] = useState(false);
  const sortButtonRef = useRef<HTMLDivElement | null>(null);
  const sortPopupRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(sortPopupRef, sortButtonRef, () => setSortDropdown(false));
  const { setQuery, removeQuery } = useQueryParams();
  return (
    <div id='products' className='lg:grid lg:justify-center lg:pb-10'>
      <div className='grid bg-white'>
        {/* <div className='mt-6 grid w-full grid-cols-[10fr_2fr]  items-center justify-between gap-2 lg:mt-0 lg:grid-cols-2 lg:gap-4'>
          <ProductSearch loadingProducts={loadingProducts} />
          <div className={'block lg:hidden'}>
            <MobileProductsByPrice loadingProducts={loadingProducts} />
          </div>
          {isShopPage ? (
            <div className='hidden w-full justify-end lg:flex'></div>
          ) : null}
        </div> */}
        <div className='w-full border-t border-b flex justify-between items-center py-[15px] px-[4%]'>
          <div className='flex gap-8 text-[#797979] font-medium cursor-pointer'>
            <span>Beauty</span>
            <span>Health</span>
            <span>Sexual Health</span>
            <span>Supermarket</span>
          </div>
          <div className='flex gap-1 text-[#797979] font-medium'>
            <span className='flex gap-2'><IconLock /> Deliver to:</span>
            <span className='text-[#1E272F]'>Lagos, Nigeria</span>
          </div>
        </div>
        <div className='grid gap-4 lg:grid-flow-col lg:grid-cols-[1fr_3fr]'>
          <ProductsFilterContainer />
          <div className='pr-[5%]'>
            <div className='w-full flex justify-between py-[35px]'>
              <Button
                onClick={() => {
                  removeQuery(['category']);
                }}
                className='text-[#FF0028] bg-white text-lg font-medium'>Reset Filter</Button>
              <div className='relative hidden w-fit sm:block'>
                <div
                  ref={sortButtonRef}
                  onClick={() => setSortDropdown(!sortDropdown)}
                  className='ld:gap-5 flex h-fit w-fit cursor-pointer items-center gap-2 rounded-[100px] border border-[#1E272F] bg-white px-3 py-1'
                >
                  <p className='text-sm font-medium text-[#1E272F]'>{sort}</p>
                  <IconChevronLeft className='-rotate-90' color='[#1E272F]' />
                </div>
                {sortDropdown && (
                  <div
                    ref={sortPopupRef}
                    className='absolute right-0 top-[35px] z-20 mt-1 flex max-h-48 w-[200px] flex-col gap-2 overflow-y-auto rounded-lg border border-gray-200 bg-[#FFFFFF] p-2 shadow-lg'
                  >
                    {sortRanges.map((range) => (
                      <div
                        key={range.id}
                        className='flex h-fit cursor-pointer items-center justify-between rounded-[5px] bg-primaryLight p-3 py-1 pl-2 hover:bg-gray-200'
                        onClick={() => {
                          setSort(range.value);
                          setSortDropdown(false);
                        }}
                      >
                        <span className='cursor-pointer text-sm font-medium text-gray-600'>
                          {range.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <ProductsList
              isFetchingNextPage={
                searchString
                  ? isFetchingFilteredProductNextPage
                  : isFetchingProductNextPage
              }
              fetchNextPage={
                searchString
                  ? fetchFilteredProductNextPage
                  : fetchProductNextPage
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
            <div
              style={{
                backgroundImage: `url(${bannerImages[currentIndex]})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
              className={`banner-container flex min-h-[434px] rounded-[20px] w-full flex-col items-start justify-center mt-16 ${fade ? 'fade-in' : 'fade-out'}`}
            >
              <div className='mx-auto w-[95%] lg:ml-[5%] lg:w-[50%]'>
                <div className={`mb-7 mt-8 text-center text-5xl font-semibold lg:mt-0 lg:text-left ${(currentIndex === 1 || currentIndex === 3) && 'text-white'}`}>
                  {(currentIndex === 0 || currentIndex === 2) ? 'Limited Time offer! Up to 50%' : 'Subscribe to a drug refill'}
                </div>
                <div
                  ref={divRef}
                  className={`mb-7 mr-auto text-center text-xl font-medium lg:text-left ${(currentIndex === 1 || currentIndex === 3) && 'text-white'}`}
                >
                  
                  {(currentIndex === 0 || currentIndex === 2) ? 'Take control of your health and experience the benefits of Purelife health' : 'Get your medications delivered to you at your preferred intervals.'}
                </div>
                <div className='lg-mx-0 mx-auto mt-8 hidden w-fit gap-2 lg:flex'>
                  {bannerImages.map((_, index) => (
                    <div
                      key={index}
                      className={`h-[8px] w-[30px] rounded-full ${
                        currentIndex === index ? 'bg-[#38CB61]' : 'bg-[#D9D9D9]'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <h1 className='mt-16 text-3xl font-semibold'>
              Find Your Perfect Health and Wellness Solution
            </h1>
            <div className='mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:gap-5'>
              <HotOffersProduct />
              <BestSellers />
            </div>
            <Pagination currentPage={currPage} totalPages={Math.ceil(productItems?.length / limit)} setCurrentPage={setCurrPage} handleNextPage={handleNextPage} handlePrevPage={handlePrevPage}/>
          </div>
        </div>
      </div>
    </div>
  );
};
