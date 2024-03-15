import { AppNavbar } from '@/components/Navbar';
import { Footer } from '@/components/home/Footer';
import { LoginForm } from '@/components/login/loginForm';
import { Card, CardBody } from '@nextui-org/react';
import { Suspense } from 'react';

export default function LoginPage() {
  return (
    <>
      <AppNavbar background={'white'} />
      <main className='mb-10 grid h-screen justify-center md:mb-0'>
        <div className='mt-12 flex w-full flex-col gap-6'>
          <h1 className='text-center text-2xl font-semibold text-header-100 lg:text-4xl'>
            Login to your account
          </h1>
          <Card
            className='h-max w-full border border-header-100 bg-primaryLight'
            shadow='none'
          >
            <CardBody className='p-8 lg:p-12'>
              <Suspense>
                <LoginForm />
              </Suspense>
            </CardBody>
          </Card>
        </div>
      </main>

      <Footer />
    </>
  );
}
