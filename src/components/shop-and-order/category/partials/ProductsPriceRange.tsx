'use client';
import { IconChevronLeft } from '@/components/icons/IconChevronLeft';
import { useQueryParams } from '@/hooks';
import { inputBorderedDefault, inputBorderedGray } from '@/theme';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@nextui-org/react';
import { FC, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import ReactSlider from 'react-slider';

type ProductsPriceRangeProps = {};

interface PriceRangeData {
  min?: string;
  max?: string;
}

const priceRangeSchema = z.object({
  min: z.string().regex(/^\d+$/, { message: 'Must be a valid number' }),
  max: z.string().regex(/^\d+$/, { message: 'Must be a valid number' }),
});

export const ProductsPriceRange: FC<ProductsPriceRangeProps> = ({}) => {
  const [focusedThumb, setFocusedThumb] = useState<number | null>(null);
  const [tempRange, setTempRange] = useState<PriceRangeData>({
    min: '0',
    max: '100000',
  });
  const {
    register,
      setValue,
      reset,
    watch,
    formState: { errors },
  } = useForm<PriceRangeData>({
    defaultValues: tempRange,
    resolver: zodResolver(priceRangeSchema),
  });
  const { setQuery, removeQuery } = useQueryParams();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<string>('0');
  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight + 20}px`);
    } else {
      setHeight('0');
    }
  }, [isOpen]);
  return (
    <div className='relative w-fit'>
      <div
        className='flex cursor-pointer items-center justify-between'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className='mb-3 font-semibold text-header-100'>Prices</span>
        {isOpen ? (
          <div className='-rotate-90'>
            <IconChevronLeft />
          </div>
        ) : (
          <div className='rotate-90'>
            <IconChevronLeft />
          </div>
        )}
      </div>
      <div
        ref={contentRef}
        style={{
          height,
          overflow: 'hidden',
          transition: 'height 0.3s ease-in-out',
        }}
        className=''
      >
        <ReactSlider
          className='relative mt-6 h-0.5 rounded-full bg-gray-200'
          defaultValue={[0, 100000] as any}
          value={[watch('min'), watch('max')] as any}
          min={0}
          max={100000}
          ariaLabel={['Lower thumb', 'Upper thumb']}
          pearling
          step={1000}
          minDistance={10000}
          renderThumb={(props: any, state: any) => (
            <div
              {...props}
              className={`-mt-[5px] flex cursor-pointer items-center justify-center focus:outline-none ${
                state.index === 0 && ''
              } ${state.index === 1 && ''}
              ${
                focusedThumb === state.index ? 'relative' : ''
              }`}
              onMouseEnter={() => setFocusedThumb(state.index)}
              onMouseLeave={() => setFocusedThumb(null)}
            >
              <div
                className={`h-4 w-4 rounded-full bg-[#36CB60] ${
                  focusedThumb === state.index ? 'bg-gray-300' : 'bg-white'
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
          renderTrack={(props, state) => (
            <div
              {...props}
              className={`h-1.5 rounded-full ${
                state.index === 0
                  ? 'bg-gray-200'
                  : state.index === 1
                  ? 'bg-[#36CB60]'
                  : 'bg-gray-200'
              }`}
            />
          )}
          onChange={(value: any) => {
            setTempRange({ min: value[0].toString(), max: value[1].toString() });
            setValue('min', value[0].toString());
            setValue('max', value[1].toString());
            setQuery({ minPrice: value[0], maxPrice: value[1] })
            console.log('max: ', watch('max'));
          }}
        />
        <div className='mt-5 grid grid-cols-[1fr_0.2fr_1fr] gap-2 text-sm font-medium text-gray-400'>
          <Input
            {...register('min')}
            errorMessage={errors.min?.message}
            isInvalid={!!errors.min}
            className='bg-white text-[#5A5A5A] font-medium'
            type='string'
            name='min'
            value={watch('min')}
            classNames={inputBorderedGray}
          ></Input>
          <span className='ml-2 my-auto w-[9px] h-[2px] bg-[#797979]'></span>
          <Input
            {...register('max')}
            errorMessage={errors.max?.message}
            isInvalid={!!errors.max}
            className='bg-white text-[#5A5A5A] font-medium'
            type='string'
            name='max'
            value={watch('max')}
            classNames={inputBorderedGray}
          ></Input>
        </div>
      </div>
    </div>
  );
};
