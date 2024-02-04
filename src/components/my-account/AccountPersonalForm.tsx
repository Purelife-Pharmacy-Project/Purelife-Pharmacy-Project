'use client';

import { useGetUser } from '@/hooks';
import { BillingForm } from '../billing/BillingForm';

export const AccountPersonalForm = () => {
  const { user, loadingUser } = useGetUser();

  return (
    <div className='grid gap-6'>
      <BillingForm isProfile onUpdated={() => {}} />

      {/* <Line className='w-full' />

      <h1 className='text-2xl font-semibold text-header-100'>Payment</h1>

      <RadioGroup>
        <Radio value='debit/atm'>Pay via Debit/ Credit/ ATM card</Radio>
      </RadioGroup>

      <Image
        alt='secured by paystack'
        width={300}
        height='auto'
        src='/images/paystack-secure.png'
      />

      <Button color='primary' size='lg' radius='full' className='w-max px-10'>
        Add Payment Option
      </Button> */}
    </div>
  );
};
