import { Button, Card, CardBody, Input } from '@nextui-org/react';
import { Section } from '../home/Section';

export const BookATestHero = () => {
  return (
    <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
      <Section className='bg-white'>
        <Card shadow='none'>
          <CardBody className='bg-primaryGreenLight'>
            <div className='grid w-full gap-4 p-1 md:p-4 lg:p-20'>
              <h1 className='w-full text-center text-3xl font-bold text-primaryGreenDark lg:text-4xl'>
                Sign up for amazing health and lifestyle deals
              </h1>

              <Input
                size='lg'
                radius='full'
                type='Search'
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
                    color='success'
                    className='px-10 text-white lg:px-12'
                    radius='full'
                    size='lg'
                  >
                    Shop & Order
                  </Button>
                }
                placeholder='Search all tests here'
              />
            </div>
          </CardBody>
        </Card>
      </Section>
    </div>
  );
};
