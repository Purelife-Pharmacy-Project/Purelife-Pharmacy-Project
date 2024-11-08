'use client';

import React from 'react';
import { useGetProductsByCategoryId } from '@/hooks';
import ProductRow from '@/components/home/ProductRow';
import { ProductLoadingSkeleton } from '@/components/home/Skeletons';
import { LabTestCard } from '@/components/book-lab-test/LabTestCard';

type Prop = {};

const CATEGORY_ID = '18';

const SummerDeals: React.FC<Prop> = () => {
  const { products: allProducts, loadingProducts } = useGetProductsByCategoryId(
    { categoryId: CATEGORY_ID, limit: 10, offset: 35 }
  );
  return (
    <>
    <ProductRow
      title='Summer Deal! Enjoy up to 30%'
      products={allProducts}
      isLoading={loadingProducts}
      emptyMessage='Oops. No products yet'
      ProductComp={({ product }) => (
        <LabTestCard product={product} baseUrl='/telehealth/book-lab-test' />
      )}
      loader={<ProductLoadingSkeleton />}
      allowOverflow={false}
      price={false}
      variant={undefined}
      />
    </>
    
  );
};

export default SummerDeals;
