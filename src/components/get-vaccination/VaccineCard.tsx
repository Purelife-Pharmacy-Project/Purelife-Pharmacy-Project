import React from 'react';
import { Product } from '@/services/products/types';
import { useCartStore } from '@/hooks';
import { Button, Image } from '@nextui-org/react';
import NextLink from 'next/link';
import { IconCart } from '../icons/IconCart';
import Link from 'next/link';

export const VaccineCard: React.FC<{ product: Product; baseUrl: string }> = ({
  product,
  baseUrl,
}) => {
  const { addToCart } = useCartStore();

  return (
    <div className='flex w-full flex-col rounded-xl'>
      <div className='relative mb-5 flex w-full items-center justify-center rounded-2xl bg-primaryLight py-14'>
        <Link href={`${baseUrl}/${product.id}`}>
          <Image
            alt=''
            src={product.image_1024}
            width={100}
            height={207}
            className=''
          />
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
          <IconCart color={'#686868'} />
        </Button>
      </div>

      <p className='mb-2 font-medium text-header-100 lg:text-xl'>
        {product.name}
      </p>
      <p className='font-bold text-header-100 lg:text-xl'>{product.amount}</p>
    </div>
  );
};
