'use client';
import { AppNavbar } from '@/components/Navbar';
import { BillingForm } from '@/components/billing/BillingForm';
import { BillingOrderSummary } from '@/components/billing/BillingOrderSummary';
import { BillingPaymentCard } from '@/components/billing/BillingPaymentCard';
import { Footer } from '@/components/home/Footer';
import { Section } from '@/components/home/Section';
import { UserType } from '@/services/user/types';
import { inputDefault } from '@/theme';
import { Button, Input } from '@nextui-org/react';
import { useState } from 'react';

export default function BillingPage() {
  const [billingData, setBillingData] = useState<Partial<UserType> | null>(
    null
  );
  return (
    <>
      <AppNavbar background='primaryLight' />

      <div className='grid justify-center bg-primaryLight py-8'>
        <Section className='bg-primaryLight'>
          <div className='flex items-center gap-4'>
            <div className='grid grid-flow-col grid-cols-[3fr_11fr] items-center gap-4'>
              <p className='text-header-100'>Have a coupon?</p>
              <Input
                radius='full'
                size='lg'
                classNames={inputDefault}
                placeholder='Enter a promo code'
                endContent={
                  <Button color='primary' className='px-10' radius='full'>
                    Apply Code
                  </Button>
                }
              />
            </div>
          </div>
        </Section>
      </div>

      <div className='grid justify-center pt-8 lg:pb-10'>
        <Section className='bg-white'>
          <div className='grid grid-cols-1 gap-6 lg:grid-flow-col lg:grid-cols-2'>
            <div className='flex flex-col gap-6'>
              <p className='text-2xl font-semibold text-header-100'>
                Billing Details
              </p>

              <BillingForm onFinish={(data) => setBillingData(data)} />
            </div>

            <div className='grid h-max gap-6'>
              <BillingOrderSummary />
              <BillingPaymentCard billingData={billingData!} />
            </div>
          </div>
        </Section>
      </div>

      <Footer />
    </>
  );
}
