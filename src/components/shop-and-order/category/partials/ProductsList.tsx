'use client';
import { useQueryParams } from '@/hooks';
import { Product } from '@/services/products/types';
import { Card, CardBody, Pagination } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import { ProductSkeleton } from '../skeletons/ProductSkeleton';
import { ProductCard } from './ProductCard';

type ProductsListProps = {
  products: Product[] | undefined;
  loadingProducts: boolean;
  totalPages: number;
};

export const ProductsList: FC<ProductsListProps> = ({
  products,
  loadingProducts,
  totalPages,
}) => {
  const { setQuery } = useQueryParams();
  const [initialPage, setInitialPage] = useState(1);
  const [noOfPages, setNoOfPages] = useState(1);
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
  }, [totalPages]);

  return (
    <Card shadow='none' className='w-full'>
      <CardBody className='lg:p-0'>
        {loadingProducts ? (
          <ProductSkeleton />
        ) : (
          <div className='max-h-[800px] min-h-[500px]'>
            <div className='relative grid grid-flow-row grid-cols-1 gap-10 overflow-y-auto md:grid-cols-2 lg:grid-cols-3'>
              {products?.map((product) => (
                <ProductCard
                  loading={loadingProducts}
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
            {products?.length === 0 && !loadingProducts && (
              <div className='grid h-full w-full place-content-center text-center'>
                <p className='text-header-100'>No products found.</p>
              </div>
            )}
          </div>
        )}
      </CardBody>

      <div className='mt-10 flex w-full justify-end'>
        <Pagination
          onChange={(value) => setQuery({ pageIndex: value })}
          page={initialPage}
          isDisabled={loadingProducts}
          total={noOfPages}
        />
      </div>
    </Card>
  );
};
