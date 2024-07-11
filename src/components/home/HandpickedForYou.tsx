'use client';

import React from 'react';
import { useGetFeaturedProducts } from '@/hooks';
import ProductRow from './ProductRow';
import ProductCard from '@/components/home/ProductCard';
import { ProductLoadingSkeleton } from '@/components/home/Skeletons';

type Prop = {};

const HandpickedForYou: React.FC<Prop> = () => {
  const { products: allProducts, loadingFeaturedProducts } =
    useGetFeaturedProducts();
  return (
    <div className='hidden lg:block'>
      <ProductRow
        title='Handpicked For You | Up to 60% OFF'
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

export default HandpickedForYou;
