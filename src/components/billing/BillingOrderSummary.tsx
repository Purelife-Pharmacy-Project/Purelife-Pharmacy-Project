'use client';
import { useCartStore } from '@/hooks';
import { useStore } from '@/hooks/store';
import { Card, CardBody } from '@nextui-org/react';
import { IconSpinner } from '../icons/IconSpinner';

export const BillingOrderSummary = () => {
  const summary = useStore(useCartStore, (state) => state)?.summary;

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
                {summary?.subTotal}
              </p>
            </div>

            <div className='flex justify-between pb-3'>
              <p className='text-lg font-light text-header-100'>Discount</p>
              <p className='text-md font-light text-header-100'>
                {summary?.discount}
              </p>
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
                {summary?.total}{' '}
              </p>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
