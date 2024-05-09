import { AppNavbar } from '@/components/AppNavbar';
import { Footer } from '@/components/home/Footer';
import { IconSuccessCheck } from '@/components/icons/IconSuccessCheck';
import { Button, Link } from '@nextui-org/react';

export default function OrderStatusPage() {
  return (
    <>
      <AppNavbar background='primaryLight' />
      <div className='grid h-[800px] w-full place-content-center'>
        <div className='grid w-[270px] items-center gap-6'>
          <IconSuccessCheck />
          <p className='text-center text-3xl font-semibold text-header-100'>
            Congratulations!!!
          </p>
          <p className='text-light text-center text-lg text-header-100'>
            Your order has been taken and is being attended to.
          </p>

          <Button
            as={Link}
            href='/telehealth/shop-and-order'
            color='primary'
            radius='full'
            size='lg'
            className='mt-6 w-full'
          >
            Continue Shopping
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
