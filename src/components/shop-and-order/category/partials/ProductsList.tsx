import { ProductSkeleton } from '@/components/shop-and-order/category/skeletons/ProductSkeleton';
import { useGetProductsByCategory } from '@/hooks';
import { Card, CardBody } from '@nextui-org/react';
import { FC } from 'react';
import { ProductCard } from './ProductCard';

type ProductsListProps = {
  categoryId: string;
  searchString: string;
  manufacturerId: string;
};

export const ProductsList: FC<ProductsListProps> = ({
  categoryId,
  searchString,
  manufacturerId,
}) => {
  const { products, loadingProducts } = useGetProductsByCategory(
    categoryId as string,
    searchString,
    10,
    0,
    false,
    undefined,
    manufacturerId
  );

  return (
    <Card shadow='none' className='w-full'>
      <CardBody>
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
