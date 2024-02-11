import { useGetProducts } from '@/hooks';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import { FC } from 'react';
import { ProductsPriceRange } from './ProductsPriceRange';

type MobileProductsByPriceProps = {
  categoryId: string;
  searchString: string;
  minPrice: string | undefined;
  maxPrice: string | undefined;
};

export const MobileProductsByPrice: FC<MobileProductsByPriceProps> = ({
  categoryId,
  searchString,
  minPrice,
  maxPrice,
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { refetch: refetchProducts, loadingProducts } = useGetProducts(
    categoryId as string,
    searchString,
    undefined,
    undefined,
    true,
    undefined,
    minPrice,
    maxPrice
  );

  return (
    <>
      <Button fullWidth variant='bordered' onPress={onOpen}>
        Filter
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1 text-header-100'>
                Filter by
              </ModalHeader>
              <ModalBody className='mb-4'>
                <ProductsPriceRange
                  loading={loadingProducts}
                  onRefetch={refetchProducts}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color='primary'
                  onPress={() => {
                    onClose();
                  }}
                >
                  Okay
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
