import { AppNavbar } from '@/components/Navbar';
import { DeliveryModeTabs } from '@/components/cart/DeliveryModeTabs';
import { NoOfCartItems } from '@/components/cart/NoOfCartItems';
import { Section } from '@/components/home/Section';
import { Card, CardBody, Image } from '@nextui-org/react';
import { CartItemDetails } from '@/components/cart/CartItemDetails';

export default function CartProductPage() {
  return (
    <>
      <AppNavbar background={'primaryLight'} />
      <div className='grid justify-start bg-primaryLight px-4 py-10 lg:justify-center lg:px-0 lg:pb-10'>
        <Section className='bg-primaryLight'>
          <h1 className='border-grey-200 mb-6 border-b pb-4 text-2xl font-bold text-header-100 lg:text-4xl'>
            Your Cart
          </h1>
          <NoOfCartItems />
        </Section>
      </div>

      <div className='grid justify-center py-10 lg:py-10'>
        <Section className='bg-white'>
          <div className='grid grid-cols-1 lg:grid-flow-col lg:grid-cols-2'>
            <Card shadow='none' className='w-full lg:w-[543px]'>
              <CardBody className='bg-primaryLight'>
                <div className='rounded-lg bg-white p-3'>
                  <Image alt='product image' src='/images/dummy-image.jpeg' />
                </div>
              </CardBody>
            </Card>
            <Card shadow='none' className='w-full'>
              <CardBody>
                <CartItemDetails />
              </CardBody>
            </Card>
          </div>

          <div className='mt-6 grid w-full grid-flow-col grid-cols-1 lg:grid-cols-2'>
            <div className='hidden w-full lg:block'></div>
            <DeliveryModeTabs />
          </div>
        </Section>
      </div>
    </>
  );
}
