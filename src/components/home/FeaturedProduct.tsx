'use client';
import { Button, Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import { FC } from 'react';

interface FeaturedProductProps {
  name: string;
  price: number;
  image: string;
}

export const FeaturedProduct: FC<FeaturedProductProps> = ({
  name,
  price,
  image,
}) => {
  return (
    <Card shadow='none' className='w-full' radius='lg'>
      <CardBody className='overflow-visible px-0 py-2 md:px-3'>
        <div>
          <Image alt={name} className='rounded-xl object-cover' src={image} />
        </div>
      </CardBody>
      <CardFooter className='flex w-full justify-between'>
        <div>
          <p className='text-lg font-semibold text-header-100'>{name}</p>
          <p className='font-medium text-header-100'>₦{price}</p>
        </div>
        <Button
          className='border-header-100 text-header-100'
          variant='bordered'
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};
