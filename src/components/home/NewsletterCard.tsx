'use client';
import { inputDefault } from '@/theme';
import { Button, Card, CardBody, Input } from '@nextui-org/react';
import { IconRocket } from '../icons/IconRocket';
import { Section } from './Section';

export const NewsLetterCard = () => {
  return (
    <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
      <Section className='bg-white'>
        <Card shadow='none'>
          <CardBody className='bg-primaryLight'>
            <div className='flex w-full flex-col items-center justify-between gap-4 p-1 md:flex-row md:p-4 lg:gap-0 lg:p-20'>
              <h1 className='w-full text-center text-3xl font-bold text-header-100 lg:text-start lg:text-4xl xl:max-w-[500px]'>
                Sign up for amazing health and lifestyle deals
              </h1>
              <form
                onSubmit={(e) => e.preventDefault()}
                className='grid w-full gap-4'
              >
                <div className='grid grid-flow-col  grid-cols-[5fr_5fr_2fr] items-end'>
                  <Input
                    labelPlacement='outside'
                    size='lg'
                    label='Name'
                    radius='none'
                    className='rounded-none rounded-l-lg'
                    classNames={inputDefault}
                    type='text'
                    isRequired
                    placeholder='Name'
                  />
                  <Input
                    radius='none'
                    labelPlacement='outside'
                    size='lg'
                    label='Email Address'
                    type='email'
                    classNames={inputDefault}
                    isRequired
                    placeholder='Email'
                  />
                  <Button
                    className='ml-auto rounded-none rounded-r-full'
                    size='lg'
                    type='submit'
                    color='primary'
                    endContent={<IconRocket />}
                  >
                    Subscribe
                  </Button>
                </div>
              </form>
            </div>
          </CardBody>
        </Card>
      </Section>
    </div>
  );
};
