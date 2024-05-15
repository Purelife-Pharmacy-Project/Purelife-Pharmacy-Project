import { IconMedical } from '@/components/icons/IconMedical';
import { Button, Modal, ModalBody, ModalContent } from '@nextui-org/react';
import { FC } from 'react';

type SelectCustomerRoleProps = {
  isOpen: boolean;
  onOpenChange: () => void;
};

export const SelectCustomerRole: FC<SelectCustomerRoleProps> = ({
  isOpen,
  onOpenChange,
}) => {
  return (
    <Modal isOpen={isOpen} hideCloseButton onClose={onOpenChange}>
      <ModalContent className='pb-8 pt-8'>
        {(onClose) => (
          <>
            <ModalBody>
              <p className='mb-8 text-center text-2xl font-bold text-header-100'>
                Which of these best describe you?
              </p>

              {/* Content */}

              <div className='mx-auto flex gap-6'>
                <Button
                  className='flex h-[132px] w-[132px] flex-col items-center justify-center gap-3 bg-gray-100 text-center'
                  onClick={onClose}
                >
                  <div className='grid h-[47px] w-[47px] place-content-center rounded-full bg-white'>
                    <IconMedical color='primary' />
                  </div>
                  <p className=' font-lg font-light text-content'>
                    An Individual
                  </p>
                </Button>

                <Button
                  className='flex h-[132px] w-[132px] flex-col items-center justify-center gap-3 bg-gray-100 text-center'
                  onClick={onClose}
                >
                  <div className='grid h-[47px] w-[47px] place-content-center rounded-full bg-white'>
                    <IconMedical color='primary' />
                  </div>
                  <p className='font-lg font-light text-content'>
                    A Medical <br /> Practitioner
                  </p>
                </Button>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
