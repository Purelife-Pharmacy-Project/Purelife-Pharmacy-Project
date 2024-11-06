'use client';
import { IconChevronLeft } from '@/components/icons/IconChevronLeft';
import { filteredCategories } from '@/helpers/utils';
import { useGetCategories, useQueryParams } from '@/hooks';
import { Radio, RadioGroup } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';
import { FC, useEffect, useRef, useState } from 'react';
type ProductSortDropdownProps = {};

export const ProductSortDropdown: FC<ProductSortDropdownProps> = () => {
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
    'all',
  ];

  const displayCategories: any = {
    health: 'Health',
    beauty: 'Beauty',
    supermarket: 'Supermarket',
    general: 'General',
    tests: 'Tests',
    vaccines: 'Vaccines',
    all: 'All Categories',
  };

  const [selectedValue, setSelectedValue] = useState<string>('all');
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<string>('0');
  useEffect(() => {
    if (!currentCategory) {
      removeQuery(['category']);
      setSelectedValue('all');
    } else {
      setSelectedValue(currentCategory.toUpperCase());
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCategory]);

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

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight('0');
    }
  }, [isOpen, categories]); 
  return (
    <section className='border-b pb-3'>
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="font-semibold text-header-100 mb-3">Categories</span>
        {isOpen ? (
          <div className="-rotate-90">
            <IconChevronLeft />
          </div>
        ) : (
          <div className="rotate-90">
            <IconChevronLeft />
          </div>
        )}
      </div>
      <div
        ref={contentRef}
        style={{
          height,
          overflow: 'hidden',
          transition: 'height 0.3s ease-in-out',
        }}
      >
        <RadioGroup
          value={selectedValue}
          onValueChange={(value) => {
            setSelectedValue(value);
          }}
          classNames={{
            label: 'font-semibold text-header-100 cursor-pointer',
          }}
        >
          {(filteredCategories(categories, allowedCategories) || [])
            .sort((a, b) => {
              if (a.name.toLowerCase() === 'all') return 1;
              if (b.name.toLowerCase() === 'all') return -1;
              return 0;
            })
            .map((category) => (
              <Radio
                key={category.name}
                className="capitalize text-[#797979]"
                value={category.name}
              >
                {displayCategories[category.name?.toLowerCase()]}
              </Radio>
            ))}
        </RadioGroup>

      </div>
    </section>
  );
};
