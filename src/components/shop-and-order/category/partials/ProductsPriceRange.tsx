import { useQueryParams } from '@/hooks';
import { Button, Radio, RadioGroup } from '@nextui-org/react';
import { FC, useEffect, useState } from 'react';

type ProductsPriceRangeProps = {
  onRefetch: () => void;
};

enum PriceRanges {
  BELOW_1000 = `below 1000`,
  ABOVE_1000 = `1000-2999`,
  ABOVE_3999 = `3000-3999`,
  ABOVE_4999 = `4000-4999`,
  ABOVE_5999 = `5000-9999`,
  ABOVE_9999 = `10000 above`,
}

export const ProductsPriceRange: FC<ProductsPriceRangeProps> = ({
  onRefetch,
}) => {
  const [range, setRange] = useState<string | null>(null);
  const { setQuery, removeQuery } = useQueryParams();

  const handleReset = () => {
    setRange(null);
  };

  const handleSetPrice = () => {
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
        return setQuery({ minPrice: 1, maxPrice: 99999999999999 });
    }
  };

  useEffect(() => {
    if (!range) {
      removeQuery(['minPrice', 'maxPrice']);
      onRefetch();
    } else {
      handleSetPrice();
      onRefetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [range]);

  return (
    <>
      <RadioGroup
        label={'Price'}
        value={range!}
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
          <Button variant='faded' onClick={handleReset}>
            Reset
          </Button>
        </div>
      ) : null}
    </>
  );
};
