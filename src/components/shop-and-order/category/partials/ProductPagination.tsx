'use client';
import { useQueryParams } from '@/hooks';
import { Pagination } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

type ProductsPaginationProps = {
  totalPages: number;
  loading?: boolean;
};

export const ProductsPagination: FC<ProductsPaginationProps> = ({
  totalPages,
  loading,
}) => {
  const { setQuery } = useQueryParams();
  const [initialPage, setInitialPage] = useState(1);
  const [noOfPages, setNoOfPages] = useState<number | undefined>(undefined);
  const page = useSearchParams().get('pageIndex');

  useEffect(() => {
    if (page) {
      const newPage = Number(page);
      setInitialPage(newPage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    if (totalPages) {
      setNoOfPages(totalPages);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='mt-10 flex w-full justify-end'>
      {noOfPages && (
        <Pagination
          isDisabled={loading}
          onChange={(value) => setQuery({ pageIndex: value })}
          page={initialPage}
          total={noOfPages}
        />
      )}
    </div>
  );
};
