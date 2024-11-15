import { BillingPaymentCard } from '@/components/billing/BillingPaymentCard';
import { IconChevronLeft } from '@/components/icons/IconChevronLeft';
import { toNaira } from '@/helpers/utils';
import { Button, Modal, ModalBody, ModalContent } from '@nextui-org/react';
import { FC } from 'react';

interface BillingAndPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  toggleModal: () => void;
  amount: number;
}

export const BillingAndPaymentModal: FC<BillingAndPaymentModalProps> = ({
  isOpen,
  toggleModal,
  onClose,
  amount,
}) => {
  return (
    <Modal
      isDismissable
      isOpen={isOpen}
      onClose={toggleModal}
      size='4xl'
      hideCloseButton
    >
      <ModalContent>
        {(toggleModal) => (
          <>
            <ModalBody className='lg:p-12 lg:py-20'>
              <Button
                onPress={toggleModal}
                className='mr-auto mt-4 flex p-4 pl-0 md:mt-0'
                variant='light'
              >
                <IconChevronLeft color='content' size={32} />
                <span className='text-lg text-content'>Back</span>
              </Button>
              <div className='grid items-center gap-4 lg:grid-flow-col lg:grid-cols-2 lg:gap-0'>
                <div className='my-10 flex h-3/4 flex-col gap-4 lg:justify-between lg:gap-10'>
                  <div className='grid gap-2'>
                    <p className='text-2xl font-bold text-primary lg:text-3xl'>
                      Billing & Payment
                    </p>
                    <p className='text-lg font-light text-foreground lg:max-w-[270px]'>
                      Proceed to make for your doctor consultation
                    </p>
                  </div>

                  <div className='grid gap-2'>
                    <p className='text-sm text-foreground'>Consultation Fee</p>
                    <p className='text-3xl font-bold text-primary'>
                      $10/{toNaira(10000)}
                    </p>
                  </div>
                </div>

                <BillingPaymentCard
                  amount={amount}
                  shouldFetchAddresses={false}
                  onPaymentSuccess={onClose}
                />
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
