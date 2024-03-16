'use client';
import { TawkMessenger } from '@/components/TawkMessenger';
import { NextUIProvider } from '@nextui-org/react';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from 'sonner';
import { ReactQueryProvider } from './reactQueryProvider';
import { WhatsappButton } from '@/components/WhatsappButton';
import React from 'react';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <ReactQueryProvider>
        <NextTopLoader height={2} color='#FF0028' showSpinner />
        {children}
        <Toaster richColors className='text-center' position='bottom-center' />
        <WhatsappButton />
        <TawkMessenger />
      </ReactQueryProvider>
    </NextUIProvider>
  );
};
