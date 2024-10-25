'use client';

import { Section } from '@/components/home/Section';
import { useGetProductsInfinity } from '@/hooks';
import React, { FC, useMemo, useRef, useState } from 'react';
import { LabTestsSkeleton } from '../book-lab-test/skeleton/LabTestsSkeleton';
import InfiniteScroll from 'react-infinite-scroll-component';
import { LabTestCard } from '@/components/book-lab-test/LabTestCard';
import { useClickOutside } from '@/helpers/utils';
import { Pagination } from '../pagination';
import ReactSlider from 'react-slider';
import { IconChevronLeft } from '../icons/IconChevronLeft';
import { Button, Input } from '@nextui-org/react';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { inputBorderedDefault, inputDefault } from '@/theme';
import { QualityHomeBanner } from '../quality-home-banner';

const limit = 9;

type VaccinationProductsProps = {};
interface RangeMetric {
  id: number;
  value: string;
}

interface PriceRangeData {
  min?: string;
  max?: string;
}

const initPriceRangeData: PriceRangeData = {
  min: '0',
  max: '100000',
};

const priceRangeSchema = z.object({
  min: z.string().regex(/^\d+$/, { message: 'Must be a valid number' }),
  max: z.string().regex(/^\d+$/, { message: 'Must be a valid number' }),
});

