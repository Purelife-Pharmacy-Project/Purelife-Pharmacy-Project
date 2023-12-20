import { Button, Radio, RadioGroup } from '@nextui-org/react';
import { FC, useState } from 'react';

type ProductsPriceListProps = {
  categoryId?: string;
};

enum PriceVariants {
  BELOW_1000 = `below 1000`,
  ABOVE_1000 = `1000-2999`,
  ABOVE_3999 = `3000-3999`,
  ABOVE_4999 = `4000-4999`,
  ABOVE_5999 = `5000-9999`,
  ABOVE_9999 = `10000 above`,
}

export const ProductsPriceList: FC<ProductsPriceListProps> = () => {
  const [price, setPrice] = useState<string | null>(null);

  const handleReset = () => {
    setPrice(null);
  };

  return (
    <>
      <RadioGroup
        label={'Price'}
        value={price!}
        onValueChange={(value) => setPrice(value as string)}
        classNames={{
          label: 'font-semibold text-header-100',
        }}
      >
        {Object.keys(PriceVariants).map((variant) => {
          const priceVariant =
            PriceVariants[variant as keyof typeof PriceVariants];
          return (
            <Radio key={variant} className='capitalize' value={variant}>
              {priceVariant}
            </Radio>
          );
        })}
      </RadioGroup>
      {price ? (
        <div className='flex justify-end'>
          <Button variant='faded' onClick={handleReset}>
            Reset
          </Button>
        </div>
      ) : null}
    </>
  );
};
