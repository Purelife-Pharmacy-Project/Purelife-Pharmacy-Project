import { Button, Card, CardBody, Input } from '@nextui-org/react';

export const NewsLetterCard = () => {
  return (
    <Card shadow='none'>
      <CardBody className='bg-primaryLight'>
        <div className='flex w-full flex-col items-center justify-between gap-4 p-1 md:flex-row md:p-4 lg:gap-0 lg:p-20'>
          <h1 className='w-full text-center text-3xl font-bold text-header-100 lg:text-start lg:text-4xl xl:max-w-[500px]'>
            Sign up for amazing health and lifestyle deals
          </h1>
          <Input
            size='lg'
            radius='full'
            type='email'
            isRequired
            classNames={{
              input: ['py-6'],
              inputWrapper: [
                'h-max',
                'pr-2',
                'bg-white',
                'focus-within:bg-white',
                'focus:bg-white',
                'hover:bg-white',
              ],
            }}
            endContent={
              <Button
                color='primary'
                className='px-10 lg:px-12'
                radius='full'
                size='lg'
              >
                Shop & Order
              </Button>
            }
            placeholder='Enter your email address'
          />
        </div>
      </CardBody>
    </Card>
  );
};