export const VaccinationProducts: FC<VaccinationProductsProps> = () => {
  const [tempRange, setTempRange] = useState<PriceRangeData>({
    min: '0',
    max: '100000',
  });
  const {
    register,
    setValue,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<PriceRangeData>({
    defaultValues: tempRange,
    resolver: zodResolver(priceRangeSchema),
  });
  const [currPage, setCurrPage] = useState(1);

  const [range, setRange] = useState<PriceRangeData>({
    min: '0',
    max: '100000',
  });
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
    MinListPrice: Number(range.min),
    MaxListPrice: Number(range.max),
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
  const [priceRange, setPriceRange] = useState('Price Range');
  const [priceDropdown, setPriceDropdown] = useState(false);
  const priceButtonRef = useRef<HTMLDivElement | null>(null);
  const pricePopupRef = useRef<HTMLDivElement | null>(null);
  const sortRanges: RangeMetric[] = [
    { id: 1, value: 'Lowest to Highest' },
    { id: 2, value: 'Highest to Lowest' },
  ];
  const [sort, setSort] = useState('Sort By');
  const [sortDropdown, setSortDropdown] = useState(false);
  const sortButtonRef = useRef<HTMLDivElement | null>(null);
  const sortPopupRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(sortPopupRef, sortButtonRef, () => setSortDropdown(false));
  useClickOutside(pricePopupRef, priceButtonRef, () => setPriceDropdown(false));
  const [focusedThumb, setFocusedThumb] = useState<number | null>(null);

  const onSubmit: SubmitHandler<PriceRangeData> = (data) => {
    setRange(data);
    setPriceDropdown(false);
    console.log(data);
  };
  return (
    <div id='scroll' className='min-h-fit w-full scroll-mt-24'>
      <div className=' lg:justify-center'>
        <Section className='w-full bg-transparent'>
          <div className='mb-10 w-full'>
            <div className='mt-3 flex justify-between'>
              <div className='flex gap-5'>
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
                      className='max-h-54 absolute left-0 top-[35px] z-20 mt-1 flex w-[250px] flex-col gap-2 overflow-y-auto rounded-lg border border-gray-200 bg-[#FFFFFF] p-4 shadow-lg'
                    >
                      <ReactSlider
                        className='relative mt-2 h-0.5 rounded-full bg-gray-200'
                        trackClassName='bg-gray-800 h-0.5 rounded-full example-track'
                        defaultValue={[0, 100000]}
                        value={[watch('min'), watch('max')]}
                        min={0}
                        max={100000}
                        ariaLabel={['Lower thumb', 'Upper thumb']}
                        pearling
                        step={1000}
                        minDistance={10000}
                        renderThumb={(props, state) => (
                          <div
                            {...props}
                            className={`-mt-[7px] flex cursor-pointer items-center justify-center focus:outline-none ${
                              state.index === 0 && ''
                            } ${state.index === 1 && ''}
                              ${
                                focusedThumb === state.index ? 'relative' : ''
                              }`}
                            onMouseEnter={() => setFocusedThumb(state.index)}
                            onMouseLeave={() => setFocusedThumb(null)}
                          >
                            <div
                              className={`h-4 w-4 rounded-full border-2 border-gray-800 ${
                                focusedThumb === state.index
                                  ? 'bg-gray-300'
                                  : 'bg-white'
                              }`}
                            ></div>
                            <div
                              className={`none ${
                                focusedThumb === state.index &&
                                'absolute h-10 w-10 rounded-full border-2 border-gray-400'
                              }`}
                            ></div>
                          </div>
                        )}
                        onChange={(value: any) => {
                          setTempRange({ min: value[0], max: value[1] });
                          setValue('min', value[0].toString());
                          setValue('max', value[1].toString());
                          console.log('max: ', watch('max'));
                        }}
                      />
                      <div className='mt-5 grid grid-cols-[1fr_0.2fr_1fr] gap-2 text-sm font-medium text-gray-400'>
                        <Input
                          {...register('min')}
                          errorMessage={errors.min?.message}
                          isInvalid={!!errors.min}
                          className='bg-white'
                          type='string'
                          name='min'
                          value={watch('min')}
                          classNames={inputBorderedDefault}
                        ></Input>
                        <span className='my-auto text-center'>-</span>
                        <Input
                          {...register('max')}
                          errorMessage={errors.max?.message}
                          isInvalid={!!errors.max}
                          className=' bg-white'
                          type='string'
                          name='max'
                          value={watch('max')}
                          classNames={inputBorderedDefault}
                        ></Input>
                      </div>
                      <div
                        onClick={() => {
                          setPriceDropdown(false);
                        }}
                        className='mt-5 grid grid-cols-[1fr_1fr] gap-2 text-sm font-medium text-gray-400'
                      >
                        <Button
                          onClick={() => {
                            setPriceDropdown(false);
                            setValue('min', '0');
                            setValue('max', '100000');
                          }}
                          className='rounded-[6px] border-1 border-[#1E272F] bg-transparent px-3 py-2 text-center font-medium'
                        >
                          RESET
                        </Button>
                        <Button
                          onClick={handleSubmit(onSubmit)}
                          className='rounded-[6px] border-2 border-primary bg-primary px-3 py-2 text-center font-medium text-white'
                        >
                          SAVE
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
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
          </div>

          <h3 className='mb-5 text-3xl text-[#1E272F]'>Get Your Vaccines!</h3>
          {loadingVaccines ? <LabTestsSkeleton /> : null}
          {vaccines && vaccines.length > 0 ? (
            <div className='grid w-full gap-6'>
              <InfiniteScroll
                next={fetchProductNextPage}
                hasMore={productHasNextPage}
                loader={<LabTestsSkeleton />}
                dataLength={vaccines?.length || 0}
                className='grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'
              >
                {/* Display the first 6 items */}
                {vaccines.slice(0, 6).map((product) => (
                  <LabTestCard
                    product={product}
                    key={product.id}
                    baseUrl='/telehealth/get-vaccination'
                  />
                ))}
              </InfiniteScroll>
            </div>
          ) : null}
        </Section>
        <div className='relative my-10 w-screen'>
          <QualityHomeBanner/>
        </div>
        <Section className='w-full bg-transparent'>
          {vaccines && vaccines.length > 6 ? (
            <div className='grid w-full gap-6'>
              <InfiniteScroll
                next={fetchProductNextPage}
                hasMore={productHasNextPage}
                loader={<LabTestsSkeleton />}
                dataLength={vaccines?.length || 0}
                className='grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'
              >
                {/* Display the remaining items */}
                {vaccines.slice(6).map((product) => (
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
