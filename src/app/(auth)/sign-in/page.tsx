import { AppNavbar } from '@/components/Navbar';
import { inputDefault } from '@/theme';
import { Button, Card, CardBody, Input, Link } from '@nextui-org/react';

export default function LoginPage() {
  return (
    <>
      <AppNavbar />
      <main className='grid justify-center gap-6'>
        <div className='mt-12 flex flex-col gap-6'>
          <h1 className='text-center text-2xl font-semibold text-header-100 lg:text-4xl'>
            Login to your account
          </h1>
          <Card
            className='h-max border border-header-100 bg-primaryLight md:w-[554px]'
            shadow='none'
          >
            <CardBody className='p-8 lg:p-12'>
              <div className='grid gap-4'>
                <Input label='Email' type='email' classNames={inputDefault} />
                <Input
                  label='Password'
                  type='password'
                  classNames={inputDefault}
                />

                <div className='flex items-center justify-start gap-4'>
                  <Button
                    size='lg'
                    className='px-20'
                    color='primary'
                    radius='full'
                  >
                    Login
                  </Button>

                  <p className='text-center'>
                    <Link href='/sign-in'>Forgot Password</Link>
                  </p>
                </div>
                <Link className='text-black' href='/create-account'>
                  Create an account
                </Link>
              </div>
            </CardBody>
          </Card>
        </div>
      </main>
    </>
  );
}
