'use client';
import { IconX } from '@/components/icons/IconX';
import { CartType } from '@/services/cart/types';
import { Button, Card, CardBody, Image, Link } from '@nextui-org/react';
import { FC, useState } from 'react';
import { ProductQuantity } from './ProductQuantity';
import { ConfirmationModal } from '@/components/cart/modals/ConfirmationModal';
import { useQueryClient } from '@tanstack/react-query';

type CartItemProps = {
  product: CartType;
};

export const CartItem: FC<CartItemProps> = ({ product }) => {
  const queryClient = useQueryClient();
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);

  return (
    <Card shadow='none' className='w-full border border-gray-200'>
      <CardBody>
        <div className='grid grid-flow-col grid-cols-[2fr_5fr_2fr_1fr_3fr] items-center'>
          <Image
            width={79}
            height={75}
            radius='md'
            src={product.product.imageUrl}
            alt={product.product.name}
          />

          <Link
            href={`/cart/${product.id}`}
            className='text-body'
            onMouseEnter={() =>
              queryClient.prefetchQuery({
                queryKey: ['cart', product.id],
              })
            }
          >
            {product.product.name}
          </Link>
          <p>{product.product.amount}</p>
          <ProductQuantity product={product} />
          <div className='flex items-center justify-end'>
            <Button
              isIconOnly
              onClick={() => setOpenConfirmationModal(true)}
              variant='flat'
              className='rounded-full bg-transparent'
            >
              <IconX color='primary' />
            </Button>
          </div>
        </div>

        <ConfirmationModal
          isOpen={openConfirmationModal}
          productId={product.id}
          openChange={() => {
            setOpenConfirmationModal(!openConfirmationModal);
          }}
        />
      </CardBody>
    </Card>
  );
};
