'use client';
import { IconSuccessCheck } from '@/components/icons/IconSuccessCheck';
import { Modal, ModalContent } from '@nextui-org/react';
import { FC } from 'react';

type CustomPrescriptionSuccessProps = {
  isOpen: boolean;
  onOpenChange: () => void;
};
export const CustomPrescriptionSuccess: FC<CustomPrescriptionSuccessProps> = ({
  isOpen,
  onOpenChange,
}) => {
  return (
    <Modal isOpen={isOpen} hideCloseButton onClose={onOpenChange}>
      <ModalContent className='px-3 pb-8 pt-8'>
        {(onClose) => (
          <div className='grid gap-6'>
            <p className='px-3 text-center text-2xl font-bold text-header-100'>
              Success
            </p>

            <div className='mx-auto grid h-[111px] w-[111px] place-content-center rounded-full bg-gray-100'>
              <IconSuccessCheck size={80} />
            </div>

            <span className='mx-auto max-w-[186px] text-center text-sm text-content'>
              {' '}
              Your Subscription as been created successfully{' '}
            </span>
          </div>
        )}
      </ModalContent>
    </Modal>
  );
};
