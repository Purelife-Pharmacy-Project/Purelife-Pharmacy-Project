'use client';
import { ProductQuantity } from '@/components/cart/ProductQuantity';
import { IconBin } from '@/components/icons/IconBin';
import { removeHtmlTags } from '@/helpers/utils';
import { useCartStore, useGetProductByProductId } from '@/hooks';
import { useStore } from '@/hooks/store';
import { CartType } from '@/services/cart/types';
import { Button, Card, CardBody, Image, Link } from '@nextui-org/react';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { IconSpinner } from '../icons/IconSpinner';
import { OrderSummary } from './OrderSummary';
import { ConfirmationModal } from './modals/ConfirmationModal';

export const CartItemDetails = () => {
  const itemId = usePathname().split('/')[2];
  const router = useRouter();
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const itemInStore = useStore(
    useCartStore,
    (state) => state?.cart.find((item) => item.product.id === Number(itemId))
  );
  const { addToCart } = useCartStore();

  const { product, loadingProduct } = useGetProductByProductId(itemId);

  return (
    <>
      {loadingProduct ? (
        <div className='flex w-full flex-col items-center justify-center gap-4'>
          <p>Fetching Item</p>
          <IconSpinner color='primary' />
        </div>
      ) : null}

      {!loadingProduct && !product ? (
        <Card shadow='sm' className='self-center'>
          <CardBody className='flex items-center justify-start gap-6'>
            <p className='text-center text-lg text-content'>
              Nothing to see here
            </p>
            <Button
              onPress={() => router.back()}
              color='primary'
              className='w-max'
            >
              Go Back
            </Button>
          </CardBody>
        </Card>
      ) : null}

      {product && (
        <div className='grid grid-cols-1 lg:grid-flow-col lg:grid-cols-2'>
          <Card shadow='none' className='w-full lg:w-[543px]'>
            <CardBody className='bg-primaryLight'>
              <div className='flex justify-center rounded-lg bg-white p-3'>
                <Image
                  alt='product image'
                  className='max-h-80 object-cover'
                  src={product?.imageInBinary}
                />
              </div>
            </CardBody>
          </Card>
          <Card shadow='none' className='h-full w-full'>
            <CardBody>
              <div className='grid h-full gap-4'>
                <h1 className='text-2xl font-semibold text-header-100'>
                  {product?.name}
                </h1>
                <p className='text-lg font-light text-header-100'>
                  {removeHtmlTags(product?.description)}
                </p>

                <p className='text-xl font-semibold text-primary'>
                  {product?.amount}
                </p>

                {itemInStore ? (
                  <div className='mt-6 flex items-center justify-between'>
                    <ProductQuantity cartItem={itemInStore as CartType} />

                    <Button
                      isIconOnly
                      onPress={() => setShowConfirmationModal(true)}
                      variant='faded'
                    >
                      <IconBin color='primary' />
                    </Button>

                    <ConfirmationModal
                      productId={Number(itemId)}
                      isOpen={showConfirmationModal}
                      openChange={() => {
                        setShowConfirmationModal(false);
                      }}
                    />
                  </div>
                ) : (
                  <Button
                    className='w-max px-10'
                    color='primary'
                    radius='full'
                    size='lg'
                    isDisabled={loadingProduct}
                    onPress={() => {
                      addToCart({
                        id: product.id,
                        product,
                        quantity: 1,
                      });
                    }}
                  >
                    Add to Cart
                  </Button>
                )}

                <Button
                  as={Link}
                  href='/telehealth/shop-and-order'
                  radius='md'
                  className={'self-end'}
                  size={'lg'}
                  color='default'
                  fullWidth
                >
                  Continue Shopping
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      )}

      {product && itemInStore ? (
        <div className='mt-20 grid w-full grid-flow-col grid-cols-1 lg:grid-cols-2'>
          <div className='hidden w-full lg:block'></div>
          <div className='flex w-full justify-end'>
            <OrderSummary />
          </div>
        </div>
      ) : null}
    </>
  );
};
