import { ProductSkeleton } from '@/components/shop-and-order/category/skeletons/ProductSkeleton';
import { Product } from '@/services/products/types';
import { Card, CardBody } from '@nextui-org/react';
import { FC } from 'react';
import { ProductCard } from './ProductCard';

type ProductsListProps = {
  products: Product[] | undefined;
  loadingProducts: boolean;
};

export const ProductsList: FC<ProductsListProps> = ({
  products,
  loadingProducts,
}) => {
  return (
    <Card shadow='none' className='w-full'>
      <CardBody className='lg:p-0'>
        {loadingProducts ? (
          <ProductSkeleton />
        ) : (
          <div className='grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
        {products?.length === 0 && !loadingProducts && (
          <div className='text-center'>
            <p>Oops. No products found</p>
          </div>
        )}
      </CardBody>
    </Card>
  );
};
