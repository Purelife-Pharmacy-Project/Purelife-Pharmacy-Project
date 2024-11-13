'use client';
import { CheckBox } from '@/components/checkbox/Checkbox';
import { IconChevronLeft } from '@/components/icons/IconChevronLeft';
import { useGetCategories, useQueryParams } from '@/hooks';
import { FC, useEffect, useRef, useState } from 'react';
type DealsProps = {};

export const Deals: FC<DealsProps> = () => {
  const { categories } = useGetCategories();
  const { setQuery, removeQuery } = useQueryParams();

  const dealsCategories: any = [
    'Hot New Offers',
    'Best Selling Products',
  ];
  const [checks, setChecks] = useState<boolean[]>(
    new Array(dealsCategories.length).fill(false)
  );
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<string>('0');

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight('0');
    }
  }, [isOpen, categories]); 
  return (
    <section className='border-t border-[#E7E7E7] border-opacity-50 pt-3 pb-2'>
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
        className='flex flex-col gap-3'
      >
        {dealsCategories.map((item: any, index: any) => (
          <div key={index} className='flex gap-3'>
            <CheckBox
              id={index}
              checked={checks[index]}
              onChange={() => {
                const updatedChecks = checks.map((_, i) => i === index);
                setChecks(updatedChecks);
                if (index === 0) {
                  console.log('hot new offers')
                  setQuery({ category: 'health-new-offers'});
                }
                else if (index === 1) {
                  setQuery({ category: 'health-best-selling'});
                }
              }} />
            <p className='text-[15px] text-[#797979] font-[400]'>{item}</p>
          </div>
        ))}

      </div>
    </section>
  );
};
