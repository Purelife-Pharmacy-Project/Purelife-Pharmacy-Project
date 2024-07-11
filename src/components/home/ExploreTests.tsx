'use client';

import React from 'react';
import { useCartStore, useGetFeaturedProducts } from '@/hooks';
import { Button } from '@nextui-org/react';
import { Product } from '@/services/products/types';
import ProductRow from '@/components/home/ProductRow';
import { TestLoadingSkeleton } from '@/components/home/Skeletons';

type Prop = {};

const TestCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCartStore();

  return (
    <div className='flex flex-col gap-5 rounded-xl border border-[#D9D9D9] p-6 pb-3.5 lg:p-9 lg:pb-5'>
      <p className='text-header-100 lg:text-2xl'>{product.name}</p>
      <p className='font-semibold text-header-100 lg:text-2xl'>
        {product.amount}
      </p>
      <Button
        className='mt-auto bg-primaryLight text-sm font-medium text-primary'
        radius='sm'
        disabled={product.quantity === 0}
        onClick={() => {
          addToCart({
            id: product.id,
            product,
            quantity: 1,
          });
        }}
      >
        {product.quantity === 0 ? 'Out of stock' : 'Add to cart'}
      </Button>
    </div>
  );
};

const ExploreTests: React.FC<Prop> = () => {
  const { products: allProducts, loadingFeaturedProducts } =
    useGetFeaturedProducts();

  return (
    <ProductRow
      title='Explore Various top Test'
      moreLink=''
      isLoading={loadingFeaturedProducts}
      loader={<TestLoadingSkeleton />}
      ProductComp={TestCard}
      products={allProducts}
      emptyMessage='No tests available'
    />
  );
};

export default ExploreTests;
