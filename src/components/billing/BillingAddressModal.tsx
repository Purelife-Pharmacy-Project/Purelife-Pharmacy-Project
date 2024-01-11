import { BillingForm } from '@/components/billing/BillingForm';
import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react';
import { FC } from 'react';

type BillingAddressModalProps = {
  isOpen: boolean;
  openChange: () => void;
};

export const BillingAddressModal: FC<BillingAddressModalProps> = ({
  isOpen,
  openChange,
}) => {
  return (
    <Modal onOpenChange={openChange} isOpen={isOpen}>
      <ModalContent>
        <ModalHeader>
          <p className='text-2xl font-bold text-header-100'>
            Billing information
          </p>
        </ModalHeader>
        <ModalBody>
          <BillingForm onUpdated={openChange} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
