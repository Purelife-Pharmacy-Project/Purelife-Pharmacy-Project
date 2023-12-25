'use client';

import { Button } from '@nextui-org/react';
import { IconBin } from '@/components/icons/IconBin';
import { ProductQuantity } from '@/components/cart/ProductQuantity';
import { Product } from '@/services/products/types';
import { usePathname } from 'next/navigation';
import { useGetCartById } from '@/hooks';

export const CartItemDetails = () => {
  const currentPath = usePathname().split('/')[2];
  const { cart, isLoadingCart } = useGetCartById(currentPath);

  return (
    <div className='grid gap-4'>
      <h1 className='text-2xl font-semibold text-header-100'>
        {cart?.product.name}
      </h1>
      <p className='text-lg font-light text-header-100'>
        {cart?.product.description}
      </p>

      <p className='font-bold text-content'>{cart?.product.amount}</p>

      <div className='mt-6 flex items-center justify-between'>
        <ProductQuantity
          product={{
            id: cart?.id || '',
            product: cart?.product as Product,
            unitsLeft: cart?.unitsLeft || 0,
            quantity: cart?.quantity || 0,
          }}
        />

        <Button isIconOnly variant='faded'>
          <IconBin color='primary' />
        </Button>
      </div>
    </div>
  );
};
