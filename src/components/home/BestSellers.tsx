'use client';

import React from 'react';
import { useGetProductsByCategoryId } from '@/hooks';
import ProductRow from './ProductRow';
import ProductCard from '@/components/home/ProductCard';
import { ProductLoadingSkeleton } from '@/components/home/Skeletons';

type Prop = {};

const CATEGORY_ID = '24';

const BestSellers: React.FC<Prop> = () => {
  const { products: allProducts, loadingProducts } = useGetProductsByCategoryId(
    { categoryId: CATEGORY_ID, limit: 10 }
  );
  return (
    <ProductRow
      title='Shop best selling'
      moreLink='/shop?category=health-best-sellers'
      products={allProducts}
      isLoading={loadingProducts}
      emptyMessage='Oops. No products yet'
      ProductComp={ProductCard}
      loader={<ProductLoadingSkeleton />}
      productClassName='rounded-[20px] bg-primaryLight p-8'
      headerClassName='mx-auto'
      price
      variant="best sellers"
    />
  );
};

export default BestSellers;
