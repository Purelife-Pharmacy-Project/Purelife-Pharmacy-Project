import { ForgotPasswordForm } from '@/components/forgot-password/ForgotPasswordForm';
import { Footer } from '@/components/home/Footer';
import { Card, CardBody } from '@nextui-org/react';

export default function ForgotPasswordPage() {
  return (
    <>
      <main className='w-[90%] md:w-[45%] sm:w-[70%] mx-auto md:mb-[300px] mb-[200px] justify-center'>
        <div className='mt-12 flex w-full flex-col gap-6'>
          <h1 className='text-2xl font-bold text-header-100 lg:text-3xl'>
            Forgot Password
          </h1>
          <Card
            className='h-max'
            shadow='none'
          >
            <CardBody className='p-0'>
              <ForgotPasswordForm />
            </CardBody>
          </Card>
        </div>
      </main>

      <Footer />
    </>
  );
}
