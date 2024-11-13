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
      <div className='relative mb-5 flex w-full items-center justify-center border h-[170px] rounded-[20px] p-4 lg:h-60 lg:p-10 sm:p-0 sm:py-14'>
        <Image alt='' src={product.image_1024} width={211} height={180} className='sm:h-full sm:w-full w-auto h-[90px] object-contain' />
        <Button
          disabled={product.quantity === 0}
          onClick={() => {
            addToCart({
              id: product.id,
              product,
              quantity: 1,
            });
          }}
          className='absolute z-[99] sm:right-6 sm:top-6 right-3 top-3 h-auto min-w-0 rounded-full bg-[#F6F6F6] sm:p-3 p-2 cursor-pointer'
        >
          <IconCart color={'#686868'} className='w-[20px] h-[20px] sm:h-auto sm:w-auto'/>
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
