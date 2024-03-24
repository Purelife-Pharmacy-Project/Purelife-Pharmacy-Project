import { IconFilter } from '@/components/icons/IconFilter';
import { filteredCategories } from '@/helpers/utils';
import { useGetCategories, useGetProducts, useQueryParams } from '@/hooks';
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
  categoryId?: string;
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
  const { loadingCategories, categories } = useGetCategories();
  const { setQuery, removeQuery } = useQueryParams();
  const currentPath = usePathname();

  const allowedCategories = ['health', 'beauty', 'supermarket', 'general'];
  const isShopPage = currentPath === '/shop';

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

  const handleSelectCategory = (categoryId: string) => {
    if (categoryId === 'all') {
      removeQuery(['categoryId']);
    } else {
      setQuery({ categoryId });
    }
  };

  return (
    <>
      <Button
        size={'lg'}
        radius={'full'}
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
                  <ProductsPriceRange
                    loading={false}
                    onRefetch={refetchProducts}
                  />

                  {isShopPage && (
                    <RadioGroup
                      isDisabled={loadingCategories || loadingProducts}
                      label='Select category'
                      onChange={(e) => handleSelectCategory(e.target.value)}
                    >
                      {filteredCategories(categories, allowedCategories)?.map(
                        (category, index) => (
                          <Radio key={index} value={category.id}>
                            {category.name}
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
