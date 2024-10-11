'use client';

import { Section } from '@/components/home/Section';
import { useGetProductsInfinity } from '@/hooks';
import React, { FC, useMemo, useRef, useState } from 'react';
import { LabTestsSkeleton } from '../book-lab-test/skeleton/LabTestsSkeleton';
import InfiniteScroll from 'react-infinite-scroll-component';
import { LabTestCard } from '@/components/book-lab-test/LabTestCard';
import { IconChevronLeft } from '../icons/IconChevronLeft';
import { IconFilters } from '../icons/IconFilters';
import { useClickOutside } from '@/helpers/utils';
import { Pagination } from '../pagination';

const limit = 9;

type VaccinationProductsProps = {};
interface RangeMetric {
  id: number;
  value: string;
}

interface PriceRangeMetric {
  id: number;
  min: number;
  max: number;
}

export const VaccinationProducts: FC<VaccinationProductsProps> = () => {
  const [currPage, setCurrPage] = useState(1);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [page, setPage] = useState(currPage);
  const {
    products,
    loadingProducts: loadingVaccines,
    fetchProductNextPage,
    fetchProductPreviousPage,
    productHasNextPage,
    productHasPreviousPage,
  } = useGetProductsInfinity({
    categoryId: process.env.NEXT_PUBLIC_VACCINE_ID,
    limit: 10,
    MinListPrice: min,
    MaxListPrice: max,
  });

  const handleNextPage = () => {
    if (productHasNextPage) {
      fetchProductNextPage();
      setCurrPage(currPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (productHasPreviousPage) {
      if (currPage > 1) {
        fetchProductPreviousPage();
        setCurrPage(currPage - 1);
      }
    }
  };

  const vaccines = useMemo(() => {
    return products?.pages.reduce((acc, page) => {
      return [...acc, ...page];
    }, []);
  }, [products]);

  const vaccineTypeRanges: RangeMetric[] = [
    { id: 1, value: 'Naturals' },
    { id: 2, value: 'Eye' },
    { id: 2, value: 'Body' },
  ];
  const [vaccineType, setVaccineType] = useState('Vaccine Type');
  const [vaccineTypeDropdown, setVaccineTypeDropdown] = useState(false);
  const vaccineTypeButtonRef = useRef<HTMLDivElement | null>(null);
  const vaccineTypePopupRef = useRef<HTMLDivElement | null>(null);

  const priceRanges: PriceRangeMetric[] = [
    { id: 1, min: 1000, max: 10000 },
    { id: 2, min: 10000, max: 20000 },
    { id: 3, min: 20000, max: 30000 },
    { id: 4, min: 30000, max: 40000 },
    { id: 5, min: 40000, max: 50000 },
    { id: 5, min: 50000, max: 100000 },
  ];
  const [priceRange, setPriceRange] = useState('Price Range');
  const [priceDropdown, setPriceDropdown] = useState(false);
  const priceButtonRef = useRef<HTMLDivElement | null>(null);
  const pricePopupRef = useRef<HTMLDivElement | null>(null);

  const filterRanges: RangeMetric[] = [
    { id: 1, value: 'Low' },
    { id: 2, value: 'Medium' },
    { id: 3, value: 'High' },
  ];
  const [filter, setFilter] = useState('Filters');
  const [filterDropdown, setFilterDropdown] = useState(false);
  const filterButtonRef = useRef<HTMLDivElement | null>(null);
  const filterPopupRef = useRef<HTMLDivElement | null>(null);

  const sortRanges: RangeMetric[] = [
    { id: 1, value: 'Low' },
    { id: 2, value: 'Medium' },
    { id: 3, value: 'High' },
  ];
  const [sort, setSort] = useState('Sort By');
  const [sortDropdown, setSortDropdown] = useState(false);
  const sortButtonRef = useRef<HTMLDivElement | null>(null);
  const sortPopupRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(sortPopupRef, sortButtonRef, () => setSortDropdown(false));
  useClickOutside(pricePopupRef, priceButtonRef, () => setPriceDropdown(false));
  useClickOutside(vaccineTypePopupRef, vaccineTypeButtonRef, () =>
    setVaccineTypeDropdown(false)
  );
  useClickOutside(filterPopupRef, filterButtonRef, () =>
    setFilterDropdown(false)
  );
  return (
    <div id='scroll' className='min-h-fit w-full scroll-mt-24'>
      <div className=' lg:justify-center'>
        <Section className='bg-transparent w-full'>
           <div className='mb-10 w-full'>
            <div className='flex justify-between'>
              <div className='flex gap-5'>
                {/* <div className='relative w-fit'>
                  <div
                    ref={vaccineTypeButtonRef}
                    onClick={() => setVaccineTypeDropdown(!vaccineTypeDropdown)}
                    className='ld:gap-5 flex h-fit w-fit cursor-pointer items-center gap-2 rounded-[100px] bg-primaryLight px-4 py-1'
                  >
                    <p className='text-sm font-medium text-[#797979]'>
                      {vaccineType}
                    </p>
                    <IconChevronLeft className='-rotate-90' color='[#5A5A5A]' />
                  </div>
                  {vaccineTypeDropdown && (
                    <div
                      ref={vaccineTypePopupRef}
                      className='absolute right-0 top-[35px] z-[99] mt-1 flex max-h-48 w-[150px] flex-col gap-2 overflow-y-auto rounded-lg border border-gray-200 bg-[#FFFFFF] p-2 shadow-lg'
                    >
                      {vaccineTypeRanges.map((range) => (
                        <div
                          key={range.id}
                          className='flex h-fit cursor-pointer items-center justify-between rounded-[5px] bg-primaryLight p-3 py-1 pl-2 hover:bg-gray-200'
                          onClick={() => {
                            setVaccineType(range.value);
                            setVaccineTypeDropdown(false);
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
                <div className='relative w-fit'>
                  <div
                    ref={priceButtonRef}
                    onClick={() => setPriceDropdown(!priceDropdown)}
                    className='ld:gap-5 flex h-fit w-fit cursor-pointer items-center gap-2 rounded-[100px] bg-primaryLight px-4 py-1'
                  >
                    <p className='text-sm font-medium text-[#797979]'>
                      {priceRange}
                    </p>
                    <IconChevronLeft className='-rotate-90' color='[#5A5A5A]' />
                  </div>
                  {priceDropdown && (
                    <div
                      ref={pricePopupRef}
                      className='absolute left-0 top-[35px] z-20 mt-1 flex max-h-54 w-[180px] flex-col gap-2 overflow-y-auto rounded-lg border border-gray-200 bg-[#FFFFFF] p-2 shadow-lg'
                    >
                      {priceRanges.map((range) => (
                        <div
                          key={range.id}
                          className='flex h-fit cursor-pointer items-center justify-between rounded-[5px] bg-primaryLight px-2 py-1 hover:bg-gray-200'
                          onClick={() => {
                            setMin(range.min);
                            setMax(range.max);
                            setPriceDropdown(false);
                          }}
                        >
                          <span className='grid grid-cols-[1fr_0.2fr_1fr] w-full cursor-pointer text-sm font-medium text-gray-600'>
                            <span className=''>₦{range.min}</span>
                            <span className='text-center'>-</span>
                            <span className='text-right'>₦{range.max}</span>
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {/* <div className='relative w-fit'>
                  <div
                    ref={filterButtonRef}
                    onClick={() => setFilterDropdown(!filterDropdown)}
                    className='ld:gap-5 flex h-fit w-fit cursor-pointer items-center gap-2 rounded-[100px] bg-primaryLight px-4 py-1'
                  >
                    <IconFilters color='#797979' />
                    <p className='text-sm font-medium text-[#797979]'>
                      {filter}
                    </p>
                    <IconChevronLeft className='-rotate-90' color='[#5A5A5A]' />
                  </div>
                  {filterDropdown && (
                    <div
                      ref={filterPopupRef}
                      className='absolute right-0 top-[35px] z-20 mt-1 flex max-h-48 w-[150px] flex-col gap-2 overflow-y-auto rounded-lg border border-gray-200 bg-[#FFFFFF] p-2 shadow-lg'
                    >
                      {filterRanges.map((range) => (
                        <div
                          key={range.id}
                          className='flex h-fit cursor-pointer items-center justify-between rounded-[5px] bg-primaryLight p-3 py-1 pl-2 hover:bg-gray-200'
                          onClick={() => {
                            setFilter(range.value);
                            setFilterDropdown(false);
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

              {/* <div className='relative hidden w-fit sm:block'>
                <div
                  ref={sortButtonRef}
                  onClick={() => setSortDropdown(!sortDropdown)}
                  className='ld:gap-5 flex h-fit w-fit cursor-pointer items-center gap-2 rounded-[100px] border border-[#1E272F] bg-primaryLight px-4 py-1'
                >
                  <p className='text-sm font-medium text-[#1E272F]'>{sort}</p>
                  <IconChevronLeft className='-rotate-90' color='[#1E272F]' />
                </div>
                {sortDropdown && (
                  <div
                    ref={sortPopupRef}
                    className='absolute right-0 top-[35px] z-20 mt-1 flex max-h-48 w-[150px] flex-col gap-2 overflow-y-auto rounded-lg border border-gray-200 bg-[#FFFFFF] p-2 shadow-lg'
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
          </div> 

          <h3 className='mb-5 text-3xl text-[#1E272F]'>Get Your Vaccines!</h3>
          {loadingVaccines ? <LabTestsSkeleton /> : null}
          {vaccines && vaccines?.length > 0 ? (
            <div className='grid w-full gap-6'>
              <InfiniteScroll
                next={fetchProductNextPage}
                hasMore={productHasNextPage}
                loader={<LabTestsSkeleton />}
                dataLength={vaccines?.length || 0}
                className='grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'
              >
                {vaccines?.map((product) => (
                  <LabTestCard
                    product={product}
                    key={product.id}
                    baseUrl='/telehealth/get-vaccination'
                  />
                ))}
              </InfiniteScroll>
              <Pagination
                currentPage={currPage}
                setCurrentPage={setCurrPage}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                totalPages={Math.ceil(vaccines?.length / limit)}
              />
            </div>
          ) : null}

          {!loadingVaccines && vaccines?.length === 0 ? (
            <div className='grid w-full place-content-center'>
              <p className='text-center font-medium'>
                No Vaccines Yet. Try again
              </p>
            </div>
          ) : null}
        </Section>
      </div>
    </div>
  );
};


interface ShowHideProps {
  head: string;
  body: any;
}

const ShowHide: React.FC<ShowHideProps> = ({ head, body }) => {
  const [show, setShow] = useState(true);
  return (
    <div>
    </div>
  );
};