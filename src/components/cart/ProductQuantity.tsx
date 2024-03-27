'use client';
import { useCartStore } from '@/hooks';
import { CartType } from '@/services/cart/types';
import { Button } from '@nextui-org/react';
import { FC } from 'react';

type ProductQuantityProps = {
  cartItem: CartType;
};

export const ProductQuantity: FC<ProductQuantityProps> = ({
  cartItem: cartItem,
}) => {
  const { addToCart, removeFromCart } = useCartStore();

  return (
    <div className='flex w-[120px] items-center justify-center gap-2 rounded-full bg-primaryLight'>
      <Button
        isIconOnly
        isDisabled={
          cartItem?.product.quantity === 1 ||
          cartItem?.quantity === 0 ||
          cartItem?.quantity === 1
        }
        onPress={() => removeFromCart(cartItem.id)}
        variant='flat'
        className='w-full rounded-l-full bg-primaryLight text-2xl text-black'
      >
        -
      </Button>
      <p className='text-xl text-black'>{cartItem?.quantity || 0}</p>

      <Button
        isIconOnly
        isDisabled={
          cartItem.quantity === (cartItem?.product.quantity as number)
        }
        onPress={() => addToCart(cartItem)}
        variant='flat'
        className='w-full rounded-r-full bg-primaryLight text-2xl text-black'
      >
        +
      </Button>
    </div>
  );
};
