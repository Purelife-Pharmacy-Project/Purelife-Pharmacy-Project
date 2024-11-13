'use client';
import { CheckBox } from '@/components/checkbox/Checkbox';
import { IconAllCategories } from '@/components/icons/IconAllCategories';
import { IconChevronLeft } from '@/components/icons/IconChevronLeft';
import { useQueryParams } from '@/hooks';
import { useSearchParams } from 'next/navigation';
import { FC, useEffect, useRef, useState } from 'react';
type ProductSortDropdownProps = {};

export const ProductSortDropdown: FC<ProductSortDropdownProps> = () => {
  const { setQuery, removeQuery } = useQueryParams();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category') || undefined;
  // const currentCategory = new URLSearchParams(window.location.search).get('category'); // Getting category from the URL query

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

  const handleSelectCategory = (category: string) => {
    if (category.toLowerCase() === 'all') {
      removeQuery(['category']);
      setChecks(new Array(displayCategories.length).fill(false)); // Reset checks when 'All Categories' is selected
    } else {
      setQuery({ category: category.toLowerCase() });
      setChecks(
        displayCategories.map(
          (_: any, i: any) => i === displayCategories.indexOf(category)
        )
      ); // Set check for selected category
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
  }, [isOpen]);

  return (
    <section className='border-b border-[#E7E7E7] border-opacity-50 pb-3'>
      <div
        className='flex cursor-pointer items-center justify-between'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className='mb-3 font-semibold text-header-100'>Categories</span>
        {isOpen ? (
          <div className='-rotate-90'>
            <IconChevronLeft />
          </div>
        ) : (
          <div className='rotate-90'>
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
          <div
            onClick={() => {
              if (item === 'All Categories') {
                setSelectedValue('all');
              } else {
                setSelectedValue(item);
              }
            }}
            key={index}
            className='flex item-center cursor-pointer gap-3'
          >
            {item === 'All Categories' ? (
              <IconAllCategories className="my-auto" />
            ) : (
              <CheckBox
                id={index}
                checked={checks[index]}
                onChange={() => {
                  if (item === 'All Categories') {
                    setSelectedValue('all');
                  } else {
                    setSelectedValue(item);
                  }
                }}
              />
            )}
            <p className='text-[15px] font-[400] text-[#797979]'>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
