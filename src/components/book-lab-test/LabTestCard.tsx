import React from 'react';
import { Product } from '@/services/products/types';
import { useCartStore } from '@/hooks';
import { Button } from '@nextui-org/react';
import NextLink from 'next/link';

export const LabTestCard: React.FC<{ product: Product; baseUrl: string }> = ({
  product,
  baseUrl,
}) => {
  const { addToCart } = useCartStore();

  return (
    <div className='flex w-full flex-col gap-5 rounded-xl border border-[#D9D9D9] p-6 pb-3.5 lg:p-9 lg:pb-5'>
      <p className='text-header-100 lg:text-xl'>{product.name}</p>
      <p className='mt-auto font-semibold text-header-100 lg:text-2xl'>
        {product.amount}
      </p>
      <div className='mt-auto flex gap-2.5'>
        <Button
          className='bg-primaryLight text-sm font-medium text-primary'
          radius='sm'
          // disabled={product.quantity === 0}
          onClick={() => {
            addToCart({
              id: product.id,
              product,
              quantity: 1,
            });
          }}
        >
          {/*{product.quantity === 0 ? 'Out of stock' : 'Add to cart'}*/}
          Add to cart
        </Button>
        <Button
          as={NextLink}
          className='bg-primaryLight text-sm font-medium text-primary'
          radius='sm'
          href={`${baseUrl}/${product.id}`}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};
