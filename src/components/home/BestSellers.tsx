'use client';

import React from 'react';
import { useGetFeaturedProducts } from '@/hooks';
import ProductRow from './ProductRow';
import ProductCard from '@/components/home/ProductCard';
import { ProductLoadingSkeleton } from '@/components/home/Skeletons';

type Prop = {};

const BestSellers: React.FC<Prop> = () => {
  const { products: allProducts, loadingFeaturedProducts } =
    useGetFeaturedProducts();
  return (
    <div>
      <ProductRow
        title='Shop best selling🤯'
        moreLink=''
        products={allProducts}
        isLoading={loadingFeaturedProducts}
        emptyMessage='Oops. No products yet'
        ProductComp={ProductCard}
        loader={<ProductLoadingSkeleton />}
      />
    </div>
  );
};

export default BestSellers;
