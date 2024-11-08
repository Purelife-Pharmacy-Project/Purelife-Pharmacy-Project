'use client';

import React from 'react';
import { useGetProductsByCategoryId } from '@/hooks';
import ProductRow from './ProductRow';
import ProductCard from '@/components/home/ProductCard';
import { ProductLoadingSkeleton } from '@/components/home/Skeletons';

type Prop = {};

const CATEGORY_ID = '25';

const HotOffersProduct: React.FC<Prop> = () => {
  const { products: allProducts, loadingProducts } = useGetProductsByCategoryId(
    { categoryId: CATEGORY_ID }
  );
  return (
    <div>
      <ProductRow
        title='Hot New Offers Under ₦5,000'
        moreLink='/shop?category=health-new-offers'
        products={allProducts}
        isLoading={loadingProducts}
        emptyMessage='Oops. No products yet'
        ProductComp={ProductCard}
        loader={<ProductLoadingSkeleton />}
        productClassName='rounded-[20px] bg-[#F6F6F6] p-8'
        headerClassName='mx-auto'
        price={false}
        variant="hot offers"
      />
    </div>
  );
};

export default HotOffersProduct;