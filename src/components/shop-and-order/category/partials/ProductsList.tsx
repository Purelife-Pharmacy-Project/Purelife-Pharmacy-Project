import { Product } from '@/services/products/types';
import { Card, CardBody } from '@nextui-org/react';
import { FC } from 'react';
import { ProductSkeleton } from '../skeletons/ProductSkeleton';
import { ProductCard } from './ProductCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ProductCardSkeleton } from '@/components/shop-and-order/category/skeletons/ProductCardSkeleton';

type ProductsListProps = {
  products: Product[];
  loadingProducts: boolean;
  isFetchingNextPage?: boolean;
  fetchNextPage: () => void;
  hasNextPage: boolean;
};

export const ProductsList: FC<ProductsListProps> = ({
  products,
  loadingProducts,
  isFetchingNextPage,
  fetchNextPage,
  hasNextPage,
}) => {
  return (
    <Card shadow='none' className='w-full'>
      <CardBody className='lg:p-0'>
        {loadingProducts ? (
          <ProductSkeleton />
        ) : (
          <div className='max-h-[800px] min-h-[500px]'>
            <InfiniteScroll
              next={fetchNextPage}
              hasMore={hasNextPage}
              loader={
                <>
                  {Array(6)
                    .fill(0)
                    .map((_, index) => (
                      <ProductCardSkeleton key={index} />
                    ))}
                </>
              }
              dataLength={products?.length}
              className='relative grid grid-flow-row grid-cols-2 gap-10 overflow-y-auto md:grid-cols-2 lg:grid-cols-3'
            >
              {products?.map((product) => (
                <ProductCard
                  loading={loadingProducts}
                  key={product.id}
                  product={product}
                />
              ))}
            </InfiniteScroll>
            {products?.length === 0 && !loadingProducts && (
              <div className='grid h-full w-full place-content-center text-center'>
                <p className='text-header-100'>No products found.</p>
              </div>
            )}
          </div>
        )}
      </CardBody>
    </Card>
  );
};
