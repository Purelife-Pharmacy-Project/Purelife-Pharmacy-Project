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
import { IconChevronLeft } from '@/components/icons/IconChevronLeft';
import { useClickOutside } from '@/helpers/utils';
import { IconLocation } from '@/components/icons/IconLocation';
import { IconFilter } from '@/components/icons/IconFilter';
import { ProductSortDropdown } from './partials/ProductsSortDropdown';
import { ProductsPriceRange } from './partials/ProductsPriceRange';
import { Deals } from './partials/Deals';

interface SortData {
  id: number;
  value: string;
}

export const CategoryProducts = () => {
  //HOOK VARIABLES
  const { categories } = useGetCategories();
  const [limit, setLimit] = useState(9);
  const [pageIndex, setPageIndex] = useState(0);
  const currentPath = usePathname();
  const searchParams = useSearchParams();
  const isShopPage = currentPath === '/shop';
  const searchString = searchParams.get('searchString') || undefined;
  const minPrice = searchParams.get('minPrice') || undefined;
  const maxPrice = searchParams.get('maxPrice') || undefined;
  const divRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [offset, setOffset] = useState(0);
  const [currPage, setCurrPage] = useState(1);
  const [sort, setSort] = useState('Sort By');
  const [sortDropdown, setSortDropdown] = useState(false);
  const sortButtonRef = useRef<HTMLDivElement | null>(null);
  const sortPopupRef = useRef<HTMLDivElement | null>(null);
  const [filterDropdown, setFilterDropdown] = useState(false);
  const filterButtonRef = useRef<HTMLDivElement | null>(null);
  const filterPopupRef = useRef<HTMLDivElement | null>(null);
  const { setQuery, removeQuery } = useQueryParams();

  //CONSTANT VARIABLES
  const bannerImages = [
    '/images/pharmacy-banner-1.jpg',
    '/images/pharmacy-banner-2.jpg',
    '/images/pharmacy-banner-1.jpg',
    '/images/pharmacy-banner-2.jpg',
  ];

  const sortRanges: SortData[] = [
    { id: 1, value: 'Lowest to Highest' },
    { id: 2, value: 'Highest to Lowest' },
  ];

  //SIDE EFFECT FUNCTIONS
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const updateLimit = (e: MediaQueryListEvent) => {
      setLimit(e.matches ? 10 : 9);
    };
    const mediaQuery = window.matchMedia('(max-width: 1024px)');
    setLimit(mediaQuery.matches ? 10 : 9);
    mediaQuery.addEventListener('change', updateLimit);
    return () => mediaQuery.removeEventListener('change', updateLimit);
  }, []);

  useClickOutside(sortPopupRef, sortButtonRef, () => setSortDropdown(false));
  useClickOutside(filterPopupRef, filterButtonRef, () => setFilterDropdown(false));

  //FUNCTIONS
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

  const categoryId = getCategoryId();
  const {
    products,
    loadingProducts,
    isFetchingProductNextPage,
    fetchProductNextPage,
    productHasNextPage,
    fetchProductPreviousPage,
  } = useGetProductsInfinity({
    categoryId: categoryId?.toString(),
    limit,
    MinListPrice: minPrice ? Number(minPrice) : undefined,
    MaxListPrice: maxPrice ? Number(maxPrice) : undefined,
    offset: offset,
  });

  const handleNextPage = () => {
    if (productHasNextPage) {
      fetchProductNextPage();
      setOffset(offset + limit);
    }
  };

  const handlePrevPage = () => {
    if (offset !== 0) {
      fetchProductPreviousPage();
      setOffset(offset - limit);
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
    if (!products || !products.pages) return [];
  
    return products.pages.reduce((acc, page) => {
      return [...acc, ...page];
    }, []);
  }, [products]);

  const filteredProductItems = useMemo(() => {
    return filteredProducts?.pages.reduce((acc, page) => {
      return [...acc, ...page];
    }, []);
  }, [filteredProducts]);

  return (
    <div id='products' className='lg:pb-10'>
      <div className='bg-white'>
        {/* <div className='mt-6 grid w-full grid-cols-[10fr_2fr]  items-center justify-between gap-2 lg:mt-0 lg:grid-cols-2 lg:gap-4'>
          <ProductSearch loadingProducts={loadingProducts} />
          <div className={'block lg:hidden'}>
            <MobileProductsByPrice loadingProducts={loadingProducts} />
          </div>
          {isShopPage ? (
            <div className='hidden w-full justify-end lg:flex'></div>
          ) : null}
        </div> */}
        <div className='flex w-full items-center justify-between border-b border-t border-[#E7E7E7] border-opacity-50 py-[15px]'>
          <div className='xl:max-w-1024 mx-auto w-full px-4 lg:px-6 xl:w-1024 flex cursor-pointer gap-6 text-sm font-medium text-[#797979] md:text-[15px]'>
            <span>Beauty</span>
            <span>Health</span>
            <span>Sexual Health</span>
            <span>Supermarket</span>
          </div>
          {/* <div className='hidden gap-1 font-medium text-[#797979] md:flex'>
            <span className='flex items-center gap-2'>
              <IconLocation /> Deliver to:
            </span>
            <span className='text-[#1E272F]'>Lagos, Nigeria</span>
          </div> */}
        </div>
        <div className='xl:max-w-1024 mx-auto w-full bg-background pr-4 lg:pr-6 xl:w-1024 grid gap-4 lg:grid-flow-col lg:grid-cols-[1fr_3fr]'>
          <ProductsFilterContainer />
          <div className='pl-[2%] w-full mr-auto'>
            <div className='flex w-full justify-between py-[35px]'>
              <Button
                onClick={() => {
                  removeQuery(['category', 'minPrice', 'maxPrice']);
                }}
                className='hidden w-fit px-0 bg-white text-lg font-medium text-[#FF0028] lg:block'
              >
                Reset Filter
              </Button>
              <div className='block lg:hidden relative w-fit'>
                <div
                  ref={filterButtonRef}
                  onClick={() => setFilterDropdown(!filterDropdown)}
                  className='ld:gap-5 flex h-fit w-fit cursor-pointer items-center gap-2 rounded-full bg-primaryLight px-3 py-1'
                >
                  <IconFilter />
                  <p className='text-sm font-medium text-[#1E272F]'>Filter</p>
                  <IconChevronLeft className='-rotate-90' color='[#1E272F]' />
                </div>
                {filterDropdown && (
                  <div
                    ref={filterPopupRef}
                    className='absolute left-0 top-[35px] z-20 mt-1 flex max-h-[500px] w-[200px] flex-col gap-2 overflow-y-auto rounded-lg border border-gray-200 bg-[#FFFFFF] p-2 shadow-lg'
                  >
                    <div
                      onClick={() => {
                        setFilterDropdown(false);
                      }}
                    >
                      <ProductSortDropdown />
                      <ProductsPriceRange />
                    </div>
                  </div>
                )}
              </div>
              {/* <div className='relative w-fit'>
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
              </div> */}
            </div>
            <ProductsList
              limit={limit}
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
              className={`banner-container mt-16 hidden min-h-[434px] w-full flex-col items-start justify-center rounded-[20px] lg:flex ${
                fade ? 'fade-in' : 'fade-out'
              }`}
            >
              <div className='mx-auto w-[95%] lg:ml-[5%] lg:w-[50%]'>
                <div
                  className={`mb-7 mt-8 text-center text-5xl font-semibold lg:mt-0 lg:text-left ${
                    (currentIndex === 1 || currentIndex === 3) && 'text-white'
                  }`}
                >
                  {currentIndex === 0 || currentIndex === 2
                    ? 'Limited Time offer! Up to 50%'
                    : 'Subscribe to a drug refill'}
                </div>
                <div
                  ref={divRef}
                  className={`mb-7 mr-auto text-center text-xl font-medium lg:text-left ${
                    (currentIndex === 1 || currentIndex === 3) && 'text-white'
                  }`}
                >
                  {currentIndex === 0 || currentIndex === 2
                    ? 'Take control of your health and experience the benefits of Purelife health'
                    : 'Get your medications delivered to you at your preferred intervals.'}
                </div>
                <div className='mt-8 flex w-fit gap-2'>
                  {bannerImages.map((_, index) => (
                    <div
                      key={index}
                      className={`h-[8px] w-[30px] rounded-full ${
                        currentIndex === index ? 'bg-[#1E272F]' : 'bg-[#D9D9D9]'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <h1 className='mt-16 text-xl font-semibold md:text-2xl lg:text-3xl'>
              Find Your Perfect Health and Wellness Solution
            </h1>
            <div className='mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:gap-5'>
              <HotOffersProduct />
              <BestSellers />
            </div>
            <Pagination
              currentPage={currPage}
              totalPages={Math.ceil(productItems?.length / limit)}
              setCurrentPage={setCurrPage}
              handleNextPage={handleNextPage}
              handlePrevPage={handlePrevPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
