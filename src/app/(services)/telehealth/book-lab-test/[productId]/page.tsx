'use client';

import React from 'react';
import TestDetail from '@/components/book-lab-test/TestDetail';
import BookSession from '@/components/book-lab-test/BookSession';
import { HowItWorks } from '@/components/book-lab-test/HowItWorks';
import { IconBrowse } from '@/components/icons/IconBrowse';
import { IconHealthShield } from '@/components/icons/IconHealthShield';
import { IconAddNotification } from '@/components/icons/IconAddNotification';
import { ReportDrugReaction } from '@/components/ReportDrugReaction';
import { NewsLetterCard } from '@/components/home/NewsletterCard';
import { Footer } from '@/components/home/Footer';
import FAQ from '@/components/book-lab-test/FAQ';
import { useParams } from 'next/navigation';
import { useGetProductByProductId } from '@/hooks';
import { Skeleton } from '@nextui-org/react';

type Prop = {};

const howItWorksData: {
  title?: string;
  description: string;
  icon: JSX.Element;
}[] = [
  {
    description:
      'Determine what health issue or symptom you are experiencing and the type of test you think you might need.',
    icon: <IconBrowse size={48} color='primary' />,
  },
  {
    description:
      'Speak to a friendly pharmacist. Share your concerns and get advice on the right test for you.',
    icon: <IconHealthShield size={60} className='text-primary' />,
  },
  {
    description:
      "Follow our pharmacist's advice, buy the recommended test, and use it as instructed. If you need help, ask us.",
    icon: <IconAddNotification size={60} color='primary' />,
  },
];

const TestDetailPage: React.FC<Prop> = () => {
  const params = useParams();
  const { product, loadingProduct } = useGetProductByProductId(
    params.productId?.toString() || ''
  );

  return (
    <main className='grid gap-6'>
      {loadingProduct ? <Skeleton className='h-20 w-full' /> : null}
      {product ? <TestDetail product={product} /> : null}

      <BookSession />

      <HowItWorks data={howItWorksData} variant='primary' />

      <div className='invisible mb-4'></div>

      <FAQ />

      <div className='invisible mb-4'></div>

      <ReportDrugReaction />

      <NewsLetterCard />

      <Footer />
    </main>
  );
};

export default TestDetailPage;
