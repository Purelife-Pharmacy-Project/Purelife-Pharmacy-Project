import { AppNavbar } from '@/components/AppNavbar';
import { CartItemDetails } from '@/components/cart/CartItemDetails';
import { NoOfCartItems } from '@/components/cart/NoOfCartItems';
import { Footer } from '@/components/home/Footer';
import { Section } from '@/components/home/Section';

export default function CartProductPage() {
  return (
    <>
      <AppNavbar background={'primaryLight'} />
      <div className='grid justify-start bg-primaryLight px-4 py-10 lg:justify-center lg:px-0 lg:pb-10'>
        <Section className='bg-primaryLight'>
          <div className='flex items-center justify-between'>
            <h1 className='text-2xl font-bold text-header-100 lg:text-4xl'>
              Your Cart
            </h1>
          </div>
          <NoOfCartItems />
        </Section>
      </div>

      <div className='grid justify-center py-10 lg:py-10'>
        <Section className='bg-white'>
          <CartItemDetails />
        </Section>
      </div>

      <Footer />
    </>
  );
}
