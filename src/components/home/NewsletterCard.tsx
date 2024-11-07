'use client';
import { Button, Card, CardBody, Input } from '@nextui-org/react';
import { FormEvent } from 'react';
import { toast } from 'sonner';
import { IconRocket } from '../icons/IconRocket';
import { Section } from './Section';
import { inputAuth, inputBorderedGray } from '@/theme';
import Image from 'next/image';
import { inputAuth, inputBorderedGray } from '@/theme';
import Image from 'next/image';

export const NewsLetterCard = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.info('Newsletters are coming soon.');
  };
  return (
    <Section className=''>
      <div
        style={{
          backgroundImage: 'url(/images/signup-deals-background.png)',
          backgroundPosition: 'center bottom 55%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '',
          borderRadius: '20px',
        }}
        className='w-full rounded-[20px] bg-[#F1F5EE] pt-8'
      >
        <div className='mx-auto flex w-[90%] md:w-[60%] flex-col items-center gap-6'>
          <Image
            src='/app-logo.png'
            alt='Purelife logo'
            width={147}
            height={68.271}
          />
          <h1 className='w-full text-center text-4xl font-bold'>
            Sign up for Amazing Health & Lifestyle Deals
          </h1>
          <p className='w-[60%] text-center text-[#5A5A5A]'>
            Get exclusive offers and discounts on wellness products straight to
            your inbox
          </p>
          <form
            onSubmit={handleSubmit}
            className='flex w-full flex-col items-center gap-5'
          >
            <div className='flex w-full flex-col items-center gap-6'>
              <Input
                type='text'
                isRequired
                placeholder='Full Name'
                radius='full'
                classNames={{
                  inputWrapper: [
                    'text-base',
                    'pr-2',
                    'shadow-none',
                    'bg-transparent',
                    'border border-[rgba(18, 18, 18, 0.1)] rounded-full py-7 mb-2',
                    'text-black capitalize',
                    'data-[hover=true]:bg-white',
                    'group-data-[focus=true]:bg-white',
                    'group-data-[active=true]:bg-white',
                  ],
                }}
                startContent={<div className='mx-1'></div>}
              />
              <Input
                type='email'
                isRequired
                placeholder='Email'
                classNames={{
                  inputWrapper: [
                    'pr-2',
                    'shadow-none',
                    'bg-transparent',
                    'border border-[rgba(18, 18, 18, 0.1)] rounded-full py-7 mb-2',
                    'text-black capitalize',
                    'data-[hover=true]:bg-white',
                    'group-data-[focus=true]:bg-white',
                    'group-data-[active=true]:bg-white',
                  ],
                }}
                startContent={<div className='mx-1'></div>}
              />
            </div>
            <Button
              className='mb-10 w-[30%] py-7'
              size='lg'
              radius='full'
              type='submit'
              color='primary'
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};
