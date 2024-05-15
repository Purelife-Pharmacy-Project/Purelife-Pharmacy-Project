import { IconFilter } from '@/components/icons/IconFilter';
import { filteredCategories } from '@/helpers/utils';
import { useGetCategories, useQueryParams } from '@/hooks';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Radio,
  RadioGroup,
  useDisclosure,
} from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import { ProductsPriceRange } from './ProductsPriceRange';

type MobileProductsByPriceProps = {
  loadingProducts?: boolean;
};

export const MobileProductsByPrice: FC<MobileProductsByPriceProps> = ({
  loadingProducts,
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { loadingCategories, categories } = useGetCategories();
  const { setQuery, removeQuery } = useQueryParams();
  const currentPath = usePathname();

  const allowedCategories = ['health', 'beauty', 'supermarket', 'general'];
  const isShopPage = currentPath === '/shop';

  const handleSelectCategory = (category: string) => {
    if (category === 'all') {
      removeQuery(['category']);
    } else {
      setQuery({ category: category?.toLowerCase() });
    }
  };

  return (
    <>
      <Button
        size={'lg'}
        radius={'full'}
        isDisabled={loadingCategories || !categories || loadingProducts}
        className={'ml-auto w-full border border-gray-300'}
        variant={'bordered'}
        onPress={onOpen}
        endContent={<IconFilter color={'header-100'} size={24} />}
      >
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
                <div className='grid gap-4'>
                  <ProductsPriceRange />

                  {isShopPage && (
                    <RadioGroup
                      label='Select category'
                      onChange={(e) => handleSelectCategory(e.target.value)}
                    >
                      {filteredCategories(categories, allowedCategories)?.map(
                        (category, index) => (
                          <Radio key={index} value={category.name}>
                            {category.name?.toLowerCase()}
                          </Radio>
                        )
                      )}
                    </RadioGroup>
                  )}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  color='primary'
                  fullWidth
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
