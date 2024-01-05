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
  const page = useSearchParams().get('pageIndex') || 1;

  useEffect(() => {
    if (page) {
      setInitialPage(Number(page));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card shadow='none' className='w-full'>
      <CardBody className='lg:p-0'>
        {loadingProducts ? (
          <ProductSkeleton />
        ) : (
          <div className='grid max-h-[1000px] min-h-[1000px] grid-flow-row grid-cols-1 gap-10 overflow-y-auto md:grid-cols-2 lg:grid-cols-3'>
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
        {products?.length === 0 && !loadingProducts && (
          <div className='text-center'>
            <p>No products found.</p>
          </div>
        )}
      </CardBody>

      <div className='mt-10 flex w-full justify-end'>
        <Pagination
          onChange={(value) => setQuery({ pageIndex: value })}
          initialPage={initialPage}
          total={totalPages}
          isDisabled={loadingProducts}
        />
      </div>
    </Card>
  );
};
