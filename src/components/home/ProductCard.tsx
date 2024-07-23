import React from 'react';
import { Product } from '@/services/products/types';
import { Button, Image } from '@nextui-org/react';
import { IconHeart } from '@/components/icons/IconHeart';
import AddToCartBtn from '@/components/cart/AddToCartBtn';

type Prop = {
  product: Product;
};

const ProductCard: React.FC<Prop> = ({ product }) => {
  return (
    <div className='flex min-w-[200px] max-w-[300px] flex-col gap-5'>
      <div className='relative h-40 rounded-lg border border-[#FFEAED] p-4 lg:h-60 lg:p-10'>
        <Button className='absolute right-2 top-3.5 z-20 h-10 min-h-0 w-10 min-w-0 rounded-full bg-[#F0F0F0] p-0'>
          <IconHeart className='text-[#FFA7B5]' size={20} />
        </Button>
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
        <p>{product.name}</p>
        <p>{product.amount}</p>
      </div>
      <AddToCartBtn product={product} className='mt-auto' />
    </div>
  );
};

export default ProductCard;
