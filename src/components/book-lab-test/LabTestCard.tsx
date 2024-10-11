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
    <div className='flex w-full flex-col rounded-xl'>
      <div className='relative mb-5 flex w-full items-center justify-center rounded-2xl bg-primaryLight py-14'>
        <Link href={`${baseUrl}/${product.id}`}>
          <Image alt='' src='/images/vaccines/vaccine1.png' className='' />
        </Link>
        <Button
          disabled={product.quantity === 0}
          onClick={() => {
            addToCart({
              id: product.id,
              product,
              quantity: 1,
            });
          }}
          className='absolute right-6 top-6 h-auto min-w-0 rounded-full bg-white p-3'
        >
          <IconCart />
        </Button>
      </div>

      <p className='mb-2 font-medium text-header-100 lg:text-xl'>
        {product.name}
      </p>
      <p className='font-bold text-header-100 lg:text-xl'>{product.amount}</p>
      {/* <div className='mt-auto flex gap-2.5'> */}
      {/* <Button
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
          {product.quantity === 0 ? 'Out of stock' : 'Add to cart'}
          Add to cart
        </Button> */}
      {/* <Button
          as={NextLink}
          className='bg-primaryLight text-sm font-medium text-primary'
          radius='sm'
          href={`${baseUrl}/${product.id}`}
        >
          Learn More
        </Button> */}
      {/* </div> */}
    </div>
  );
};
