import { IconShare } from '@/components/icons/IconShare';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import { FC } from 'react';
import { TransactionDetailsBlock } from '../TransactionDetailsBlock';

interface SubscriptionDetailsModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  subscription: {
    medication: string;
    refillFrequency: string | number;
  };
}

export const SubscriptionDetailsModal: FC<SubscriptionDetailsModalProps> = ({
  isOpen,
  onOpenChange,
  subscription,
}) => {
  return (
    <div>
      <Modal
        size='xl'
        className='p-3'
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <p className='text-xl font-bold text-header-100'>
                  Subscription
                </p>
              </ModalHeader>
              <ModalBody>
                <div className='divide grid divide-y divide-gray-200'>
                  <TransactionDetailsBlock
                    title='Medication'
                    content={subscription?.medication}
                  />
                  <TransactionDetailsBlock
                    title='Refill Frequency'
                    content={subscription?.refillFrequency}
                  />
                </div>
              </ModalBody>
              <ModalFooter className='flex items-center gap-4'>
                <Button
                  radius={'full'}
                  size={'lg'}
                  color='primary'
                  className='px-8'
                >
                  Print receipt
                </Button>

                <Button isIconOnly variant='light' onPress={onClose}>
                  <IconShare size={24} color='content' />
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
