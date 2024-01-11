import { Product } from '@/services/products/types';
import { Card, CardBody } from '@nextui-org/react';
import { FC } from 'react';
import { ProductSkeleton } from '../skeletons/ProductSkeleton';
import { ProductCard } from './ProductCard';
import { ProductsPagination } from './ProductPagination';

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

      <ProductsPagination totalPages={totalPages} />
    </Card>
  );
};
