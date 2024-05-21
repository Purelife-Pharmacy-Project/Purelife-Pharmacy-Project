import { CartCoupon } from '@/components/cart/CartCoupon';
import { CartWrapper } from '@/components/cart/CartWrapper';
import { NoOfCartItems } from '@/components/cart/NoOfCartItems';
import { SubscribeDrugRefillModal } from '@/components/cart/modals/SubscribeDrugRefillModal';
import { Footer } from '@/components/home/Footer';
import { Section } from '@/components/home/Section';

export default function CartPage() {
  return (
    <>
      <SubscribeDrugRefillModal isOpen={false} />
      <div className='lg:grid lg:justify-center lg:pb-10 lg:pt-[55px]'>
        <Section className='mt-8 bg-white lg:mt-0'>
          <h1 className='text-2xl font-bold text-header-100 lg:text-4xl'>
            Your Cart
          </h1>
          <div className='flex flex-col justify-between gap-6 lg:flex-row lg:items-center lg:gap-0'>
            <NoOfCartItems />
            <CartCoupon />
          </div>

          <CartWrapper />
          {/*<OrderTypeRadio />*/}
        </Section>
        <Footer />
      </div>
    </>
  );
}
