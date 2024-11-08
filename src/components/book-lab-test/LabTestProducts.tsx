'use client';
import { useGetProductsInfinity, useQueryParams } from '@/hooks';
import { Button, Skeleton, Input } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';
import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { Section } from '../home/Section';
import { LabTestsSkeleton } from './skeleton/LabTestsSkeleton';
import InfiniteScroll from 'react-infinite-scroll-component';
import clsx from 'clsx';
import { LabTestCard } from '@/components/book-lab-test/LabTestCard';
import { useClickOutside } from '@/helpers/utils';
import { Pagination } from '../pagination';
import ReactSlider from 'react-slider';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { inputBorderedDefault, inputDefault } from '@/theme';
import { IconChevronLeft } from '../icons/IconChevronLeft';

const limit = 9;

type LabTestProductsProps = {};
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

export const LabTestProducts: FC<LabTestProductsProps> = () => {
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
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || undefined;
  const [currPage, setCurrPage] = useState(1);
  const { setQuery, removeQuery } = useQueryParams();
  const [range, setRange] = useState<PriceRangeData>({
    min: '0',
    max: '100000',
  });
  const [offset, setOffset] = useState(0);
  const {
    products,
    loadingProducts: loadingLabTests,
    fetchProductNextPage,
    productHasNextPage,
    productHasPreviousPage,
    fetchProductPreviousPage,
  } = useGetProductsInfinity({
    categoryId: category || '18',
    limit: limit,
    MinListPrice: Number(range.min),
    MaxListPrice: Number(range.max),
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
  const labTests = useMemo(() => {
    return products?.pages.reduce((acc, page) => {
      return [...acc, ...page];
    }, []);
  }, [products]);

  // Filter out categories that are not related to lab tests
  const labTestCategories = [
    { id: 18, name: 'General' },
    { id: 19, name: "Men's Health" },
    { id: 20, name: "Women's Health" },
    { id: 21, name: 'Sexual Health' },
  ];

  const handleFilterByCategory = (categoryId: string | number) => {
    if (categoryId === 0 || categoryId === '0') {
      return removeQuery(['category']);
    } else {
      setQuery({ category: categoryId });
    }
  };

  useEffect(() => {
    handleFilterByCategory(18);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const [testType, setTestType] = useState('Test Type');
  const [testTypeDropdown, setTestTypeDropdown] = useState(false);
  const testTypeButtonRef = useRef<HTMLDivElement | null>(null);
  const testTypePopupRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(testTypePopupRef, testTypeButtonRef, () =>
    setTestTypeDropdown(false)
  );
  useClickOutside(sortPopupRef, sortButtonRef, () => setSortDropdown(false));
  useClickOutside(pricePopupRef, priceButtonRef, () => setPriceDropdown(false));
  const [focusedThumb, setFocusedThumb] = useState<number | null>(null);

  const onSubmit: SubmitHandler<PriceRangeData> = (data) => {
    setRange(data);
    setPriceDropdown(false);
    console.log(data);
  };

  return (
    <>
      <Section className='mb-10 w-full'>
        <div className='mt-3 flex justify-between'>
          <div className='flex gap-5'>
            <div className='relative hidden w-fit sm:block'>
              <div
                ref={testTypeButtonRef}
                onClick={() => setTestTypeDropdown(!testTypeDropdown)}
                className='ld:gap-5 flex h-fit w-fit cursor-pointer items-center gap-2 rounded-[100px] bg-primaryLight px-4 py-1'
              >
                <p className='text-sm font-medium text-[#797979]'>{testType}</p>
                <IconChevronLeft className='-rotate-90' color='[#1E272F]' />
              </div>
              {testTypeDropdown && (
                <div
                  ref={testTypePopupRef}
                  className='max-h-54 absolute left-0 top-[35px] z-20 mt-1 flex w-[250px] flex-col gap-2 overflow-y-auto rounded-lg border border-gray-200 bg-[#FFFFFF] p-4 shadow-lg'
                >
                  {labTestCategories.map((range) => (
                    <div
                      key={range.id}
                      className='flex h-fit cursor-pointer items-center justify-between rounded-[5px] bg-primaryLight p-3 py-1 pl-2 hover:bg-gray-200'
                      onClick={() => {
                        setSort(range.name);
                        setSortDropdown(false);
                      }}
                    >
                      <Button
                        isDisabled={
                          loadingLabTests ||
                          (labTests && labTests?.length === 0)
                        }
                        onClick={() => {
                          handleFilterByCategory(String(range.id));
                          setTestTypeDropdown(!testTypeDropdown);
                        }}
                        className='cursor-pointer bg-transparent py-0 text-sm font-medium text-gray-600'
                      >
                        {range.name}
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
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
                    defaultValue={[0, 100000] as any}
                    value={[watch('min'), watch('max')] as any}
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
          <div></div>
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
      </Section>
      <Section className='bg-transparent'>
        {loadingLabTests ? <LabTestsSkeleton /> : null}
        <h3 className='mb-5 text-3xl text-[#1E272F]'>Get Your Top Tests!</h3>
        {labTests && labTests?.length > 0 && !loadingLabTests ? (
          <div className='grid w-full gap-6'>
            <InfiniteScroll
              next={fetchProductNextPage}
              hasMore={productHasNextPage}
              loader={
                <>
                  {Array(6)
                    .fill(0)
                    .map((_, index) => (
                      <Skeleton
                        key={index}
                        className={
                          'h-[188px] w-full rounded-xl bg-white sm:w-[350px] lg:w-[384px]'
                        }
                      ></Skeleton>
                    ))}
                </>
              }
              dataLength={labTests?.length || 0}
              className='relative grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'
            >
              {labTests
                .slice(0, 9)
                ?.map((test, index) => (
                  <LabTestCard
                    product={test}
                    key={index}
                    baseUrl='/telehealth/book-lab-test'
                  />
                ))}
            </InfiniteScroll>
            <Pagination
              currentPage={currPage}
              setCurrentPage={setCurrPage}
              handleNextPage={handleNextPage}
              handlePrevPage={handlePrevPage}
              totalPages={Math.ceil(labTests?.length / limit)}
            />
          </div>
        ) : null}

        {!loadingLabTests && labTests?.length === 0 ? (
          <div className='grid w-full place-content-center'>
            <p className='text-center font-medium'>
              No Lab Tests Yet. Try again
            </p>
          </div>
        ) : null}
      </Section>
    </>
  );
};
