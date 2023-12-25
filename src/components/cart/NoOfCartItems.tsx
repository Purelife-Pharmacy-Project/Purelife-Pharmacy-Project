'use client';
import { useGetCart } from '@/hooks';

export const NoOfCartItems = () => {
  const { cart } = useGetCart();
  return (
    <p className='font-light text-header-100'>
      You have {cart?.length} item(s) in your cart
    </p>
  );
};
