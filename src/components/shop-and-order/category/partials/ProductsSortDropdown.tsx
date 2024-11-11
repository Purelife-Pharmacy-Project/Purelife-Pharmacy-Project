'use client';
import { CheckBox } from '@/components/checkbox/Checkbox';
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
    // 'general',
    // 'tests',
    'vaccines',
    'all',
  ];

  const displayCategories: any = [
    'Health',
    'Beauty',
    'Supermarket',
    'Vaccines',
    'All Categories',
  ];
  const [checks, setChecks] = useState<boolean[]>(
    new Array(displayCategories.length).fill(false)
  );
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
    <section className='border-b border-[#E7E7E7] border-opacity-50 pb-3'>
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
        className='flex flex-col gap-3'
      >
        {displayCategories.map((item: any, index: any) => (
          <div key={index} className='flex gap-3'>
            <CheckBox
              id={index}
              checked={checks[index]}
              onChange={() => {
                if (item === 'All Categories') {
                  setSelectedValue('all')
                  setChecks(checks.fill(false))
                }
                const updatedChecks = checks.map((_, i) => i === index);
                setChecks(updatedChecks);
                setSelectedValue(item);
              }} />
            <p className='text-[15px] text-[#797979] font-[400]'>{item}</p>
          </div>
        ))}

      </div>
    </section>
  );
};
