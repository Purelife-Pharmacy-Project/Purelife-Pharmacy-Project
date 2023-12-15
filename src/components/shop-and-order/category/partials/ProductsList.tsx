import { ProductSkeleton } from '@/components/shop-and-order/category/skeletons/ProductSkeleton';
import { Product } from '@/services/products/types';
import { Card, CardBody } from '@nextui-org/react';
import { FC } from 'react';
import { ProductCard } from './ProductCard';

type ProductsListProps = {
  products: Product[] | undefined;
  loading: boolean;
};

export const ProductsList: FC<ProductsListProps> = ({ products, loading }) => {
  return (
    <Card shadow='none' className='w-full'>
      <CardBody>
        {loading ? (
          <ProductSkeleton />
        ) : (
          <div className='grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
            {products?.map((product) => (
              <ProductCard
                key={product.id}
                imageUrl={product.imageUrl}
                title={product.name}
                price={product.amount}
              />
            ))}
          </div>
        )}
        {products?.length === 0 && !loading && (
          <div className='text-center'>
            <p>Oops. No products found</p>
          </div>
        )}
      </CardBody>
    </Card>
  );
};
