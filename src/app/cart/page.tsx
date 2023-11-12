import { AppNavbar } from '@/components/Navbar';
import { CartItem } from '@/components/lib/cart/CartItem';
import { OrderSummary } from '@/components/lib/cart/OrderSummary';
import { Footer } from '@/components/lib/home/Footer';
import { Section } from '@/components/lib/home/Section';
import { Button, Input } from '@nextui-org/react';

export default function CartPage() {
  return (
    <>
      <AppNavbar background='primaryLight' />
      <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
        <Section className='bg-white'>
          <h1 className='text-2xl font-bold text-header-100 lg:text-4xl'>
            Your Cart
          </h1>
          <div className='flex items-center justify-between'>
            <p className='font-light text-header-100'>
              You have 3 item(s) in your cart
            </p>

            <div className='grid grid-flow-col grid-cols-[3fr_11fr] items-center gap-4'>
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
