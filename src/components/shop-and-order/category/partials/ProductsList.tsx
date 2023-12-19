import { ProductSkeleton } from '@/components/shop-and-order/category/skeletons/ProductSkeleton';
import { useGetProductsByCategory } from '@/hooks';
import { Card, CardBody } from '@nextui-org/react';
import { FC } from 'react';
import { ProductCard } from './ProductCard';

type ProductsListProps = {
  categoryId: string;
};

export const ProductsList: FC<ProductsListProps> = ({ categoryId }) => {
  const { products, loadingProducts, isFetching } = useGetProductsByCategory(
    categoryId as string
  );

  return (
    <Card shadow='none' className='w-full'>
      <CardBody>
        {loadingProducts || isFetching ? (
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
        {products?.length === 0 && !loadingProducts && (
          <div className='text-center'>
            <p>Oops. No products found</p>
          </div>
        )}
      </CardBody>
    </Card>
  );
};
