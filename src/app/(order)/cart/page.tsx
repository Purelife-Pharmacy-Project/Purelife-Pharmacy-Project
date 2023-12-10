import { AppNavbar } from '@/components/Navbar';
import { CartItem } from '@/components/cart/CartItem';
import { OrderSummary } from '@/components/cart/OrderSummary';
import { Footer } from '@/components/home/Footer';
import { Section } from '@/components/home/Section';
import { Button, Input } from '@nextui-org/react';
import { OrderTypeRadio } from '@/components/drug-refill/OrderTypeRadio';
import { SubscribeDrugRefillModal } from '@/components/cart/modals/SubscribeDrugRefillModal';

export default function CartPage() {
  return (
    <>
      <AppNavbar background='primaryLight' />
      {/*TODO: (Me)Add the event listener back to handle when the modal's action is complete*/}
      <SubscribeDrugRefillModal isOpen={false} />
      <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
        <Section className='mt-8 bg-white lg:mt-0'>
          <h1 className='text-2xl font-bold text-header-100 lg:text-4xl'>
            Your Cart
          </h1>
          <div className='flex flex-col justify-between gap-6 lg:flex-row lg:items-center lg:gap-0'>
            <p className='font-light text-header-100'>
              You have 3 item(s) in your cart
            </p>

            <div className='grid items-center gap-4 lg:grid-flow-col lg:grid-cols-[3fr_11fr]'>
              <p className='text-header-100'>Have a coupon?</p>
              <Input
                radius='full'
                size='lg'
                placeholder='Enter a promo code'
                endContent={
                  <Button color='primary' className='px-10' radius='full'>
                    Apply Code
                  </Button>
                }
              />
            </div>
          </div>
          <div className='grid gap-5 py-4'>
            {Array.from({ length: 3 }).map((_, index) => (
              <CartItem key={index} />
            ))}

            <OrderTypeRadio />
          </div>

          <div className='mt-6 lg:flex lg:justify-end'>
            <OrderSummary />
          </div>
        </Section>
        <Footer />
      </div>
    </>
  );
}
