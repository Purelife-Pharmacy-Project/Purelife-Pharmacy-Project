"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Product } from '@/services/products/types';
import { Button, Image } from '@nextui-org/react';
import { IconHeart } from '@/components/icons/IconHeart';
import AddToCartBtn from '@/components/cart/AddToCartBtn';

type Prop = {
  product: Product;
};

const ProductCard: React.FC<Prop> = ({ product }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [maxNameWidth, setMaxNameWidth] = useState('100%');
  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      setMaxNameWidth(`${containerWidth * 0.9}px`);
    }
  }, []);
  return (
    <div className='flex flex-col gap-5'>
      <div ref={containerRef} className='relative bg-white h-40 rounded-[20px] p-4 lg:h-60 lg:p-10'>
        <Image
          alt={product.name}
          className='h-full w-full object-contain'
          classNames={{
            wrapper: '!max-w-full !h-full',
          }}
          radius='none'
          src={product.image_1024}
        />
      </div>
      <div className='flex justify-between gap-3 text-xs font-medium text-[#383838]'>
        <p style={{ maxWidth: maxNameWidth }} className='font-semibold truncate text-sm md:text-base'>{product.name}</p>
        {product.price && <p>{product.amount}</p>}
      </div>
      {product.price && <AddToCartBtn product={product} className='mt-auto' />}
    </div>
  );
};

export default ProductCard;