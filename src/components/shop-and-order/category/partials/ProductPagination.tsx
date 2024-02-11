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
  const [initialPage, setInitialPage] = useState<number>(1);
  const [noOfPages, setNoOfPages] = useState<number>(1);

  const page = useSearchParams().get('pageIndex');

  useEffect(() => {
    if (page) {
      const newPage = Number(page);
      console.log('newPage', newPage);
      setInitialPage(newPage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    if (totalPages) {
      setNoOfPages(totalPages);
    }
    if (page) {
      const newPage = Number(page);
      setInitialPage(newPage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='mt-10 flex w-full justify-end'>
      {noOfPages > 1 ? (
        <Pagination
          isDisabled={loading}
          onChange={(value) => setQuery({ pageIndex: value })}
          page={initialPage}
          className={className}
          total={noOfPages}
          color={color}
        />
      ) : null}
    </div>
  );
};
