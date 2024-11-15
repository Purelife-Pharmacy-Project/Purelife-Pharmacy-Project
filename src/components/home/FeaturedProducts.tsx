'use client';
import { ProductCardSkeleton } from '@/components/shop-and-order/category/skeletons/ProductCardSkeleton';
import { useGetFeaturedProducts } from '@/hooks';
import { Button, Link } from '@nextui-org/react';
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
  const { products: allProducts, loadingFeaturedProducts } =
    useGetFeaturedProducts();

  return (
    <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
      <Section className='bg-white'>
        <div className='grid gap-10'>
          <h1 className='text-center text-2xl font-bold text-header-100 lg:text-4xl'>
            {title ? title : 'Featured Products'}
          </h1>

          {loadingFeaturedProducts ? (
            <div className='grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
              {/* <IconSpinner color='primary' /> */}
              {Array(3)
                .fill(0)
                .map((_, index) => (
                  <ProductCardSkeleton key={index} />
                ))}
            </div>
          ) : (
            <div className='grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
              {allProducts?.map((product) => (
                <FeaturedProduct key={product.id} product={product} />
              ))}
            </div>
          )}

          {(!loadingFeaturedProducts && !allProducts) ||
          allProducts?.length === 0 ? (
            <p className='text-center text-sm text-header-100'>
              Oops. No products yet
            </p>
          ) : null}
        </div>
      </Section>

      <div className='mt-10 flex justify-center'>
        <Button as={Link} href='/shop' radius='full' size='lg' color='primary'>
          Shop & Order
        </Button>
      </div>
    </div>
  );
};
