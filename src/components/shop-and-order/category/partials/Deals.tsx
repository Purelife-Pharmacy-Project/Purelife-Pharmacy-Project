'use client';
import { IconChevronLeft } from '@/components/icons/IconChevronLeft';
import { filteredCategories } from '@/helpers/utils';
import { useGetCategories, useQueryParams } from '@/hooks';
import { Radio, RadioGroup } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';
import { FC, useEffect, useRef, useState } from 'react';

type DealsProps = {};

export const Deals: FC<DealsProps> = () => {
  const { categories, loadingCategories } = useGetCategories();
  const { setQuery, removeQuery } = useQueryParams();
  const currentCategory = useSearchParams().get('category');

  const allowedCategories = [
    'health',
    'beauty',
  ];

  const displayCategories: any = {
    health: 'Hot New Offers',
    beauty: 'Best Selling Products',
  };

  const [selectedValue, setSelectedValue] = useState<string>('all');
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<string>('0');

  useEffect(() => {
    if (!currentCategory) {
      removeQuery(['category']);
    } else {
      setSelectedValue(currentCategory.toLowerCase());
    }
  }, [currentCategory, removeQuery]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
  }, [selectedValue, handleSelectCategory]);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight - 5}px`);
    } else {
      setHeight('0');
    }
  }, [isOpen, categories]);

  return (
    <section>
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="font-semibold text-header-100 mb-3">Deals</span>
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
          onValueChange={(value) => setSelectedValue(value)}
          classNames={{
            label: 'font-semibold text-header-100 cursor-pointer',
          }}
        >
          {allowedCategories.map((category) => {
            const filteredCategory = categories?.find(
              (cat) => cat.name.toLowerCase() === category
            );
            return (
              filteredCategory && (
                <Radio
                  key={filteredCategory.name}
                  className="capitalize text-[#797979]"
                  value={category}
                >
                  {displayCategories[category]}
                </Radio>
              )
            );
          })}
        </RadioGroup>
      </div>
    </section>
  );
};
