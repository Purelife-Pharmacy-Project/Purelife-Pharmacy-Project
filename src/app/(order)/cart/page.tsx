import { AppNavbar } from '@/components/Navbar';
import { CartWrapper } from '@/components/cart/CartWrapper';
import { NoOfCartItems } from '@/components/cart/NoOfCartItems';
import { SubscribeDrugRefillModal } from '@/components/cart/modals/SubscribeDrugRefillModal';
import { Footer } from '@/components/home/Footer';
import { Section } from '@/components/home/Section';
import { CartService } from '@/services/cart';
import { Button, Input } from '@nextui-org/react';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';

export default async function CartPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['cart'],
    queryFn: () => CartService.getCart(),
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <AppNavbar background={'primaryLight'} />
      </HydrationBoundary>

      <SubscribeDrugRefillModal isOpen={false} />
      <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
        <Section className='mt-8 bg-white lg:mt-0'>
          <h1 className='text-2xl font-bold text-header-100 lg:text-4xl'>
            Your Cart
          </h1>
          <div className='flex flex-col justify-between gap-6 lg:flex-row lg:items-center lg:gap-0'>
            <NoOfCartItems />

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

          <HydrationBoundary state={dehydrate(queryClient)}>
            <CartWrapper />
            {/*<OrderTypeRadio />*/}
          </HydrationBoundary>
        </Section>
        <Footer />
      </div>
    </>
  );
}
