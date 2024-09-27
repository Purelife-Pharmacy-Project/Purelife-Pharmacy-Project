'use client';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <main className='flex h-[calc(100dvh-140px)] flex-col items-center justify-center p-4'>
      <h1 className='mb-6 text-center text-lg'>
        Uh-oh, we couldn&apos;t find that page
      </h1>
      <Button
        radius='full'
        size='lg'
        color='primary'
        className={'font-medium'}
        href='/sign-in'
      >
        Go back
      </Button>
    </main>
  );
};

export default NotFound;
