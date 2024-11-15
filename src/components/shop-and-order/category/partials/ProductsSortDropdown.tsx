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

  const displayCategories = [
    'Health',
    'Beauty',
    'Supermarket',
    'Vaccines',
    'All Categories',
  ];

  const [checks, setChecks] = useState<boolean[]>(
    new Array(displayCategories.length).fill(false)
  );
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<string>('0');

  const handleSelectCategory = (category: any) => {
    if (category?.toLowerCase() === 'all') {
      removeQuery(['category']);
      setChecks(new Array(displayCategories.length).fill(false));
    } else {
      setQuery({ category: category?.toLowerCase() });
      setChecks(
        displayCategories.map(
          (item) => item.toLowerCase() === category?.toLowerCase()
        )
      );
    }
  };

  useEffect(() => {
    // Set the initial state based on the query parameter
    if (currentCategory) {
      setChecks(
        displayCategories.map(
          (item) => item.toLowerCase() === currentCategory.toLowerCase()
        )
      );
    } else {
      setChecks(new Array(displayCategories.length).fill(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCategory]);

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
        {displayCategories.map((item, index) => (
          <div
            onClick={() => {
              handleSelectCategory(
                item === 'All Categories' ? 'all' : item
              );
            }}
            key={index}
            className='flex item-center cursor-pointer gap-3'
          >
            {item === 'All Categories' ? (
              <IconAllCategories className="my-auto" />
            ) : (
              <CheckBox
                id={item}
                checked={checks[index]}
                onChange={() =>
                  handleSelectCategory(
                    item === 'All Categories' ? 'all' : item
                  )
                }
              />
            )}
            <p className='text-[15px] font-[400] text-[#797979]'>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
