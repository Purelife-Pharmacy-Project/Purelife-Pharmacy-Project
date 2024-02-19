'use client';
import { useCartStore } from '@/hooks';
import { Product } from '@/services/products/types';
import { Button, Card, CardBody, Link } from '@nextui-org/react';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

type LabTestCardProps = {
  test: Product;
  color: 'primary' | 'success';
};

export const TelehealthProductCard: FC<LabTestCardProps> = ({
  test,
  color = 'primary',
}) => {
  const { addToCart } = useCartStore();

  return (
    <Card shadow='none' className='bg-white'>
      <CardBody className='grid gap-4 lg:p-8'>
        <Link
          href={`/cart/${test.id}`}
          className={twMerge(
            'text-2xl font-semibold',
            color === 'success' ? 'text-primaryGreenDark' : 'text-header-100'
          )}
        >
          {test.name}
        </Link>
        <p className='text-sm text-content'>{test.description}</p>

        <div className='flex flex-col items-start gap-2 md:flex-row md:justify-between md:gap-0 lg:items-center'>
          <p
            className={twMerge(
              'text-xl font-semibold',
              color === 'success' ? 'text-primaryGreenDark' : 'text-header-100'
            )}
          >
            {test.amount}
          </p>

          <Button
            disabled={test.quantity === 0}
            onPress={() =>
              addToCart({
                id: test.id,
                product: test,
                quantity: 1,
              })
            }
            color={color}
            className='px-8 text-white'
          >
            Add to cart
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};
