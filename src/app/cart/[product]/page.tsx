import { AppNavbar } from '@/components/Navbar';
import { DeliveryModeTabs } from '@/components/cart/DeliveryModeTabs';
import { ProductQuantity } from '@/components/cart/ProductQuantity';
import { Section } from '@/components/home/Section';
import { IconBin } from '@/library/icons/IconBin';
import { Button, Card, CardBody, Image } from '@nextui-org/react';

export default function CartProductPage() {
  return (
    <>
      <AppNavbar background='primaryLight' />
      <div className='grid justify-start bg-primaryLight px-4 py-10 lg:justify-center lg:px-0 lg:pb-10'>
        <Section className='bg-primaryLight'>
          <h1 className='border-grey-200 mb-6 border-b pb-4 text-2xl font-bold text-header-100 lg:text-4xl'>
            Your Cart
          </h1>
          <p className='font-light text-header-100'>
            You have 3 item(s) in your cart
          </p>
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
                <div className='grid gap-4'>
                  <h1 className='text-2xl font-semibold text-header-100'>
                    Lokmal Qs-Tab
                  </h1>
                  <p className='text-lg font-light text-header-100'>
                    Lokmal Qs is a combination of Artemether Lumefantrine and
                    paracetamol, it is indicated for the treatment of malaria in
                    children (14 years and above) and adults caused by all forms
                    of plasmodium including severe malaria caused by multiple
                    drug resistant strains of P.falciparum.
                  </p>

                  <p className='font-bold text-content'>₦ 2,550.00 </p>

                  <div className='flex items-center justify-between'>
                    <ProductQuantity />

                    <Button isIconOnly variant='faded'>
                      <IconBin color='primary' />
                    </Button>
                  </div>
                </div>
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
