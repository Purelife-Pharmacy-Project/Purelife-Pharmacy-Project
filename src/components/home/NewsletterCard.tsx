'use client';
import { inputDefault } from '@/theme';
import { Button, Card, CardBody, Input } from '@nextui-org/react';
import { IconRocket } from '../icons/IconRocket';
import { Section } from './Section';
import { toast } from 'sonner';
import { FormEvent } from 'react';

export const NewsLetterCard = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.info('Newsletters are coming soon.');
  };
  return (
    <div className='lg:pb-10 lg:pt-[55px] xl:grid xl:justify-center'>
      <Section className='bg-white'>
        <Card shadow='none' fullWidth>
          <CardBody className='bg-primaryLight'>
            <div className='flex w-full flex-col items-center justify-between gap-4 p-1 md:p-4 lg:gap-0 lg:p-20 xl:flex-row'>
              <h1 className='w-full text-center text-2xl font-bold text-header-100 md:text-start lg:text-4xl xl:max-w-[500px]'>
                Sign up for amazing health and lifestyle deals
              </h1>
              <form onSubmit={handleSubmit} className='grid w-full gap-4'>
                <div className='grid items-end gap-2 lg:grid-flow-col lg:grid-cols-[5fr_5fr_2fr] lg:gap-0'>
                  <Input
                    labelPlacement='outside'
                    size='lg'
                    label='Name'
                    radius='none'
                    className='lg:!ounded-none !rounded-lg lg:!rounded-l-lg'
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
                    className='rounded-lg lg:rounded-none'
                    classNames={inputDefault}
                    isRequired
                    placeholder='Email'
                  />
                  <Button
                    className='rounded-lg lg:ml-auto lg:rounded-r-full'
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
