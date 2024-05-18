'use client';
import { Card, CardBody } from '@nextui-org/react';
import { FC } from 'react';
import { ProductsPriceRange } from './ProductsPriceRange';
import { ProductSortDropdown } from '@/components/shop-and-order/category/partials/ProductsSortDropdown';

type ProductsFilterContainerProps = {};

export const ProductsFilterContainer: FC<
  ProductsFilterContainerProps
> = ({}) => {
  return (
    <>
      <Card shadow='none' className='hidden h-max bg-primaryLight lg:block'>
        <CardBody>
          <h1 className='mb-4 text-2xl font-semibold text-header-100'>
            Filter
          </h1>

          <div className='grid gap-4'>
            <ProductSortDropdown />

            <ProductsPriceRange />
          </div>
        </CardBody>
      </Card>
    </>
  );
};
