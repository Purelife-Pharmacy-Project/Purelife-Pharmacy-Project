import { Modal, ModalContent } from '@nextui-org/react';
import { FC } from 'react';

type CustomPrescriptionFormProps = {
  isOpen: boolean;
  onOpenChange: () => void;
};

export const CustomPrescriptionForm: FC<CustomPrescriptionFormProps> = ({
  isOpen,
  onOpenChange,
}) => {
  return (
    // form will go here
    <Modal isOpen={isOpen} hideCloseButton onClose={onOpenChange}>
      <ModalContent className='pb-8 pt-8'>
        {(onClose) => <p>Form will go here</p>}
      </ModalContent>
    </Modal>
  );
};
