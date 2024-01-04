'use client';
import { useCartStore, useUpdateUser } from '@/hooks';
import { useStore } from '@/hooks/store';
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
import { FC } from 'react';
import { Paystack } from '../paystack';

type BillingPaymentCardProps = {
  billingData?: Partial<UserType>;
};

export const BillingPaymentCard: FC<BillingPaymentCardProps> = ({
  billingData,
}) => {
  const { updateUser, loadingUpdateUser, user } = useUpdateUser();
  const cart = useStore(useCartStore, (state) => state)?.cart;
  const summary = useStore(useCartStore, (state) => state)?.summary;

  return (
    <Card shadow='none' className='w-full bg-primaryLight'>
      <CardBody className='p-8 lg:p-12'>
        <div className='grid gap-4'>
          <div className='grid gap-6'>
            <div className='flex justify-between pb-3'>
              <RadioGroup>
                <Radio value='direct'>Direct Bank Transfer</Radio>
                <Radio value='debit/atm'>Pay via Debit/ Credit/ ATM card</Radio>
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
          {!user ? (
            <Button
              color='primary'
              size='md'
              isDisabled={!billingData}
              isLoading={loadingUpdateUser}
              onClick={() => updateUser(billingData!)}
              radius='full'
              className='mt-6 w-full py-6'
            >
              Place Order
            </Button>
          ) : (
            <Paystack
              amount={1000}
              email={user?.email as string}
              ctaText='Pay Now'
              label='Shop and Order'
            />
          )}
        </div>
      </CardBody>
    </Card>
  );
};
