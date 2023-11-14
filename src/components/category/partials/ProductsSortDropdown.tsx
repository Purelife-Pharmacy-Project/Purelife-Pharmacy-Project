'use client';
import { Select, SelectItem } from '@nextui-org/react';

export const ProductSortDropdown = () => {
  return (
    <Select
      size='lg'
      labelPlacement='outside'
      color='default'
      aria-label='Select a category'
      className='w-[200px]'
      defaultSelectedKeys={['0']}
    >
      <SelectItem className='text-content' key={0}>
        None
      </SelectItem>
      <SelectItem className='text-content' key={1}>
        Top Products
      </SelectItem>
      <SelectItem className='text-content' key={2}>
        Popular
      </SelectItem>
    </Select>
  );
};
