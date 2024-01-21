'use client';
import { randomId } from '@/helpers/utils';
import { useCartStore } from '@/hooks';
import { Product } from '@/services/products/types';
import { Button, Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import { FC } from 'react';

interface FeaturedProductProps {
  product: Product;
}

export const FeaturedProduct: FC<FeaturedProductProps> = ({ product }) => {
  const { addToCart } = useCartStore();

  return (
    <Card shadow='none' className='w-full bg-gray-100' radius='lg'>
      <CardBody className='overflow-visible px-0 py-2 md:px-3'>
        <Image
          alt={product.name}
          className='h-full w-full rounded-xl object-cover'
          classNames={{
            wrapper: '!max-w-full !h-full !max-h-[200px]',
          }}
          src={product.imageInBinary}
        />
      </CardBody>
      <CardFooter className='flex w-full justify-between gap-2'>
        <div className='grid gap-2'>
          <p className='max-w-[230px] break-words text-base font-semibold text-header-100'>
            {product.name}
          </p>
          <p className='font-medium text-header-100'>{product.amount}</p>
        </div>
        <Button
          className='border-header-100 bg-primaryLight text-header-100'
          variant='bordered'
          onPress={() =>
            addToCart({
              id: randomId(),
              unitsLeft: 3,
              product,
              quantity: 1,
            })
          }
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};
