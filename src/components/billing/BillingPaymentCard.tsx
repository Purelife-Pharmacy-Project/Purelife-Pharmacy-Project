'use client';
import { fromNaira } from '@/helpers/utils';
import {
  useCartStore,
  useCreateOrder,
  useGetDeliveryAddresses,
  useGetUser,
} from '@/hooks';
import { useStore } from '@/hooks/store';
import { CreateOrderPayload, OrderProduct } from '@/services/orders/types';
import {
  Button,
  Card,
  CardBody,
  Image,
  Link,
  Radio,
  RadioGroup,
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Paystack, PaystackSuccessResponse } from '../paystack';
import { BillingAddressForm } from './BillingAddressForm';

type BillingPaymentCardProps = {
  hideDeliveryAddress?: boolean;
  amount?: number;
  onPaymentSuccess?: () => void;
};

export const BillingPaymentCard: FC<BillingPaymentCardProps> = ({
  hideDeliveryAddress = false,
  amount,
  onPaymentSuccess,
}) => {
  const summary = useStore(useCartStore, (state) => state)?.summary;
  const { user } = useGetUser();
  const cart = useStore(useCartStore, (state) => state)?.cart;
  const router = useRouter();

  const { setDeliveryFee } = useCartStore();

  useEffect(() => {
    if (cart && cart.length === 0) {
      toast.warning('Oops! Your cart is empty.');
      router.push('/cart');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clearCart = useStore(useCartStore, (state) => state)
    ?.clearCart as () => void;
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank_transfer'>(
    'card'
  );
  const [deliveryAddress, setDeliveryAddress] = useState<string>('');
  const { addresses, loadingAddresses } =
    useGetDeliveryAddresses(hideDeliveryAddress);

  const { createOrder, loadingCreateOrder } = useCreateOrder(() => {
    clearCart();
    toast.success('Order created successfully');
    router.push('/order-status');
  });

  const handlePaymentSuccess = (response: PaystackSuccessResponse) => {
    if (!response) return;

    const payload: CreateOrderPayload = {
      billingAddress: deliveryAddress,
      products: cart?.map((product) => ({
        productId: product.product.id,
        quantity: product.quantity,
        description: product.product.description,
        priceUnit: product.product.price,
      })) as OrderProduct[],
    };

    createOrder(payload);
  };

  const handleSelectBillingAddress = (value: string) => {
    setDeliveryAddress(value);
    const address = addresses?.find((address) => address.id === Number(value));

    setDeliveryFee(address?.price as number);
  };

  return (
    <Card shadow='none' className='w-full bg-primaryLight'>
      <CardBody className='p-8 lg:p-12'>
        <div className='grid gap-4'>
          <div className='grid gap-6'>
            {!hideDeliveryAddress ? (
              <BillingAddressForm
                addresses={addresses!}
                loadingAddresses={loadingAddresses}
                onSelect={handleSelectBillingAddress}
              />
            ) : null}
            <div className='flex justify-between pb-3'>
              <RadioGroup
                label='Payment Method'
                value={paymentMethod}
                onValueChange={(value) =>
                  setPaymentMethod(value as 'card' | 'bank_transfer')
                }
                classNames={{
                  label: 'text-header-100',
                }}
              >
                <Radio value='bank_transfer'>Direct Bank Transfer</Radio>
                <Radio value='card'>Pay via Debit/ Credit/ ATM card</Radio>
              </RadioGroup>
            </div>
            <Image
              alt='secured by paystack'
              width={300}
              height='auto'
              src='/images/paystack-secure.png'
            />
            <p className='font-light text-header-100'>
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our{' '}
              <Link className='underline' href='#'>
                privacy policy
              </Link>
              .
            </p>
          </div>
          <Button
            color='primary'
            size='md'
            isLoading={loadingCreateOrder}
            isDisabled={
              (!hideDeliveryAddress && !user?.contactAddress) ||
              user?.contactAddress?.trim() === ''
            }
            onPress={() => {
              const paymentButton = document.querySelector(
                '#paymentButton > button'
              ) as HTMLButtonElement;
              (!hideDeliveryAddress && !user?.contactAddress) ||
              user?.contactAddress?.trim() === ''
                ? toast.warning('Please add a delivery address')
                : paymentButton?.click();
            }}
            radius='full'
            className='mt-6 w-full py-6'
          >
            Place Order
          </Button>

          <div className='hidden' id='paymentButton'>
            <Paystack
              amount={amount || fromNaira(summary?.totalPayableAmount || '0')}
              paymentMethod={paymentMethod}
              email={user?.email as string}
              ctaText='Pay Now'
              label='Shop and Order'
              onSuccess={(response) => {
                onPaymentSuccess
                  ? onPaymentSuccess()
                  : handlePaymentSuccess(response);
              }}
            />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
