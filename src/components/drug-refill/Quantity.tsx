import { Button } from '@nextui-org/react';
import { FC } from 'react';

type QuantityProps = {
  quantity: number;
  totalQuantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
};

export const Quantity: FC<QuantityProps> = ({
  totalQuantity,
  quantity,
  increaseQuantity,
  decreaseQuantity,
}) => {
  return (
    <div className='flex w-[120px] items-center justify-center gap-2 rounded-full bg-primaryLight'>
      <Button
        isIconOnly
        isDisabled={quantity === 1}
        onPress={() => decreaseQuantity()}
        variant='flat'
        className='w-full rounded-l-full bg-primaryLight text-2xl text-black'
      >
        -
      </Button>
      <p className='text-xl text-black'>{quantity || 0}</p>

      <Button
        isIconOnly
        isDisabled={quantity === 0 || quantity > totalQuantity}
        onPress={() => increaseQuantity()}
        variant='flat'
        className='w-full rounded-r-full bg-primaryLight text-2xl text-black'
      >
        +
      </Button>
    </div>
  );
};
