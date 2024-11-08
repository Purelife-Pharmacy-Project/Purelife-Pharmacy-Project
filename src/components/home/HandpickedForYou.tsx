'use client';

import React from 'react';
import { useGetProductsByCategoryId } from '@/hooks';
import ProductRow from './ProductRow';
import ProductCard from '@/components/home/ProductCard';
import { ProductLoadingSkeleton } from '@/components/home/Skeletons';

type Prop = {};

const CATEGORY_ID = '15';

const HandpickedForYou: React.FC<Prop> = () => {
  const { products: allProducts, loadingProducts } = useGetProductsByCategoryId(
    { categoryId: CATEGORY_ID, limit: 10 }
  );
  return (
    <div className='hidden lg:block'>
      <ProductRow
        title='Handpicked For You | Up to 60% OFF'
        moreLink='/shop?category=discount'
        products={allProducts}
        isLoading={loadingProducts}
        emptyMessage='Oops. No products yet'
        ProductComp={ProductCard}
        loader={<ProductLoadingSkeleton />}
        price={false}
        variant={undefined}
      />
    </div>
  );
};

export default HandpickedForYou;
