'use client';
import { filteredCategories } from '@/helpers/utils';
import { useGetCategories, useQueryParams } from '@/hooks';
import { Button, Radio, RadioGroup } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

type ProductSortDropdownProps = {};

export const ProductSortDropdown: FC<ProductSortDropdownProps> = ({}) => {
  const { categories, loadingCategories } = useGetCategories();
  const { setQuery, removeQuery } = useQueryParams();
  const currentCategory = useSearchParams().get('category');

  const allowedCategories = [
    'health',
    'beauty',
    'supermarket',
    'general',
    'tests',
    'vaccines',
  ];

  const [selectedValue, setSelectedValue] = useState<string>('all');

  useEffect(() => {
    if (!currentCategory) {
      removeQuery(['category']);
    } else {
      setSelectedValue(currentCategory.toUpperCase());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectCategory = (category: string) => {
    if (String(category)?.toLowerCase() === 'all') {
      removeQuery(['category']);
    } else {
      setQuery({ category: category?.toLowerCase() });
    }
  };

  useEffect(() => {
    if (selectedValue) {
      handleSelectCategory(selectedValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedValue]);

  return (
    <>
      <section>
        <RadioGroup
          label='Category'
          value={selectedValue}
          onValueChange={(value) => setSelectedValue(value)}
          classNames={{
            label: 'font-semibold text-header-100',
          }}
        >
          {(filteredCategories(categories, allowedCategories) || []).map(
            (category) => (
              <Radio
                key={category.name}
                className='capitalize text-content'
                value={category.name}
              >
                {category.name?.toLowerCase()}
              </Radio>
            )
          )}
        </RadioGroup>
        {selectedValue ? (
          <div className='flex justify-end'>
            <Button
              size='sm'
              variant='faded'
              onPress={() => setSelectedValue('all')}
            >
              Reset
            </Button>
          </div>
        ) : null}
      </section>
    </>
  );
};
