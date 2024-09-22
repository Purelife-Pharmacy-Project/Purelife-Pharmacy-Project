'use client';
import { useCartStore, useGetPartner } from '@/hooks';
import { useStore } from '@/hooks/store';
import { Button, Card, CardBody } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';
import { BillingAddressModal } from '../billing/BillingAddressModal';
import { CircularProgress } from '@nextui-org/progress';

type OrderSummaryProps = {};

export const goToApplyCoupon = () => {
  const couponInput = document.getElementById('coupon-input');

  if (couponInput) {
    couponInput.focus();

    couponInput.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }
};

export const OrderSummary: FC<OrderSummaryProps> = () => {
  const summary = useStore(useCartStore, (state) => state)?.summary;

  const [showDeliveryModal, setShowDeliveryModal] = useState(false);
  const { partner, loadingPartner } = useGetPartner();
  const router = useRouter();

  return (
    <Card shadow='none' className='w-full border border-gray-300 lg:w-[543px]'>
      <CardBody>
        <div className='grid gap-4'>
          <h1 className='text-2xl font-bold text-header-100'>Order Summary</h1>

          <div className='flex justify-between py-4'>
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
          <div className='flex justify-between border-b border-gray-300 py-4'>
            <p className='text-lg font-light text-header-100'>Delivery Fee</p>

            <div className='grid gap-4'>
              <p className='w-[200px] text-right font-light text-header-100'>
                Add delivery address on billing page
              </p>
            </div>
          </div>
          <div className='flex justify-between py-4'>
            <p className='text-lg font-light text-header-100'>Total</p>
            <p className='text-lg font-semibold text-header-100'>
              {summary?.totalPayableAmount}
            </p>
          </div>
          {loadingPartner ? (
            <div className='flex items-center justify-center'>
              <CircularProgress aria-label='Loading...' />
            </div>
          ) : partner ? (
            <Button
              color='primary'
              size='lg'
              onPress={() => {
                router.push(`/billing`);
              }}
              radius='full'
              className='w-full py-6'
            >
              Continue to Billing
            </Button>
          ) : (
            <div className='flex flex-col items-center gap-4 md:flex-row'>
              <Button
                color='primary'
                size='lg'
                onPress={() => {
                  router.push(`/sign-in?redirectUrl=/billing`);
                }}
                radius='full'
                className='w-full py-6'
              >
                Login to continue
              </Button>
              <p className='text-lg font-bold text-header-100'>OR</p>
              <Button
                color='default'
                size='lg'
                onPress={() => {
                  router.push('/billing');
                }}
                radius='full'
                className='w-full py-6'
              >
                Checkout as Guest
              </Button>
            </div>
          )}
        </div>

        {/* delivery address modal */}

        <BillingAddressModal
          isOpen={showDeliveryModal}
          openChange={() => setShowDeliveryModal(false)}
        />
      </CardBody>
    </Card>
  );
};
