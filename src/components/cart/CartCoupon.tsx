'use client';
import { useCartStore } from '@/hooks';
import { useStore } from '@/hooks/store';
import { Button, Input } from '@nextui-org/react';

export const CartCoupon = () => {
  const cart = useStore(useCartStore, (state) => state)?.cart;

  return (
    <div className='grid items-center gap-4 lg:grid-flow-col lg:grid-cols-[3fr_11fr]'>
      <p className='text-header-100'>Have a coupon?</p>
      <Input
        radius='full'
        isDisabled={cart && cart.length === 0}
        size='lg'
        placeholder='Enter a promo code'
        endContent={
          <Button color='primary' className='px-10' radius='full'>
            Apply Code
          </Button>
        }
      />
    </div>
  );
};
