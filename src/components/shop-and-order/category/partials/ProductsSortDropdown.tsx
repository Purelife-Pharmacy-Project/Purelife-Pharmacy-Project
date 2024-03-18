'use client';
import { IconFilter } from '@/components/icons/IconFilter';
import { filteredCategories } from '@/helpers/utils';
import { useGetCategories, useQueryParams } from '@/hooks';
import { selectBorderedGrayLight } from '@/theme';
import { Select, SelectItem, Selection } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

type ProductSortDropdownProps = {
  loadingProducts: boolean;
};

export const ProductSortDropdown: FC<ProductSortDropdownProps> = ({
  loadingProducts,
}) => {
  const { categories, loadingCategories } = useGetCategories();
  const { setQuery, removeQuery } = useQueryParams();
  const currentCategory = useSearchParams().get('categoryId');

  const allowedCategories = ['health', 'beauty', 'supermarket', 'general'];
  const [selectedValue, setSelectedValue] = useState<Selection>(
    new Set(['all'])
  );

  useEffect(() => {
    if (!currentCategory) {
      removeQuery(['categoryId']);
    } else {
      const set = new Set([currentCategory]);
      setSelectedValue(set);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectCategory = (categoryId: string) => {
    if (String(categoryId)?.toLowerCase() === 'all') {
      removeQuery(['categoryId']);
    } else {
      setQuery({ categoryId });
    }
  };

  useEffect(() => {
    if (selectedValue) {
      const id = Array.from(Array.from(selectedValue))[0];

      if (id) {
        handleSelectCategory(id as string);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedValue]);

  return (
    <Select
      labelPlacement='outside'
      placeholder='Filter By'
      color='default'
      isDisabled={loadingCategories || loadingProducts}
      label=''
      radius='full'
      classNames={selectBorderedGrayLight}
      aria-labelledby='sort-products'
      size='lg'
      selectedKeys={selectedValue}
      onSelectionChange={setSelectedValue}
      startContent={<IconFilter />}
      className='w-full lg:w-[200px]'
    >
      {(filteredCategories(categories, allowedCategories) || []).map(
        (category) => (
          <SelectItem
            key={category.id}
            className='capitalize text-content'
            value={category.name}
          >
            {category.name?.toLowerCase()}
          </SelectItem>
        )
      )}
    </Select>
  );
};
