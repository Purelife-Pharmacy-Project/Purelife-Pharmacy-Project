'use client';
import { IconCart } from '@/components/icons/IconCart';
import { useCartStore } from '@/hooks';
import { Product } from '@/services/products/types';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Link,
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

type ProductCardProps = {
  product: Product;
  loading: boolean;
};

export const ProductCard: FC<ProductCardProps> = ({ product, loading }) => {
  const { addToCart } = useCartStore();
  const router = useRouter();

  return (
    <Card shadow='none' className='w-full' radius='lg'>
      <CardBody className='relative overflow-visible px-0 py-2'>
        <Button
          isIconOnly
          isDisabled={product.quantity === 0}
          onPress={() =>
            addToCart({
              id: String(product.id),
              unitsLeft: product.quantity as number,
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
          src={product.imageInBinary}
          classNames={{
            img: 'w-full h-full object-contain rounded-xl',
            wrapper: '!max-w-full flex justify-center !h-full !max-h-[200px]',
          }}
        />
      </CardBody>
      <CardFooter className='grid w-full gap-3 px-0'>
        <div className='flex flex-col gap-2'>
          <Link
            href={`/cart/${product.id}`}
            className='max-h-[50px] overflow-y-auto break-words font-semibold capitalize text-header-100'
          >
            {product.name?.toLowerCase()}
          </Link>
          <p className='max-w-[200px] break-words font-medium text-header-100'>
            {product.amount}
          </p>
        </div>

        <Button
          className='w-2/5 border-header-100 text-header-100 hover:border-primary hover:bg-primary/10 hover:text-primary'
          variant='bordered'
          isDisabled={loading}
          onPress={() => {
            addToCart({
              id: String(product.id),
              unitsLeft: product.quantity as number,
              product,
              quantity: 1,
            });
            router.push(`/cart/${product.id}`, { scroll: false });
          }}
        >
          Buy
        </Button>
      </CardFooter>
    </Card>
  );
};
