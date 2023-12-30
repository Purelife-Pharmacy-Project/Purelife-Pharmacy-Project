'use client';

import { ProductQuantity } from '@/components/cart/ProductQuantity';
import { IconBin } from '@/components/icons/IconBin';
import { useCartStore } from '@/hooks';
import { useStore } from '@/hooks/store';
import { CartType } from '@/services/cart/types';
import { Button, Card, CardBody, Image } from '@nextui-org/react';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { DeliveryModeTabs } from './DeliveryModeTabs';
import { ConfirmationModal } from './modals/ConfirmationModal';

export const CartItemDetails = () => {
  const itemId = usePathname().split('/')[2];
  const router = useRouter();
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const item = useStore(useCartStore, (state) => state)?.getCartItem(itemId);

  return (
    <>
      {!item ? (
        <Card shadow='sm' className='self-center'>
          <CardBody className='flex items-center justify-start gap-6'>
            <p className='text-center text-lg text-content'>
              Nothing to see here
            </p>
            <Button
              onClick={() => router.back()}
              color='primary'
              className='w-max'
            >
              Go Back
            </Button>
          </CardBody>
        </Card>
      ) : (
        <div className='grid grid-cols-1 lg:grid-flow-col lg:grid-cols-2'>
          <Card shadow='none' className='w-full lg:w-[543px]'>
            <CardBody className='bg-primaryLight'>
              <div className='flex justify-center rounded-lg bg-white p-3'>
                <Image
                  alt='product image'
                  className='max-h-80 object-cover'
                  src={item.product.imageInBinary}
                />
              </div>
            </CardBody>
          </Card>
          <Card shadow='none' className='w-full'>
            <CardBody>
              <div className='grid gap-4'>
                <h1 className='text-2xl font-semibold text-header-100'>
                  {item?.product.name}
                </h1>
                <p className='text-lg font-light text-header-100'>
                  {item?.product.description}
                </p>

                <p className='font-bold text-content'>{item?.product.amount}</p>

                <div className='mt-6 flex items-center justify-between'>
                  <ProductQuantity cartItem={item as CartType} />

                  <Button
                    isIconOnly
                    onClick={() => setShowConfirmationModal(true)}
                    variant='faded'
                  >
                    <IconBin color='primary' />
                  </Button>

                  <ConfirmationModal
                    productId={itemId}
                    isOpen={showConfirmationModal}
                    openChange={() => setShowConfirmationModal(false)}
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      )}

      {item ? (
        <div className='mt-6 grid w-full grid-flow-col grid-cols-1 lg:grid-cols-2'>
          <div className='hidden w-full lg:block'></div>
          <DeliveryModeTabs />
        </div>
      ) : null}
    </>
  );
};
