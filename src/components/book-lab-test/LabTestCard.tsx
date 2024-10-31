import React from 'react';
import { Product } from '@/services/products/types';
import { useCartStore } from '@/hooks';
import { Button, Image } from '@nextui-org/react';
import NextLink from 'next/link';
import { IconCart } from '../icons/IconCart';
import Link from 'next/link';

export const LabTestCard: React.FC<{ product: Product; baseUrl: string }> = ({
  product,
  baseUrl,
}) => {
  const { addToCart } = useCartStore();

  return (
    <div className='flex items-center justify-center p-6 bg-white w-full flex-col rounded-xl border border-[#E7E7E7]'>
        <div className='flex justify-between items-center w-full'>
          <p className='text-sm md:text-base lg:text-lg'>{product.name}</p>
           <Button
          disabled={product.quantity === 0}
          onClick={() => {
            addToCart({
              id: product.id,
              product,
              quantity: 1,
            });
          }}
          className='h-auto min-w-0 rounded-full bg-primaryLight p-3'
        >
          <IconCart />
        </Button>
      </div>
      <div className='h-[80px] w-full'>{product.description}...
        <Link href={`${baseUrl}/${product.id}`} className='text-primary underline ml-2'>
          View More
        </Link>
      </div>
      <div className='flex justify-between items-end w-full text-xl font-semibold'>
        {product.amount}{' '}
        <Button
          disabled={product.quantity === 0}
          onClick={() => {
            addToCart({
              id: product.id,
              product,
              quantity: 1,
            });
          }}
          className='h-auto min-w-0 rounded-full bg-primary text-white p-3'
        >
          Book Session
        </Button>
      </div>
       
    </div>
  );
};
