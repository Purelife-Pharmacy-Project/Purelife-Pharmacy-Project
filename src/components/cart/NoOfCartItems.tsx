'use client';
import { useCartStore } from '@/hooks';
import { useEffect, useState } from 'react';

export const NoOfCartItems = () => {
  const { cart } = useCartStore();
  const [noOfCartItems, setNoOfCartItems] = useState(0);

  useEffect(() => {
    setNoOfCartItems(cart?.length);
  }, [cart]);

  return (
    <p className='font-light text-header-100'>
      You have {noOfCartItems} item(s) in your cart
    </p>
  );
};
