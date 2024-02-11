'use client';
import { useQueryParams } from '@/hooks';
import { Pagination } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

type ProductsPaginationProps = {
  totalPages: number;
  loading?: boolean;
  color?:
    | 'default'
    | 'warning'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger';
  className?: string;
};

export const ProductsPagination: FC<ProductsPaginationProps> = ({
  totalPages,
  loading,
  color,
  className,
}) => {
  const { setQuery } = useQueryParams();
  const [currentPage, setInitialPage] = useState<number>(1);
  const [noOfPages, setNoOfPages] = useState<number>(totalPages);

  const page = useSearchParams().get('pageIndex');

  useEffect(() => {
    if (page) {
      const newPage = Number(page);
      setInitialPage(newPage);
    }
    if (totalPages) {
      setNoOfPages(totalPages);
    }
  }, [page, totalPages]);

  return (
    <div className='mt-10 flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-0'>
      <div>
        {!loading && (
          <div className='flex gap-1'>
            Showing Page
            <span className='font-medium'>{currentPage}</span>
            of <span className='font-medium'>{totalPages}</span>
          </div>
        )}
      </div>
      {noOfPages > 1 ? (
        <Pagination
          isDisabled={loading}
          onChange={(value) => setQuery({ pageIndex: value })}
          page={currentPage}
          className={className}
          total={noOfPages}
          color={color}
        />
      ) : null}
    </div>
  );
};
