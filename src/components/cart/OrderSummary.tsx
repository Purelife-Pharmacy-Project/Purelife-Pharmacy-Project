'use client';
import { useCartStore } from '@/hooks';
import { useStore } from '@/hooks/store';
import { Button, Card, CardBody, Link } from '@nextui-org/react';
import { FC } from 'react';

type OrderSummaryProps = {};

export const OrderSummary: FC<OrderSummaryProps> = () => {
  const summary = useStore(useCartStore, (state) => state)?.summary;

  return (
    <Card shadow='none' className='w-full border border-gray-300 lg:w-[543px]'>
      <CardBody>
        <div className='grid gap-4'>
          <h1 className='text-2xl font-bold text-header-100'>Order Summary</h1>
          <div className='flex justify-between border-b border-gray-300 py-4'>
            <p className='text-lg font-light text-header-100'>Subtotal</p>
            <p className='text-lg font-semibold text-header-100'>
              {summary?.subTotal}
            </p>
          </div>

          <div className='flex justify-between py-4'>
            <p className='text-lg font-light text-header-100'>Discount</p>
            <Button
              variant='flat'
              disabled
              className='font-semibold text-header-100'
            >
              Apply coupon
            </Button>
          </div>
          <div className='flex justify-between border-b border-gray-300 py-4'>
            <p className='text-lg font-light text-header-100'>Delivery Fee</p>
            <p className='max-w-[158px] text-end font-light italic text-content'>
              Add delivery address on checkout page
            </p>
          </div>
          <div className='flex justify-between py-4'>
            <p className='text-lg font-light text-header-100'>Total</p>
            <p className='text-lg font-semibold text-header-100'>
              {summary?.total}
            </p>
          </div>
          <Button
            color='primary'
            size='lg'
            as={Link}
            href='/billing'
            radius='full'
            className='w-full py-8'
          >
            Proceed to Billing
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};
