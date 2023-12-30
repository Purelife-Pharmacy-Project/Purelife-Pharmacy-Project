'use client';
import { IconCart } from '@/components/icons/IconCart';
import { IconShare } from '@/components/icons/IconShare';
import { randomId } from '@/helpers/utils';
import { useCartStore } from '@/hooks';
import { Product } from '@/services/products/types';
import { Button, Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

type ProductCardProps = {
  product: Product;
};

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCartStore();
  const router = useRouter();

  return (
    <Card shadow='none' className='w-full' radius='lg'>
      <CardBody className='relative overflow-visible px-0 py-2'>
        <Button
          isIconOnly
          isDisabled={!product.canBeSold}
          onClick={() =>
            addToCart({
              id: randomId(),
              unitsLeft: 3,
              product,
              quantity: 1,
            })
          }
          className='absolute right-4 top-5 z-20 rounded-full bg-primary/40 p-0 shadow-md'
        >
          <IconCart color='white' />
        </Button>

        <Image
          alt={product.name}
          className='rounded-xl object-center'
          src={product.imageInBinary}
        />
      </CardBody>
      <CardFooter className='grid w-full gap-3 px-0'>
        <div className='flex flex-col gap-2'>
          <p className='break-words font-semibold text-header-100'>
            {product.name}
          </p>
          <p className='max-w-[200px] break-words font-medium text-header-100'>
            {product.amount}
          </p>
        </div>
        <div className='flex justify-between'>
          <Button
            className='w-max border-header-100 text-header-100'
            variant='bordered'
            onClick={() => {
              const id = randomId();
              addToCart({
                id,
                unitsLeft: 3,
                product,
                quantity: 1,
              });
              router.push(`/cart/${id}`, { scroll: false });
            }}
          >
            Buy
          </Button>
          <Button variant='light' size='sm' className='w-max p-0'>
            <IconShare size={21} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
