'use client';
import { randomId } from '@/helpers/utils';
import { useCartStore } from '@/hooks';
import { Product } from '@/services/products/types';
import { Button, Card, CardBody, Link } from '@nextui-org/react';
import { FC } from 'react';

type LabTestCardProps = {
  test: Product;
};

export const LabTestCard: FC<LabTestCardProps> = ({ test }) => {
  const { addToCart } = useCartStore();

  return (
    <Card shadow='none' className='bg-white'>
      <CardBody className='grid gap-4 lg:p-8'>
        <Link
          href={`/cart/${test.id}`}
          className='text-2xl font-semibold text-primaryGreenDark'
        >
          {test.name}
        </Link>
        <p className='text-sm text-content'>{test.description}</p>

        <div className='flex items-center justify-between'>
          <p className='text-xl font-semibold text-primaryGreenDark'>
            {test.amount}
          </p>

          <Button
            onPress={() =>
              addToCart({
                id: randomId(),
                unitsLeft: 3,
                product: test,
                quantity: 1,
              })
            }
            color='success'
            className='px-8 text-white'
          >
            Add to cart
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};
