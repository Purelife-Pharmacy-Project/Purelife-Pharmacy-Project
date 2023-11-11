import { AppNavbar } from '@/components/Navbar';
import { Section } from '@/components/lib/home/Section';
import { Card, CardBody } from '@nextui-org/react';

export default function CartProductPage() {
  return (
    <>
      <AppNavbar background='primaryLight' />
      <div className='grid justify-center bg-primaryLight py-10 lg:pb-10'>
        <Section className='bg-primaryLight'>
          <h1 className='border-grey-200 mb-6 border-b pb-4 text-2xl font-bold text-header-100 lg:text-4xl'>
            Health Category
          </h1>
          <p className='font-light text-header-100'>
            You have 3 item(s) in your cart
          </p>
        </Section>
      </div>

      <div className='grid justify-center py-10 lg:py-10'>
        <Section className='bg-white'>
          <div className='flex justify-between'>
            <Card shadow='none' className='w-full bg-primaryLight lg:w-[543px]'>
              <CardBody className='bg-white'>hello world</CardBody>
            </Card>
            <div>hello</div>
          </div>
        </Section>
      </div>
    </>
  );
}
