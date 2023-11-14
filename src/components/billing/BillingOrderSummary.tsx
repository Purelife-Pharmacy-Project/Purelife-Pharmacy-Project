import { Card, CardBody } from '@nextui-org/react';

export const BillingOrderSummary = () => {
  return (
    <Card shadow='none' className='w-full bg-primaryLight lg:w-[543px]'>
      <CardBody className='p-8 lg:p-12'>
        <div className='grid gap-4'>
          <h1 className='text-2xl font-bold text-header-100'>Order Summary</h1>

          <div className='grid gap-6'>
            <div className='flex justify-between border-b border-gray-300 pb-3'>
              <p className='text-lg font-light text-header-100'>Subtotal</p>
              <p className='text-md font-semibold text-header-100'>
                ₦ 2,550.00{' '}
              </p>
            </div>

            <div className='flex justify-between pb-3'>
              <p className='text-lg font-light text-header-100'>Discount</p>
              <p className='text-md font-light text-header-100'>₦ 2,550.00 </p>
            </div>
            <div className='flex justify-between border-b border-gray-300 pb-3'>
              <p className='text-lg font-light text-header-100'>Delivery Fee</p>
              <p className='text-md font-light text-header-100'>₦ 2,550.00 </p>
            </div>
            <div className='flex justify-between'>
              <p className='text-lg font-semibold text-header-100'>Total</p>
              <p className='text-2xl font-semibold text-header-100'>
                ₦ 2,550.00{' '}
              </p>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
