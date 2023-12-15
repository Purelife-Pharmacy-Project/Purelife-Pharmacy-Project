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
