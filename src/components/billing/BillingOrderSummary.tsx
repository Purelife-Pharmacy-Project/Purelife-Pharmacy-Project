'use client';
import { toNaira } from '@/helpers/utils';
import { useCartStore, useGetUser } from '@/hooks';
import { useStore } from '@/hooks/store';
import { Button, Card, CardBody } from '@nextui-org/react';
import { goToApplyCoupon } from '../cart/OrderSummary';
import { IconSpinner } from '../icons/IconSpinner';

export const BillingOrderSummary = () => {
  const summary = useStore(useCartStore, (state) => state)?.summary;
  const cart = useStore(useCartStore, (state) => state)?.cart;

  const user = useGetUser();

  return (
    <Card shadow='none' className='w-full bg-primaryLight'>
      <CardBody className='p-8 lg:p-12'>
        <div className='grid gap-4'>
          <div className='flex justify-between'>
            <h1 className='text-2xl font-bold text-header-100'>
              Order Summary
            </h1>

            {!summary && <IconSpinner />}
          </div>

          <div className='grid gap-6'>
            <div className='flex justify-between border-b border-gray-300 pb-3'>
              <p className='text-lg font-light text-header-100'>Subtotal</p>
              <p className='text-md font-semibold text-header-100'>
                {toNaira(summary?.totalCartAmount as number)}
              </p>
            </div>

            <div className='flex justify-between pb-3'>
              <p className='text-lg font-light text-header-100'>Discount</p>
              {summary?.couponPercentage === 0 ? (
                <Button
                  variant='flat'
                  disabled
                  className='font-semibold text-header-100'
                  onPress={() => goToApplyCoupon()}
                >
                  Apply coupon
                </Button>
              ) : (
                <p className='text-lg font-semibold text-primaryGreen'>
                  {summary?.couponPercentage}% Off
                </p>
              )}
            </div>
            <div className='flex justify-between border-b border-gray-300 pb-3'>
              <p className='text-lg font-light text-header-100'>Delivery Fee</p>
              <p className='text-md font-light text-header-100'>
                {summary?.deliveryFee}{' '}
              </p>
            </div>
            <div className='flex justify-between'>
              <p className='text-lg font-semibold text-header-100'>Total</p>
              <p className='text-2xl font-semibold text-header-100'>
                {summary?.totalPayableAmount}{' '}
              </p>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
