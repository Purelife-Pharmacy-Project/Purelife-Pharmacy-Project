'use client';
import { randomId } from '@/helpers/utils';
import { FC } from 'react';
import { PaystackButton } from 'react-paystack';

type PaystackProps = {
  amount: number;
  email: string;
  ctaText: string;
  label: string;
};

export const Paystack: FC<PaystackProps> = ({
  amount,
  email,
  ctaText,
  label,
}) => {
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || '';

  return (
    <PaystackButton
      label={label}
      currency='NGN'
      className='rounded-full bg-primary px-10 py-3 text-white'
      publicKey={publicKey}
      amount={amount * 100}
      text={ctaText}
      onSuccess={(response) => console.log(response)}
      onClose={() => console.log('closed')}
      reference={randomId()}
      email={email}
    />
  );
};
