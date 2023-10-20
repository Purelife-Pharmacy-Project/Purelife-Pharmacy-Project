import { NextUIProvider } from '@nextui-org/react';
import { ReactQueryProvider } from './reactQueryProvider';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </NextUIProvider>
  );
};
