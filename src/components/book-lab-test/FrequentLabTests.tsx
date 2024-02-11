'use client';
import { useGetLabTests } from '@/hooks/useLabTest';
import { FC } from 'react';
import { FeaturedProduct } from '../home/FeaturedProduct';
import { Section } from '../home/Section';
import { FrequentLabTestsSkeleton } from './skeleton/FrequentLabTestsSkeleton';

interface FrequentLabTestsProps {
  title?: string;
  products?: {
    id: string;
    name: string;
    price: number;
    image: string;
  }[];
}

export const FrequentLabTests: FC<FrequentLabTestsProps> = ({ title }) => {
  const { loadingLabTests, labTests } = useGetLabTests({
    pageSize: 3,
  });

  return (
    <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
      <Section className='bg-white'>
        <div className='grid gap-10'>
          <h1 className='text-center text-2xl font-bold text-header-100 lg:text-4xl'>
            {title ? title : 'Featured Products'}
          </h1>

          {loadingLabTests ? <FrequentLabTestsSkeleton /> : null}

          <div className='grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
            {labTests?.data?.map((test, index) => (
              <FeaturedProduct key={index} product={test} />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};
