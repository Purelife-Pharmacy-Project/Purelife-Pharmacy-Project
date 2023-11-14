import { Button, Card, CardBody } from '@nextui-org/react';

export const OrderSummary = () => {
  return (
    <Card shadow='none' className='w-full border border-gray-300 lg:w-[543px]'>
      <CardBody>
        <div className='grid gap-4'>
          <h1 className='text-3xl font-bold text-header-100'>Order Summary</h1>

          <div className='flex justify-between border-b border-gray-300 py-4'>
            <p className='text-lg font-light text-header-100'>Subtotal</p>
            <p className='text-lg font-semibold text-header-100'>₦ 2,550.00 </p>
          </div>

          <div className='flex justify-between py-4'>
            <p className='text-lg font-light text-header-100'>Discount</p>
            <Button variant='flat' className='font-semibold text-header-100'>
              Apply coupon
            </Button>
          </div>
          <div className='flex justify-between border-b border-gray-300 py-4'>
            <p className='text-lg font-light text-header-100'>Delivery Fee</p>
            <p className='max-w-[158px] text-end font-light text-header-100'>
              Add delivery address on checkout page
            </p>
          </div>
          <div className='flex justify-between py-4'>
            <p className='text-lg font-light text-header-100'>Total</p>
            <p className='text-lg font-semibold text-header-100'>₦ 2,550.00 </p>
          </div>
          <Button
            color='primary'
            size='lg'
            radius='full'
            className='w-full py-8'
          >
            Checkout
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};
