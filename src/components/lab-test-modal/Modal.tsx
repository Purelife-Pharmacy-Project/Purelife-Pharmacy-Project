import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { IconX } from '../icons/IconX';
import { useClickOutside } from '@/helpers/utils';
import { Button, Link } from '@nextui-org/react';
import IconShoppingCart from '../icons/IconShoppingCart';
import { useCartStore } from '@/hooks';
import NextLink from 'next/link';

interface ModalProps {
  onClose: () => void;
  product: any;
}

const LabTestModal: React.FC<ModalProps> = ({ onClose, product }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(modalRef, btnRef, onClose);
  const { addToCart } = useCartStore();
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div
        ref={modalRef}
        className='w-[90%] rounded-[20px] bg-white p-6 md:w-[50%]'
      >
        <div className='mb-4 flex items-center justify-between'>
          <h2 className='max-w-[80%] overflow-hidden overflow-ellipsis whitespace-nowrap text-3xl font-bold'>
            {product?.name}
          </h2>

          <div className='cursor-pointer' onClick={onClose}>
            <IconX size={25} />
          </div>
        </div>
        <div ref={btnRef} className='flex w-full flex-col'>
          <p className='mb-5 text-sm leading-[30px] lg:text-base'>
            {product?.description}
          </p>
          <h3 className='mb-5 text-2xl font-semibold'>
            ₦{product?.lst_price}
          </h3>
          <div className='flex flex-col gap-3 xl:flex-row justify-between'>
            <Button
              radius='full'
              size='lg'
              className='px-8 border border-[#D74B42] text-[#D74B42] bg-white font-medium'
              onClick={() =>
              {
                addToCart({
                  product,
                  id: product?.id,
                  quantity: 1,
                })
                onClose()
              }
                
              }
            >
              <span className='flex gap-3.5'>
                Add to cart
              </span>
            </Button>
            <Button
              as={NextLink}
              radius='full'
              size='lg'
              className='px-8'
              color='primary'
              href={`/cart/${product.id}`}
            >
              <span className='flex gap-3.5'>
                Book Session
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabTestModal;
