'use client';
import { useQueryParams } from '@/hooks';
import { Button, Radio, RadioGroup } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

type ProductsPriceRangeProps = {
  onRefetch: () => void;
  loading?: boolean;
};

enum PriceRanges {
  BELOW_1000 = `below ₦1000`,
  ABOVE_1000 = `₦1000 - ₦2999`,
  ABOVE_3999 = `₦3000 - ₦3999`,
  ABOVE_4999 = `₦4000 - ₦4999`,
  ABOVE_5999 = `₦5000 - ₦9999`,
  ABOVE_9999 = `₦10000 above`,
}

export const ProductsPriceRange: FC<ProductsPriceRangeProps> = ({
  onRefetch,
  loading,
}) => {
  const [range, setRange] = useState<string | null>(null);
  const { setQuery, removeQuery } = useQueryParams();

  const urlParams = useSearchParams();

  const maxPrice = urlParams.get('maxPrice');
  const minPrice = urlParams.get('minPrice');

  useEffect(() => {
    if (maxPrice && minPrice) {
      const priceRange = `${minPrice}-${maxPrice}`;

      switch (priceRange) {
        case '1-999':
          return setRange(PriceRanges.BELOW_1000);
        case '1000-2999':
          return setRange(PriceRanges.ABOVE_1000);
        case '3000-3999':
          return setRange(PriceRanges.ABOVE_3999);
        case '4000-4999':
          return setRange(PriceRanges.ABOVE_4999);
        case '5000-9999':
          return setRange(PriceRanges.ABOVE_5999);
        case '10000-99999999999999':
          return setRange(PriceRanges.ABOVE_9999);
        default:
          return setRange(PriceRanges.BELOW_1000);
      }
    } else {
      handleReset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleReset = () => {
    setRange(null);
    removeQuery(['minPrice', 'maxPrice']);
  };

  const handleSetPrice = () => {
    if (!range) return;
    switch (range) {
      case PriceRanges.BELOW_1000:
        return setQuery({ minPrice: 1, maxPrice: 999 });
      case PriceRanges.ABOVE_1000:
        return setQuery({ minPrice: 1000, maxPrice: 2999 });
      case PriceRanges.ABOVE_3999:
        return setQuery({ minPrice: 3000, maxPrice: 3999 });
      case PriceRanges.ABOVE_4999:
        return setQuery({ minPrice: 4000, maxPrice: 4999 });
      case PriceRanges.ABOVE_5999:
        return setQuery({ minPrice: 5000, maxPrice: 9999 });
      case PriceRanges.ABOVE_9999:
        return setQuery({ minPrice: 10000, maxPrice: 99999999999999 });
      default:
        return setQuery({ minPrice: 1, maxPrice: 999 });
    }
  };

  useEffect(() => {
    if (range) {
      handleSetPrice();
      onRefetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [range]);

  return (
    <section>
      <RadioGroup
        label={'Price'}
        value={range!}
        isDisabled={loading}
        onValueChange={(value) => setRange(value as string)}
        classNames={{
          label: 'font-semibold text-header-100',
        }}
      >
        {Object.keys(PriceRanges).map((variant) => {
          const priceVariant = PriceRanges[variant as keyof typeof PriceRanges];
          return (
            <Radio key={variant} className='capitalize' value={priceVariant}>
              {priceVariant}
            </Radio>
          );
        })}
      </RadioGroup>
      {range ? (
        <div className='flex justify-end'>
          <Button size='sm' variant='faded' onPress={handleReset}>
            Reset
          </Button>
        </div>
      ) : null}
    </section>
  );
};
