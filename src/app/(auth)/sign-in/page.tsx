'use client';
import { Footer } from '@/components/home/Footer';
import { IconLeftArrow } from '@/components/icons/IconLeftArrow';
import { LoginForm } from '@/components/login/loginForm';
import { useAuth } from '@/helpers/useContext/authContext';
import { Card, CardBody } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
// import { Suspense } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const { isAuthenticated, logout } = useAuth();
  const redirectPath = localStorage.getItem('redirectPath');
  const handleBackClick = () => {
    localStorage.removeItem('redirectPath');
    router.push('/telehealth/find-a-doctor/availability-calendar'); 
  };
  useEffect(() => {
    if (isAuthenticated && (redirectPath === '/telehealth/find-a-doctor/availability-calendar')) {
      router.push(`/telehealth/find-a-doctor/review-and-book`)
    }
  }, [])
  return (
    <>
      <main className='mb-10 w-[90%] md:w-[45%] sm:w-[70%] mx-auto h-screen justify-center md:mb-0'>
        <div className='mt-12 flex w-full flex-col gap-6'>
          {(redirectPath === '/telehealth/find-a-doctor/availability-calendar') &&
            <div
              onClick={handleBackClick}
              className='w-fit cursor-pointer'>
            <IconLeftArrow
              color='#1E272F' />
          </div>}
          <div className='flex flex-col gap-3'>
          <h1 className='text-2xl font-bold text-header-100 lg:text-3xl'>
            Welcome Back
          </h1>
          
          <p className='text-[#5A5A5A] font-medium'>Login to your account for easy access to personalized care and seamless consultations</p>
          </div>
          
          <Card
            className='h-max'
            shadow='none'
          >
            <CardBody className='p-0'>
              {/* <Suspense> */}
              <LoginForm />
              {/* </Suspense> */}
            </CardBody>
          </Card>
        </div>
      </main>

      <Footer />
    </>
  );
}
