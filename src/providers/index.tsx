'use client';
import { NextUIProvider } from '@nextui-org/react';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from 'sonner';
import { ReactQueryProvider } from './reactQueryProvider';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <ReactQueryProvider>
        <NextTopLoader height={2} color='#FF0028' showSpinner />
        {children}
        <Toaster richColors className='text-center' position='bottom-center' />
      </ReactQueryProvider>
    </NextUIProvider>
  );
};
