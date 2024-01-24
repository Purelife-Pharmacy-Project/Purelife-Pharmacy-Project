import { Section } from '@/components/home/Section';
import { Spinner } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

export default function AppLoading() {
  return (
    <>
      <main className='grid w-screen gap-6'>
        <div className='grid h-[calc(100vh-260px)] items-center justify-center'>
          <Section
            className='relative flex
    w-max flex-col items-center justify-center gap-4 lg:flex lg:h-full'
          >
            <Link href='/'>
              <Image
                src='/app-logo.png'
                priority
                alt='Purelife logo'
                width={147}
                loading='eager'
                height={68.271}
              />
            </Link>
            <Spinner color='primary' />
          </Section>
        </div>
      </main>
    </>
  );
}
