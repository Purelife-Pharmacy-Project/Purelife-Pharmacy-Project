import { ProductCardSkeleton } from '@/components/shop-and-order/category/skeletons/ProductCardSkeleton';

export const ProductSkeleton = () => {
  return (
    <div className='grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
    </div>
  );
};
