'use client';
import {
  useCartStore,
  useCreateOrder,
  useUpdateUserContactInfo,
} from '@/hooks';
import { useStore } from '@/hooks/store';
import { CreateOrderPayload, OrderProduct } from '@/services/orders/types';
import { UserType } from '@/services/user/types';
import {
  Button,
  Card,
  CardBody,
  Image,
  Link,
  Radio,
  RadioGroup,
} from '@nextui-org/react';
import { FC, useState } from 'react';
import { toast } from 'sonner';
import { Paystack } from '../paystack';

type BillingPaymentCardProps = {
  billingData?: Partial<UserType>;
};

export const BillingPaymentCard: FC<BillingPaymentCardProps> = ({
  billingData,
}) => {
  const summary = useStore(useCartStore, (state) => state)?.summary;
  const cart = useStore(useCartStore, (state) => state)?.cart;
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank_transfer'>(
    'card'
  );

  /**
   * if user is not logged in then take user to login page
   * disable form data with sensitive information
   * if create account is selected create user account.
   */

  const { createOrder, loadingCreateOrder } = useCreateOrder(
    () => {
      const paymentButton = document.querySelector(
        '#paymentButton > button'
      ) as HTMLButtonElement;
      paymentButton?.click();
    },
    (error) => {
      toast.error('An Error Occurred. Please try again later');
    }
  );
  const { updateUserInfo, loadingUpdateUserInfo } = useUpdateUserContactInfo(
    () => {
      const payload: CreateOrderPayload = {
        billingAddress: billingData?.contactAddress as string,
        customerId: billingData?.id as number,
        products: cart?.map((product) => ({
          productId: product.product.id,
          quantity: product.quantity,
          description: product.product.description,
          priceUnit: product.product.price,
        })) as OrderProduct[],
      };

      createOrder(payload);
    },
    (error) => {
      toast.error('An Error Occurred. Please try again later');
    }
  );

  return (
    <Card shadow='none' className='w-full bg-primaryLight'>
      <CardBody className='p-8 lg:p-12'>
        <div className='grid gap-4'>
          <div className='grid gap-6'>
            <div className='flex justify-between pb-3'>
              <RadioGroup
                value={paymentMethod}
                onValueChange={(value) =>
                  setPaymentMethod(value as 'card' | 'bank_transfer')
                }
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
            isDisabled={!billingData}
            isLoading={loadingUpdateUserInfo || loadingCreateOrder}
            onClick={() => updateUserInfo(billingData!)}
            radius='full'
            className='mt-6 w-full py-6'
          >
            Place Order
          </Button>

          <div className='hidden' id='paymentButton'>
            <Paystack
              amount={summary?.totalAmount as number}
              paymentMethod={paymentMethod}
              email={billingData?.email as string}
              ctaText='Pay Now'
              label='Shop and Order'
            />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
