'use client';
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
      <CardBody className='overflow-visible px-2 pt-2 md:px-3 md:py-2'>
        <Image
          alt={product.name}
          className='h-full w-full rounded-xl object-cover'
          classNames={{
            wrapper: '!max-w-full !h-full !max-h-[200px]',
          }}
          src={product.imageInBinary}
        />
      </CardBody>
      <CardFooter>
        <div className='flex w-full justify-between gap-2'>
          <div className='grid gap-2'>
            <p className='max-w-[230px] items-center break-words text-base font-semibold text-header-100'>
              {product.name}
            </p>
            <p className='font-medium text-header-100'>{product.amount}</p>
          </div>
          <Button
            className='items-center border-header-100 bg-primaryLight text-header-100'
            variant='bordered'
            onPress={() =>
              addToCart({
                id: String(product.id),
                unitsLeft: product.quantity as number,
                product,
                quantity: 1,
              })
            }
          >
            Add to Cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
