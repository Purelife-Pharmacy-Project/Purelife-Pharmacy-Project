'use client';

import React from 'react';
import { useCartStore, useGetProductsByCategoryId } from '@/hooks';
import { Button, Image } from '@nextui-org/react';
import { Product } from '@/services/products/types';
import ProductRow from '@/components/home/ProductRow';
import { TestLoadingSkeleton } from '@/components/home/Skeletons';
import Link from 'next/link';
import { IconCart } from '../icons/IconCart';

type Prop = {};

const TestCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCartStore();

  return (
    <div className='flex w-full flex-col rounded-xl'>
      <div className='relative mb-5 flex w-full items-center justify-center rounded-2xl border py-14'>
        <Image alt='' src={product.image_1024} width={211} height={180} className='' />
        <Button
          disabled={product.quantity === 0}
          onClick={() => {
            addToCart({
              id: product.id,
              product,
              quantity: 1,
            });
          }}
          className='absolute z-[99] right-6 top-6 h-auto min-w-0 rounded-full bg-primaryLight p-3'
        >
          <IconCart />
        </Button>
      </div>

      <p className='mb-2 font-medium text-header-100 lg:text-xl'>
        {product.name}
      </p>
      <p className='font-bold text-header-100 lg:text-xl'>{product.amount}</p>
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
      title='Explore Various Top Test'
      moreLink='/shop?category=general-lab-tests'
      isLoading={loadingProducts}
      loader={<TestLoadingSkeleton />}
      ProductComp={TestCard}
      products={allProducts}
      emptyMessage='No tests available'
      price
      allowOverflow={true}
      variant='top test'
    />
  );
};

export default ExploreTests;
