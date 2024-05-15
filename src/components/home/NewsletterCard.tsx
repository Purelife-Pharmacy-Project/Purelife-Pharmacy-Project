'use client';
import { Button, Card, CardBody, Input } from '@nextui-org/react';
import { FormEvent } from 'react';
import { toast } from 'sonner';
import { IconRocket } from '../icons/IconRocket';
import { Section } from './Section';

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
            <div className='flex w-full flex-col items-center justify-between gap-4 p-1 md:p-4 lg:p-20 xl:flex-row'>
              <h1 className='w-full text-center text-2xl font-bold text-header-100 md:text-start lg:text-4xl xl:max-w-[500px]'>
                Sign up for amazing health and lifestyle deals
              </h1>
              <form onSubmit={handleSubmit} className='grid w-full gap-4'>
                <div className='grid items-end gap-2 lg:grid-flow-col lg:gap-0'>
                  <Input
                    labelPlacement='outside'
                    size='lg'
                    label='Name'
                    radius='none'
                    variant='underlined'
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
                    variant='underlined'
                    isRequired
                    placeholder='Email'
                  />
                </div>
                <Button
                  className='lg:ml-auto'
                  size='lg'
                  radius='full'
                  type='submit'
                  color='primary'
                  endContent={<IconRocket />}
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </CardBody>
        </Card>
      </Section>
    </div>
  );
};
