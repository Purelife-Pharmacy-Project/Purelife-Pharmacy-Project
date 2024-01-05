'use client';
import { randomId } from '@/helpers/utils';
import { useCartStore } from '@/hooks';
import { useStore } from '@/hooks/store';
import { useVerifyPayment } from '@/hooks/usePayments';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { PaystackButton } from 'react-paystack';
import { toast } from 'sonner';

type PaystackProps = {
  amount: number;
  email: string;
  ctaText: string;
  label: string;
  paymentMethod: 'card' | 'bank_transfer';
};

type PaystackSuccessResponse = {
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
}) => {
  const router = useRouter();
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || '';
  const clearCart = useStore(useCartStore, (state) => state)
    ?.clearCart as () => void;

  const { verifyPayment } = useVerifyPayment(
    () => {
      console.log('payment verified');
    },
    (error) => {
      toast.error('An Error Occurred. Please try again later');
    }
  );

  return (
    <PaystackButton
      label={label}
      currency='NGN'
      className='invisible'
      channels={[paymentMethod]}
      publicKey={publicKey}
      amount={amount * 100}
      text={ctaText}
      onSuccess={(response: PaystackSuccessResponse) => {
        clearCart();
        router.push('/order-status');
        if (response) verifyPayment(response.reference);
      }}
      onClose={() => console.log('closed')}
      reference={randomId()}
      email={email}
    />
  );
};
