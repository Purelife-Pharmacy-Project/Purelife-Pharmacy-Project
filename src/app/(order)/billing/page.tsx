import { AppNavbar } from '@/components/Navbar';
import { BillingInfoCard } from '@/components/billing/BillingInfoCard';
import { BillingOrderSummary } from '@/components/billing/BillingOrderSummary';
import { BillingPaymentCard } from '@/components/billing/BillingPaymentCard';
import { CartCoupon } from '@/components/cart/CartCoupon';
import { Footer } from '@/components/home/Footer';
import { Section } from '@/components/home/Section';

export default function BillingPage() {
  return (
    <>
      <AppNavbar background='primaryLight' />

      <div className='grid justify-center bg-primaryLight py-8'>
        <Section className='bg-primaryLight'>
          <div className='flex items-center gap-4'>
            <CartCoupon />
          </div>
        </Section>
      </div>

      <div className='grid justify-center pt-8 lg:pb-10'>
        <Section className='bg-white'>
          <div className='grid grid-cols-1 gap-6 lg:grid-flow-col lg:grid-cols-2'>
            <div className='flex flex-col gap-6'>
              <BillingInfoCard />
            </div>

            <div className='grid h-max gap-6'>
              <BillingOrderSummary />
              <BillingPaymentCard />
            </div>
          </div>
        </Section>
      </div>

      <Footer />
    </>
  );
}
