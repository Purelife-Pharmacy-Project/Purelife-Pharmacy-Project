import { AppNavbar } from '@/components/Navbar';
import { Footer } from '@/components/home/Footer';
import { Card, CardBody } from '@nextui-org/react';
import { ForgotPasswordForm } from '@/components/forgot-password/ForgotPasswordForm';

export default function ForgotPasswordPage() {
  return (
    <>
      <AppNavbar />
      <main className='grid h-[60vh] justify-center gap-6'>
        <div className='mt-12 flex flex-col gap-6'>
          <h1 className='text-center text-2xl font-semibold  text-header-100 lg:text-4xl'>
            Forgot Password
          </h1>
          <Card
            className='h-max border border-header-100 bg-primaryLight md:w-[554px]'
            shadow='none'
          >
            <CardBody className='p-8 lg:p-12'>
              <ForgotPasswordForm />
            </CardBody>
          </Card>
        </div>
      </main>

      <Footer />
    </>
  );
}
