import { CreateAccountForm } from '@/components/create-account/CreateAccountForm';
import { Footer } from '@/components/home/Footer';
import { Card, CardBody } from '@nextui-org/react';

export default function CreateAccountPage() {
  return (
    <>
      <main className='mb-10 w-[90%] md:w-[45%] sm:w-[70%] mx-auto h-full justify-center md:mb-0'>
        <div className='mt-12 flex w-full flex-col gap-6'>
          <h1 className='text-2xl font-bold  text-header-100 lg:text-3xl'>
            Create an account
          </h1>
          <p className='text-[#5A5A5A]'>Get started by creating your account for easy access to personalized care and seamless consultations</p>
          <Card
            className='h-max'
            shadow='none'
          >
            <CardBody className='p-0'>
              <CreateAccountForm />
            </CardBody>
          </Card>
        </div>
      </main>

      <Footer />
    </>
  );
}
