import { AppNavbar } from '@/components/AppNavbar';
import { CreateAccountForm } from '@/components/create-account/CreateAccountForm';
import { Footer } from '@/components/home/Footer';
import { Card, CardBody } from '@nextui-org/react';

export default function CreateAccountPage() {
  return (
    <>
      <AppNavbar background={'white'} />
      <main className='mb-10 grid h-screen justify-center md:mb-0'>
        <div className='mt-12 flex w-full flex-col gap-6'>
          <h1 className='text-center text-2xl font-semibold  text-header-100 lg:text-4xl'>
            Create a Secure Account
          </h1>
          <Card
            className='h-max border border-header-100 bg-primaryLight'
            shadow='none'
          >
            <CardBody className='p-8 lg:p-12'>
              <CreateAccountForm />
            </CardBody>
          </Card>
        </div>
      </main>

      <Footer />
    </>
  );
}
