'use client';

import React from 'react';
import { useCartStore, useGetProductsByCategoryId } from '@/hooks';
import { Button } from '@nextui-org/react';
import { Product } from '@/services/products/types';
import ProductRow from '@/components/home/ProductRow';
import { TestLoadingSkeleton } from '@/components/home/Skeletons';

type Prop = {};

const TestCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCartStore();

  return (
    <div className='flex min-w-[300px] max-w-[400px] flex-col gap-5 rounded-xl border border-[#D9D9D9] p-6 pb-3.5 lg:min-w-[400px] lg:p-9 lg:pb-5'>
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

const CATEGORY_ID = '18';

const ExploreTests: React.FC<Prop> = () => {
  const { products: allProducts, loadingProducts } = useGetProductsByCategoryId(
    { categoryId: CATEGORY_ID, limit: 10 }
  );

  return (
    <ProductRow
      title='Get a lab test today'
      moreLink='/shop?category=general-lab-tests'
      isLoading={loadingProducts}
      loader={<TestLoadingSkeleton />}
      ProductComp={TestCard}
      products={allProducts}
      emptyMessage='No tests available'
    />
  );
};

export default ExploreTests;
