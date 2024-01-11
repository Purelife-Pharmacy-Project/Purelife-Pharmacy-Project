'use client';
import { randomId } from '@/helpers/utils';
import { FC } from 'react';
import { PaystackButton } from 'react-paystack';

type PaystackProps = {
  amount: number;
  email: string;
  ctaText: string;
  label: string;
  paymentMethod: 'card' | 'bank_transfer';
  onSuccess: (response: PaystackSuccessResponse) => void;
};

export type PaystackSuccessResponse = {
  reference: string;
  message: string;
  status: 'success' | 'failed';
  trans: string;
  transaction: string;
  trxRef: string;
};

export const Paystack: FC<PaystackProps> = ({
  amount,
  email,
  ctaText,
  label,
  paymentMethod,
  onSuccess,
}) => {
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || '';

  return (
    <PaystackButton
      label={label}
      currency='NGN'
      className='invisible'
      channels={[paymentMethod]}
      publicKey={publicKey}
      amount={amount * 100}
      text={ctaText}
      onSuccess={(response: PaystackSuccessResponse) => onSuccess(response)}
      onClose={() => console.log('closed')}
      reference={randomId()}
      email={email}
    />
  );
};
