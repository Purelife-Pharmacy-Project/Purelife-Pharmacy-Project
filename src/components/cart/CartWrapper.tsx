'use client';

import { useGetCart } from '@/hooks';
import { Spinner } from '@nextui-org/react';
import { FC } from 'react';
import { CartItem } from './CartItem';
import { OrderSummary } from './OrderSummary';

type CartWrapperProps = {};

export const CartWrapper: FC<CartWrapperProps> = ({}) => {
  const { cart, loadingCart } = useGetCart();

  return (
    <>
      {loadingCart ? (
        <div className='flex w-full items-center justify-center'>
          <Spinner color='primary' />
        </div>
      ) : (
        <div className='my-6 grid gap-6'>
          {cart?.map((product, index) => (
            <CartItem product={product} key={index} />
          ))}

          <div className='mt-6 lg:flex lg:justify-end'>
            <OrderSummary />
          </div>
        </div>
      )}
    </>
  );
};
