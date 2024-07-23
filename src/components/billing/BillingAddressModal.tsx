import { BillingForm } from '@/components/billing/BillingForm';
import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react';
import { FC } from 'react';

type BillingAddressModalProps = {
  isOpen: boolean;
  openChange: () => void;
  isPickup?: string;
};

export const BillingAddressModal: FC<BillingAddressModalProps> = ({
  isOpen,
  openChange,
  isPickup,
}) => {
  return (
    <Modal onOpenChange={openChange} isOpen={isOpen} placement='center'>
      <ModalContent>
        <ModalHeader>
          <p className='text-2xl font-bold text-header-100'>
            Edit Billing information
          </p>
        </ModalHeader>
        <ModalBody>
          <BillingForm onUpdated={openChange} isPickup={isPickup} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
