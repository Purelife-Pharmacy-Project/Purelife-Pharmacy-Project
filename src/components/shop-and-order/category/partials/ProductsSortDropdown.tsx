'use client';
import { Select, SelectItem } from '@nextui-org/react';
import { FC } from 'react';

type ProductSortDropdownProps = {
  onRefetch: () => void;
};

export const ProductSortDropdown: FC<ProductSortDropdownProps> = ({
  onRefetch,
}) => {
  return (
    <Select
      labelPlacement='outside'
      color='default'
      label=''
      aria-labelledby='sort-products'
      size='lg'
      className='w-[200px]'
      defaultSelectedKeys={['0']}
    >
      <SelectItem className='text-content' key={0}>
        None
      </SelectItem>
      <SelectItem className='text-content' value={''} key={1}>
        Price - Low to High
      </SelectItem>
      <SelectItem className='text-content' value={''} key={2}>
        Price - High to Low
      </SelectItem>
      <SelectItem className='text-content' value={''} key={3}>
        Newest Arrivals
      </SelectItem>
      <SelectItem className='text-content' value={''} key={4}>
        Name
      </SelectItem>
    </Select>
  );
};
