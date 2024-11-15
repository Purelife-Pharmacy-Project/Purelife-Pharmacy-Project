'use client';
import { useCartStore } from '@/hooks';
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
  productId: number;
};

export const ConfirmationModal: FC<ConfirmModalProps> = ({
  isOpen,
  openChange,
  productId,
}) => {
  const { removeFromCart } = useCartStore();

  const handleRemove = () => {
    removeFromCart(productId);
    setTimeout(() => {
      openChange();
    }, 300);
  };

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
                variant={'faded'}
                className={' text-header-100 lg:px-10'}
                onPress={openChange}
              >
                Cancel
              </Button>
              <Button
                radius='full'
                size='lg'
                color='primary'
                className={'lg:px-10'}
                onPress={handleRemove}
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
