'use client';

import React from 'react';
import { useGetFeaturedProducts } from '@/hooks';
import ProductRow from './ProductRow';
import ProductCard from '@/components/home/ProductCard';
import { ProductLoadingSkeleton } from '@/components/home/Skeletons';

type Prop = {};

const HotOffersProduct: React.FC<Prop> = () => {
  const { products: allProducts, loadingFeaturedProducts } =
    useGetFeaturedProducts();
  return (
    <div>
      <ProductRow
        title='Hot New Offers🔥'
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

export default HotOffersProduct;
