'use client';
import { ConfirmationModal } from '@/components/cart/modals/ConfirmationModal';
import { IconX } from '@/components/icons/IconX';
import { toNaira } from '@/helpers/utils';
import { CartType } from '@/services/cart/types';
import {
  Button,
  Card,
  CardBody,
  Image,
  Link,
  Tooltip,
} from '@nextui-org/react';
import { FC, useState } from 'react';
import { ProductQuantity } from './ProductQuantity';

type CartItemProps = {
  product: CartType;
};

export const CartItem: FC<CartItemProps> = ({ product }) => {
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);

  return (
    <Card shadow='none' className='w-full border border-gray-200'>
      <CardBody className='overflow-hidden'>
        <div className='grid grid-flow-col grid-cols-[2fr_5fr_2fr_1fr_3fr] items-center'>
          <Image
            width={80}
            height={80}
            className='max-h-14 object-contain'
            radius='md'
            src={product.product.imageInBinary}
            alt={product.product.name}
          />

          <Tooltip color='foreground' content={product.product.name}>
            <Link
              href={`/cart/${product.product.id}`}
              className='text-body max-w-[400px] break-words'
            >
              {product.product.name}
            </Link>
          </Tooltip>

          <p>{toNaira(product.product.price * product.quantity)}</p>
          <ProductQuantity cartItem={product} />
          <div className='flex items-center justify-end'>
            <Button
              isIconOnly
              onPress={() => setOpenConfirmationModal(true)}
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
