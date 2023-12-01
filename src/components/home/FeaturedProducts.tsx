'use client';
import { useGetProducts } from '@/hooks';
import { FC } from 'react';
import { FeaturedProduct } from './FeaturedProduct';
import { Section } from './Section';

interface FeaturedProductsProps {
  title?: string;
  products?: {
    id: string;
    name: string;
    price: number;
    image: string;
  }[];
}

export const FeaturedProducts: FC<FeaturedProductsProps> = ({
  title,
  products,
}) => {
  const { products: allProducts, loadingProducts } = useGetProducts();
  return (
    <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
      <Section className='bg-white'>
        <div className='grid gap-10'>
          <h1 className='text-center text-2xl font-bold text-header-100 lg:text-4xl'>
            {title ? title : 'Featured Products'}
          </h1>

          <div className='grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
            {Array.from({ length: 3 })
              .fill(0)
              .map((_, index) => (
                <FeaturedProduct
                  key={index}
                  name='Amino Pep 200ml'
                  price={2550}
                  image='/images/dummy-imagee.png'
                />
              ))}
          </div>
        </div>
      </Section>
    </div>
  );
};
