'use client';
import { Product } from '@/services/products/types';
import { Card, CardBody, CardFooter, Image, Link } from '@nextui-org/react';
import { FC } from 'react';
import AddToCartBtn from '@/components/cart/AddToCartBtn';

type ProductCardProps = {
  product: Product;
  loading: boolean;
};

export const ProductCard: FC<ProductCardProps> = ({ product, loading }) => {
  return (
    <Card shadow='none' className='w-full' radius='lg'>
      <CardBody className='relative h-max overflow-visible p-0'>
        <Image
          alt={product.name}
          fallbackSrc='/images/purelife-fallback.png'
          src={product.image_1024}
          classNames={{
            img: 'w-full h-full object-contain',
            wrapper:
              '!max-w-full flex justify-center rounded-xl items-center !h-full !max-h-[200px]',
          }}
        />
      </CardBody>
      <CardFooter className='grid w-full gap-3 px-0'>
        <div className='flex flex-col gap-2'>
          <Link
            href={`/cart/${product.id}`}
            className='h-[60px] max-h-[60px] overflow-hidden text-ellipsis break-words font-semibold capitalize text-header-100 hover:underline'
          >
            {product.name?.toLowerCase()}
          </Link>
          <p className='max-w-[200px] break-words font-medium text-header-100'>
            {product.amount}
          </p>
        </div>

        <AddToCartBtn product={product} className='flex items-center gap-2' />

        {/* <Button
          className='border-header-100 text-header-100 hover:border-primary hover:bg-primary/10 hover:text-primary'
          variant='bordered'
          fullWidth
          isDisabled={loading}
          onPress={() => {
            addToCart({
              id: product.id,
              product,
              quantity: 1,
            });
            router.push(`/cart/${product.id}`, { scroll: false });
          }}
        >
          Buy now
        </Button> */}
      </CardFooter>
    </Card>
  );
};
