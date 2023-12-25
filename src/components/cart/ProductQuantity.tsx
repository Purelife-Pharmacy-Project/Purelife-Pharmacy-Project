import { useUpdateCart } from '@/hooks';
import { CartType } from '@/services/cart/types';
import { Button } from '@nextui-org/react';
import { FC } from 'react';

type ProductQuantityProps = {
  product: CartType;
};

export const ProductQuantity: FC<ProductQuantityProps> = ({ product }) => {
  const { updateCart } = useUpdateCart();

  return (
    <div className='flex w-[120px] items-center justify-center gap-2 rounded-full bg-primaryLight'>
      <Button
        isIconOnly
        isDisabled={
          product.unitsLeft === 0 || product.quantity > product.unitsLeft
        }
        onClick={() => {
          updateCart({
            cartId: product.id,
            payload: { quantity: product.quantity + 1 },
          });
        }}
        variant='flat'
        className='w-full rounded-l-full bg-primaryLight text-2xl'
      >
        +
      </Button>
      <p className='text-xl'>{product.quantity}</p>
      <Button
        isIconOnly
        isDisabled={product.quantity === 1}
        onClick={() =>
          updateCart({
            cartId: product.id,
            payload: { quantity: product.quantity - 1 },
          })
        }
        variant='flat'
        className='w-full rounded-r-full bg-primaryLight text-2xl'
      >
        -
      </Button>
    </div>
  );
};
