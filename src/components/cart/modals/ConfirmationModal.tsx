'use client';
import { useRemoveCartItem } from '@/hooks';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from '@nextui-org/react';
import { FC } from 'react';

type ConfirmModalProps = {
  isOpen: boolean;
  openChange: () => void;
  productId: string;
};

export const ConfirmationModal: FC<ConfirmModalProps> = ({
  isOpen,
  openChange,
  productId,
}) => {
  const { loadingRemoveCartItem, removeCartItem, isSuccess } =
    useRemoveCartItem();

  if (isSuccess) {
    openChange();
  }

  return (
    <Modal onOpenChange={openChange} isOpen={isOpen}>
      <ModalContent>
        <ModalHeader>
          <p className='text-2xl font-bold text-header-100'>
            Delete This Item?
          </p>
        </ModalHeader>

        <ModalBody>
          <p className='text-content'>
            Are you sure you want to remove this item from your cart?
          </p>

          <div className='flex justify-end pb-4'>
            <div className='flex gap-4'>
              <Button
                radius='full'
                size='lg'
                variant={'bordered'}
                className={
                  'border-header-100 bg-white text-header-100 lg:px-10'
                }
                onClick={openChange}
              >
                Cancel
              </Button>
              <Button
                radius='full'
                size='lg'
                color='primary'
                className={'lg:px-10'}
                onClick={() => removeCartItem(productId)}
              >
                Remove item
              </Button>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
