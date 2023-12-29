'use client';
import { useCartStore } from '@/hooks';
import { FC } from 'react';
import { CartItem } from './CartItem';
import { OrderSummary } from './OrderSummary';

type CartWrapperProps = {};

export const CartWrapper: FC<CartWrapperProps> = ({}) => {
  const { cart } = useCartStore();

  return (
    <>
      <div className='my-6 grid min-h-[500px] gap-6'>
        {cart?.map((product, index) => (
          <CartItem product={product} key={index} />
        ))}

        {cart?.length > 0 ? (
          <div className='mt-6 lg:flex lg:justify-end'>
            <OrderSummary />
          </div>
        ) : null}
      </div>
    </>
  );
};
