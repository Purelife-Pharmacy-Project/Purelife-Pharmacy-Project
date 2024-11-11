'use client';
import { Card, CardBody } from '@nextui-org/react';
import { FC } from 'react';
import { ProductsPriceRange } from './ProductsPriceRange'
import { ProductSortDropdown } from './ProductsSortDropdown';
import { Deals } from './Deals';

type ProductsFilterContainerProps = {};

export const ProductsFilterContainer: FC<
  ProductsFilterContainerProps
> = ({}) => {
  return (
    <>
      <Card shadow='none' className='h-fit bg-white hidden lg:block border-r border-b border-[#E7E7E7] border-opacity-50 rounded-none pl-[15%]'>
        <CardBody className=''>
          <h1 className='mb-2 text-[18px] font-semibold text-header-100'>
            Filters
          </h1>

          <div className='grid gap-4'>
            <ProductSortDropdown />
            <ProductsPriceRange />
            {/* <Deals/> */}
          </div>
        </CardBody>
      </Card>
    </>
  );
};
