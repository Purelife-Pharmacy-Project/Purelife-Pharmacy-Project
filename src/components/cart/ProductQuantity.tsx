'use client';
import { useCartStore } from '@/hooks';
import { CartType } from '@/services/cart/types';
import { Button } from '@nextui-org/react';
import { FC } from 'react';

type ProductQuantityProps = {
  cartItem: CartType;
};

export const ProductQuantity: FC<ProductQuantityProps> = ({
  cartItem: product,
}) => {
  const { increaseQuantity, decreaseQuantity } = useCartStore();

  return (
    <div className='flex w-[120px] items-center justify-center gap-2 rounded-full bg-primaryLight'>
      <Button
        isIconOnly
        isDisabled={
          product?.unitsLeft === 0 || product?.quantity > product?.unitsLeft
        }
        onClick={() => increaseQuantity(product?.id)}
        variant='flat'
        className='w-full rounded-l-full bg-primaryLight text-2xl text-black'
      >
        +
      </Button>

      <p className='text-xl text-black'>{product?.quantity}</p>

      <Button
        isIconOnly
        isDisabled={product?.quantity === 1}
        onClick={() => decreaseQuantity(product?.id)}
        variant='flat'
        className='w-full rounded-r-full bg-primaryLight text-2xl text-black'
      >
        -
      </Button>
    </div>
  );
};
