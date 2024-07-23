'use client';

import React from 'react';
import { Section } from '@/components/home/Section';
import { Button, Image } from '@nextui-org/react';
import IconShoppingCart from '@/components/icons/IconShoppingCart';
import { useCartStore } from '@/hooks';
import { Product } from '@/services/products/types';
import NextLink from 'next/link';

type Prop = { product: Product };

const TestDetail: React.FC<Prop> = ({ product }) => {
  const { addToCart } = useCartStore();

  return (
    <Section className='flex flex-col justify-center gap-x-16 gap-y-10 bg-transparent py-5 md:flex-row lg:py-20'>
      <Image
        width={470}
        height={470}
        className='w-full max-w-[300px] rounded-lg md:min-w-[350px] lg:min-w-[500px] xl:min-w-[470px]'
        src={product.image_1024}
        alt=''
      />
      <div className='flex w-full max-w-[528px] flex-col text-header-100'>
        <h1 className='mb-6 text-xl lg:text-[36px]'>{product?.name}</h1>
        <p className='mb-5 text-sm leading-[30px] lg:text-base'>
          {product?.description}
        </p>
        <p>Price:</p>
        <h3 className='mb-10 text-2xl lg:text-[36px]'>₦{product?.lst_price}</h3>
        <div className='flex flex-col gap-3 xl:flex-row'>
          <Button
            color='primary'
            radius='full'
            size='lg'
            startContent={<IconShoppingCart />}
            className='px-8'
            onClick={() =>
              addToCart({
                product,
                id: product?.id,
                quantity: 1,
              })
            }
          >
            <span className='flex gap-3.5'>
              Add to cart
              <span>-</span>
              <span>₦{product.lst_price}</span>
            </span>
          </Button>
          <Button
            as={NextLink}
            radius='full'
            size='lg'
            className='px-8'
            color='primary'
            variant='bordered'
            href={`/cart/${product.id}`}
          >
            <span className='flex gap-3.5 text-header-200'>
              Proceed to checkout
              <span>-</span>
              <span>₦{product.lst_price}</span>
            </span>
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default TestDetail;
