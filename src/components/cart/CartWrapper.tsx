'use client';
import { useCartStore } from '@/hooks';
import { useStore } from '@/hooks/store';
import { FC } from 'react';
import { CartItem } from './CartItem';
import { OrderSummary } from './OrderSummary';

type CartWrapperProps = {};

export const CartWrapper: FC<CartWrapperProps> = ({}) => {
  const cart = useStore(useCartStore, (state) => state)?.cart;

  return (
    <>
      <div className='my-6 grid min-h-[500px] gap-6'>
        {cart &&
          cart.length > 0 &&
          cart.map((product, index) => (
            <CartItem product={product} key={index} />
          ))}

        {cart && cart.length > 0 ? (
          <div className='mt-6 lg:flex lg:justify-end'>
            <OrderSummary />
          </div>
        ) : null}

        {cart && cart.length === 0 ? (
          <div className='my-20 flex flex-col gap-3 text-center'>
            <p className='text-lg font-light text-content'>
              Please add items to your cart to continue
            </p>
          </div>
        ) : null}
      </div>
    </>
  );
};
