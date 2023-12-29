'use client';
import { useGetProducts } from '@/hooks';
import { Card, CardBody } from '@nextui-org/react';
import { FC } from 'react';
import { ProductsPriceRange } from './ProductsPriceRange';

type ProductsFilterContainerProps = {
  categoryId: string;
  searchString: string;
  minPrice: string | undefined;
  maxPrice: string | undefined;
};

export const ProductsFilterContainer: FC<ProductsFilterContainerProps> = ({
  categoryId,
  searchString,
  minPrice,
  maxPrice,
}) => {
  const { refetch: refetchProducts } = useGetProducts(
    categoryId as string,
    searchString,
    undefined,
    undefined,
    true,
    undefined,
    minPrice,
    maxPrice
  );

  return (
    <Card shadow='none' className='h-max bg-primaryLight'>
      <CardBody>
        <h1 className='mb-4 text-2xl font-semibold text-header-100'>Filter</h1>

        <div className='grid gap-4'>
          {/* <ProductsManufacturersList
            categoryId={categoryId}
            manufacturerId={manufacturerId}
            onRefetch={refetchProducts}
          /> */}
          <ProductsPriceRange onRefetch={refetchProducts} />
        </div>
      </CardBody>
    </Card>
  );
};
