import React, { useMemo } from 'react';
import { Button } from '@nextui-org/react';
import { Product } from '@/services/products/types';
import { useCartStore } from '@/hooks';
import clsx from 'clsx';

type Prop = {
  product: Product;
  className?: string;
};

const AddToCartBtn: React.FC<Prop> = ({ product, className }) => {
  const { addToCart, cart } = useCartStore();

  const outOfStock = useMemo(
    () =>
      product.quantity === 0 ||
      cart.find((item) => item.id === product.id)?.quantity ===
        product.quantity,
    [cart, product]
  );

  return (
    <Button
      className={clsx(
        'bg-primaryLight text-sm font-medium text-primary disabled:bg-transparent disabled:text-default',
        className
      )}
      radius='sm'
      color={!outOfStock ? 'primary' : 'default'}
      variant={!outOfStock ? 'solid' : 'bordered'}
      disabled={outOfStock}
      onClick={() => {
        addToCart({
          id: product.id,
          product,
          quantity: 1,
        });
      }}
    >
      {outOfStock ? 'Out of stock' : 'Add to cart'}
    </Button>
  );
};

export default AddToCartBtn;
