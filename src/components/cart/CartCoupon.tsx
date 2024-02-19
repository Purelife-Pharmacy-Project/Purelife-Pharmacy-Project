'use client';
import { useCartStore } from '@/hooks';
import { useStore } from '@/hooks/store';
import { useApplyCoupons, useGetCoupon } from '@/hooks/useCoupons';
import { Button, Input } from '@nextui-org/react';
import { useState } from 'react';

export const CartCoupon = () => {
  const store = useStore(useCartStore, (state) => state);
  const cart = store?.cart;
  const setCouponPercentage = store?.setCouponPercentage;

  const [codeValue, setCodeValue] = useState('');

  const { mutate: applyCoupon, isPending: isApplyingCoupon } =
    useApplyCoupons();

  const { mutate: getCoupon, isPending: isGettingCoupon } = useGetCoupon(
    (data) => {
      if (data) {
        setCouponPercentage
          ? setCouponPercentage(data.discountPercentage)
          : null;
      }
    }
  );

  const handleValidateCoupon = () => {
    if (codeValue) {
      getCoupon(codeValue);
    }
  };

  // const handleApplyCoupon = () => {
  //   const payload: ApplyCouponPayload = {
  //     couponCode: codeValue,

  //   if (codeValue) {

  //   }
  // }

  return (
    <div className='grid items-center gap-4 lg:grid-flow-col lg:grid-cols-[3fr_11fr]'>
      <p className='text-header-100'>Have a coupon?</p>
      <Input
        radius='full'
        isDisabled={cart && cart.length === 0}
        size='lg'
        maxLength={10}
        value={codeValue}
        onValueChange={(value) => setCodeValue(value)}
        id='coupon-input'
        placeholder='Enter a promo code'
        endContent={
          <Button
            color='primary'
            size='sm'
            isDisabled={codeValue.length < 5 || isGettingCoupon}
            isLoading={isGettingCoupon}
            onPress={handleValidateCoupon}
            className='px-10'
            radius='full'
          >
            Apply Code
          </Button>
        }
      />
    </div>
  );
};
