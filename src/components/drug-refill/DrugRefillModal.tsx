import { Product } from '@/services/products/types';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from '@nextui-org/react';
import React, { FC } from 'react';
import { Quantity } from './Quantity';

type DrugRefillModalProps = {
  product: Product | undefined;
  isOpen: boolean;
  openChange: () => void;
  productQuantity: number;
  setProductQuantity: (value: number) => void;
  handleAddSubscription: () => void;
};
export const DrugRefillModal: FC<DrugRefillModalProps> = ({
  product,
  openChange,
  isOpen,
  productQuantity,
  setProductQuantity,
  handleAddSubscription,
}) => {
  return (
    <Modal size='2xl' onOpenChange={openChange} isOpen={isOpen}>
      <ModalContent>
        <ModalHeader>
          <p className='text-2xl font-bold text-header-100'>
            About the product
          </p>
        </ModalHeader>

        <ModalBody>
          <React.Fragment>
            <div className='flex flex-col gap-4'>
              <div className='flex justify-between border-b border-gray-300 py-4'>
                <p className='text-lg font-light text-header-100'>Medication</p>
                <p className='max-w-[300px] break-words text-right text-lg font-semibold capitalize text-header-100'>
                  {product?.name?.toLowerCase() || 'N/A'}
                </p>
              </div>
              <div className='flex justify-between border-b border-gray-300 py-4'>
                <p className='text-lg font-light text-header-100'>
                  Description
                </p>
                <p className='max-w-[300px] break-words text-right text-lg font-semibold capitalize text-header-100'>
                  {product?.description?.toLowerCase() || 'N/A'}
                </p>
              </div>
              <div className='flex justify-between border-b border-gray-300 py-4'>
                <p className='text-lg font-light text-header-100'>
                  Product Price
                </p>
                <p className='max-w-[300px] break-words text-right text-lg font-semibold lowercase text-header-100'>
                  {product?.amount || 'N/A'}
                </p>
              </div>
              <div className='flex justify-between border-b border-gray-300 py-4'>
                <p className='text-lg font-light text-header-100'>Quantity</p>
                <div
                  className={!product ? 'pointer-events-none opacity-50' : ''}
                >
                  <Quantity
                    quantity={productQuantity}
                    decreaseQuantity={() => {
                      if (productQuantity > 1) {
                        setProductQuantity(productQuantity - 1);
                      }
                    }}
                    increaseQuantity={() => {
                      if (productQuantity < 3) {
                        setProductQuantity(productQuantity + 1);
                      }
                    }}
                    totalQuantity={3}
                  />
                </div>
              </div>
            </div>

            <div className='my-5 flex lg:justify-end'>
              <div className='flex justify-center'>
                <Button
                  radius='full'
                  size='lg'
                  fullWidth
                  isDisabled={!product}
                  onPress={() => {
                    handleAddSubscription();
                    openChange();
                  }}
                  color='primary'
                  className='border-primary text-white'
                >
                  Add
                </Button>
              </div>
            </div>
          </React.Fragment>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
