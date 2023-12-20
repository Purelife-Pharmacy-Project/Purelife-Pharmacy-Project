'use client';
import { useGetProductsByCategory } from '@/hooks';
import { Card, CardBody } from '@nextui-org/react';
import { FC } from 'react';
import { ProductsManufacturersFilter } from '@/components/shop-and-order/category/partials/ProductsManufacturersFilter';

type ProductsFilterContainerProps = {
  categoryId: string;
  searchString: string;
  manufacturerId: string;
};

export const ProductsFilterContainer: FC<ProductsFilterContainerProps> = ({
  categoryId,
  searchString,
  manufacturerId,
}) => {
  const { refetch: refetchProducts } = useGetProductsByCategory(
    categoryId as string,
    searchString,
    10,
    0,
    true,
    undefined,
    manufacturerId as string
  );

  return (
    <Card shadow='none' className='h-max bg-primaryLight'>
      <CardBody>
        <h1 className='mb-4 text-2xl font-semibold text-header-100'>Filter</h1>

        <div className='grid gap-4'>
          <ProductsManufacturersFilter
            categoryId={categoryId}
            manufacturerId={manufacturerId}
            onRefetch={refetchProducts}
          />
        </div>
      </CardBody>
    </Card>
  );
};
