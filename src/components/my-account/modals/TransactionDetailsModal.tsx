import { IconShare } from '@/components/icons/IconShare';
import { TransactionDetailsBlock } from '@/components/my-account/TransactionDetailsBlock';
import { IAccountTransaction } from '@/services/user/types';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/modal';
import { Button } from '@nextui-org/react';
import { FC } from 'react';

interface TransactionDetailsModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  transaction: IAccountTransaction | undefined;
}
export const TransactionDetailsModal: FC<TransactionDetailsModalProps> = ({
  isOpen,
  onOpenChange,
  transaction,
}) => {
  return (
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
                Order ID: {transaction?.orderId}
              </p>
            </ModalHeader>
            <ModalBody>
              <div className='divide grid divide-y divide-gray-200'>
                <TransactionDetailsBlock
                  title='Description'
                  content={transaction?.description}
                />
                <TransactionDetailsBlock
                  title='Status'
                  content={transaction?.status}
                />
                <TransactionDetailsBlock
                  title='Price'
                  content={transaction?.amount}
                  contentClass={'font-bold'}
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
  );
};
