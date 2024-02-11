'use client';
import { ConfirmationModal } from '@/components/cart/modals/ConfirmationModal';
import { IconX } from '@/components/icons/IconX';
import { toNaira } from '@/helpers/utils';
import { CartType } from '@/services/cart/types';
import { Button, Card, CardBody, Image, Link } from '@nextui-org/react';
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
        {/* mobile */}
        <div className='flex w-full items-center justify-between gap-4 md:hidden'>
          <div className='grid w-full gap-4'>
            <div className='flex items-center gap-4'>
              <Image
                className='h-14 w-14 object-cover'
                radius='md'
                src={product.product.imageInBinary}
                alt={product.product.name}
              />
              <Link
                href={`/cart/${product.product.id}`}
                className='text-body max-w-[200px] break-words text-sm capitalize'
              >
                {product.product.name?.toLowerCase()}
              </Link>

              <Button
                isIconOnly
                size='sm'
                onPress={() => setOpenConfirmationModal(true)}
                variant='flat'
                className='flex flex-grow justify-end rounded-full bg-transparent'
              >
                <IconX color='primary' />
              </Button>
            </div>

            <div className='flex w-full items-center justify-between gap-2'>
              <ProductQuantity cartItem={product} />
              <p className='text-lg font-medium'>
                {toNaira(product.product.price * product.quantity)}
              </p>
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className='hidden items-center md:grid md:grid-flow-col md:grid-cols-[2fr_5fr_2fr_1fr_3fr]'>
          <Image
            width={80}
            height={80}
            className='object-contain md:max-h-14'
            radius='md'
            src={product.product.imageInBinary}
            alt={product.product.name}
          />

          <Link
            href={`/cart/${product.product.id}`}
            className='text-body break-words capitalize md:max-w-[400px]'
          >
            {product.product.name?.toLowerCase()}
          </Link>

          <p className='font-medium'>
            {toNaira(product.product.price * product.quantity)}
          </p>
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
