import React, { useState } from 'react';
import { Product } from '@/services/products/types';
import { useCartStore } from '@/hooks';
import { Button, Image } from '@nextui-org/react';
import NextLink from 'next/link';
import { IconCart } from '../icons/IconCart';
import Link from 'next/link';
import LabTestModal from '../lab-test-modal/Modal';

export const LabTestCard: React.FC<{ product: Product; baseUrl: string }> = ({
  product,
}) => {
  const { addToCart } = useCartStore();
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className='flex w-full flex-col items-center justify-center rounded-xl border border-[#E7E7E7] bg-white p-6'>
        <div className='flex w-full items-center justify-between'>
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
            <IconCart color={'#686868'} />
          </Button>
        </div>
        <div className='h-[80px] w-full'>
          {product.description}...
          <p
            onClick={() => {
              setShowModal(true);
            }}
            className='ml-2 cursor-pointer text-primary underline'
          >
            View More
          </p>
        </div>
        <div className='flex w-full items-end justify-between text-xl font-semibold'>
          {product.amount}{' '}
          <Button
            disabled={product.quantity === 0}
            as={NextLink}
            radius='full'
            size='lg'
            className='h-auto min-w-0 rounded-full bg-primary p-3 text-white'
            color='primary'
            href={`/cart/${product.id}`}
          >
            Book Session
          </Button>
        </div>
      </div>
      {showModal && (
        <LabTestModal
          onClose={() => {
            setShowModal(false);
          }}
          product={product}
        />
      )}
    </>
  );
};
