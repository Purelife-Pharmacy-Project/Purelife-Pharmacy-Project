import ProductService from '@/services/products';
import { useQuery } from '@tanstack/react-query';

export const useGetProducts = (
  categoryId?: string,
  name?: string,
  pageSize?: number,
  pageIndex?: number,
  active?: boolean,
  productId?: string,
  minPrice?: string,
  maxPrice?: string
) => {
  const {
    data: products,
    isLoading,
    isRefetching,
    isSuccess,
    isError,
    refetch,
  } = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ['products', categoryId, name, minPrice, maxPrice],
    queryFn: () =>
      ProductService.getAllProducts({
        categoryId,
        name,
        pageSize,
        pageIndex,
        active,
        productId,
        minPrice,
        maxPrice,
      }),
    enabled: !!categoryId || !!name || !!minPrice || !!maxPrice,
  });

  return {
    products,
    loadingProducts: isLoading || isRefetching,
    isRefetching,
    refetch,
    isSuccess,
    isError,
  };
};
