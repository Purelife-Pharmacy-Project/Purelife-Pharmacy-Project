import { AppNavbar } from '@/components/Navbar';
import { inputDefault } from '@/theme';
import { Button, Card, CardBody, Input, Link } from '@nextui-org/react';

export default function CreateAccountPage() {
  return (
    <>
      <AppNavbar />
      <main className='grid justify-center gap-6'>
        <div className='mt-12 flex flex-col gap-6'>
          <h1 className='text-center text-2xl font-semibold  text-header-100 lg:text-4xl'>
            Create a Secure Account
          </h1>
          <Card
            className='h-max border border-header-100 bg-primaryLight md:w-[554px]'
            shadow='none'
          >
            <CardBody className='p-8 lg:p-12'>
              <div className='grid gap-8'>
                <Input
                  label='Email'
                  type='email'
                  autoComplete='new-email'
                  classNames={inputDefault}
                />
                <Input
                  label='Password'
                  type='password'
                  autoComplete='new-password'
                  classNames={inputDefault}
                />
                <p className='mx-auto w-full text-center font-light md:max-w-[400px]'>
                  We&apos;ll use your data to improve your website experience,
                  manage account access, and for other purposes as detailed in
                  our privacy policy.
                </p>

                <div className='flex justify-center'>
                  <Button
                    size='lg'
                    className='px-10'
                    color='primary'
                    radius='full'
                  >
                    Create Account
                  </Button>
                </div>

                <p className='text-center'>
                  Already have an account?
                  <Link className='ml-2' href='/sign-in'>
                    {' '}
                    Sign in
                  </Link>
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
      </main>
    </>
  );
}
