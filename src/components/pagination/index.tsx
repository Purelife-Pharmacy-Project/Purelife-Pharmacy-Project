import React, { useState, useRef } from 'react';
import { IconChevronLeft } from '../icons/IconChevronLeft';
import { useClickOutside } from '@/helpers/utils';

export interface OptionType {
  label: number;
  value: number;
}

export type PageType = boolean | { label: number; value: number };

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (currentPage: any) => void;
  handleNextPage: () => void;
  handlePrevPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  setCurrentPage,
  handlePrevPage,
  handleNextPage,
  totalPages,
}) => {
  const generatePageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(
          1,
          '...',
          currentPage - 1,
          currentPage,
          currentPage + 1,
          '...',
          totalPages
        );
      }
    }
    return pages;
  };

  const pageNumbers = generatePageNumbers();
  const pages: PageType[] = [
    currentPage > 3 && currentPage - 3 > 0
      ? { label: currentPage - 3, value: currentPage - 3 }
      : false,
    currentPage > 2 && currentPage - 2 > 0
      ? { label: currentPage - 2, value: currentPage - 2 }
      : false,
    currentPage > 1 && currentPage - 1 > 0
      ? { label: currentPage - 1, value: currentPage - 1 }
      : false,
    { label: currentPage, value: currentPage },
    currentPage + 1 <= totalPages
      ? { label: currentPage + 1, value: currentPage + 1 }
      : false,
    currentPage + 2 <= totalPages
      ? { label: currentPage + 2, value: currentPage + 2 }
      : false,
    currentPage + 3 <= totalPages
      ? { label: currentPage + 3, value: currentPage + 3 }
      : false,
  ].filter((page): page is { label: number; value: number } => page !== false);
  
  const [selectDropdown, setSelectDropdown] = useState(false);
  const pageSelectButtonRef = useRef<HTMLDivElement | null>(null);
  const pageSelectPopupRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(pageSelectPopupRef, pageSelectButtonRef, () =>
    setSelectDropdown(false)
  );
  return (
    <section className={`flex w-full justify-between py-5`}>
      <div className={`flex items-center gap-4`}>
        <span className='text-sm font-medium text-[#333333]'>Page</span>
        <div className='relative w-fit'>
          <span
            ref={pageSelectButtonRef}
            onClick={() => {
              setSelectDropdown(!selectDropdown);
            }}
            className='flex items-center gap-2 rounded-[2px] border border-[#DDDDDD] px-2 text-sm font-medium text-[#333333]'
          >
            {currentPage}
            <IconChevronLeft
              color='[#FF0028]'
              style={{ transform: 'rotate(270deg)' }}
              className='h-[25px] w-[20px] cursor-pointer'
            />
          </span>
          {selectDropdown && (
            <div
              ref={pageSelectPopupRef}
              className='scrollbar-none absolute right-0 top-[35px] z-[99] mt-1 flex max-h-48 w-[50px] flex-col gap-2 overflow-y-auto rounded-lg border border-gray-200 bg-[#FFFFFF] p-2 shadow-lg'
            >
              {pages.map((page: any) => (
                <div
                  key={page.label}
                  className='flex h-fit cursor-pointer items-center justify-between rounded-[5px] bg-primaryLight p-3 py-1 pl-2 hover:bg-gray-200'
                  onClick={() => {
                    setCurrentPage(page.value);
                    setSelectDropdown(false);
                  }}
                >
                  <span className='cursor-pointer text-sm font-medium text-gray-600'>
                    {page.value}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <span className='text-sm font-medium text-[#333333]'>
          of {totalPages}
        </span>
      </div>
      <div className={`flex items-center gap-3 font-medium`}>
        <span
          onClick={() => {
            if (currentPage > 5) {
              setCurrentPage(currentPage - 5);
            }
          }}
          className='flex rounded-[4px] bg-[#FF00280D]'>
          <IconChevronLeft
            color='[#FF0028]'
            style={{ transform: 'rotate(0deg)' }}
            className='h-[33px] w-[33px] cursor-pointer'
          />
          <IconChevronLeft
            color='[#FF0028]'
            style={{ transform: 'rotate(0deg)' }}
            className='-ml-6 h-[33px] w-[33px] cursor-pointer'
          />
        </span>
        <span
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
              handlePrevPage
            }
            ;
          }}
          className='mr-4 flex rounded-[4px] bg-[#FF00280D]'
        >
          <IconChevronLeft
            color='[#FF0028]'
            style={{ transform: 'rotate(0deg)' }}
            className='h-[33px] w-[33px] cursor-pointer'
          />
        </span>
        {pageNumbers.map((page, index) =>
          page === '...' ? (
            <span key={index}>...</span>
          ) : (
            <span
              key={index}
              onClick={() => {
                setCurrentPage(page);
                // setPage(Number(page));
              }}
              className={`${
                page === currentPage
                  ? 'rounded-full bg-[#FF0028] leading-[0.5] text-[#FFFFFF]'
                  : ''
              } cursor-pointer p-3 hover:rounded-full hover:bg-[#FF0028] hover:leading-[0.5] hover:text-[#FFFFFF]`}
            >
              {page}
            </span>
          )
        )}
        <span
          onClick={() => {
            if (currentPage < totalPages) {
              setCurrentPage(currentPage + 1);
              handleNextPage
            }
          }}
          className='ml-4 flex rounded-[4px] bg-[#FF00280D]'
        >
          <IconChevronLeft
            color='[#FF0028]'
            style={{ transform: 'rotate(180deg)' }}
            className='h-[33px] w-[33px] cursor-pointer'
          />
        </span>
        <span
          onClick={() => {
            if (totalPages > 5) {
              setCurrentPage(currentPage + 5);
            }
          }}
          className='flex rounded-[4px] bg-[#FF00280D]'>
          <IconChevronLeft
            color='[#FF0028]'
            style={{ transform: 'rotate(180deg)' }}
            className='h-[33px] w-[33px] cursor-pointer'
          />
          <IconChevronLeft
            color='[#FF0028]'
            style={{ transform: 'rotate(180deg)' }}
            className='-ml-6 h-[33px] w-[33px] cursor-pointer'
          />
        </span>
      </div>
    </section>
  );
};

export { Pagination };
