'use client';
import { useGetProducts } from '@/hooks';
import { Button, Link } from '@nextui-org/react';
import { FC, useMemo } from 'react';
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
  const {
    products: allProducts,
    loadingProducts,
    isSuccess,
  } = useGetProducts();

  const featuredProducts = useMemo(() => {
    if (allProducts) {
      return allProducts.slice(0, 3);
    }
  }, [allProducts]);

  return (
    <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
      <Section className='bg-white'>
        <div className='grid gap-10'>
          <h1 className='text-center text-2xl font-bold text-header-100 lg:text-4xl'>
            {title ? title : 'Featured Products'}
          </h1>

          <div className='grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
            {featuredProducts?.map((product, index) => (
              <FeaturedProduct
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.imageUrl}
              />
            ))}
          </div>
        </div>
      </Section>

      <div className='mt-10 flex justify-center'>
        <Button
          color='primary'
          as={Link}
          href='/shop-and-order'
          className='px-8 py-8'
          radius='full'
          size='lg'
        >
          Shop & Order
        </Button>
      </div>
    </div>
  );
};
