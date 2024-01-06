import ProductService from '@/services/products';
import { useQuery } from '@tanstack/react-query';

export const useGetFeaturedProducts = () => {
  const {
    data: products,
    isLoading,
    isRefetching,
    refetch,
  } = useQuery({
    queryKey: ['featured-products'],
    queryFn: () =>
      ProductService.getAllProducts({
        active: true,
        pageSize: 3,
        pageIndex: 1,
      }),
    refetchOnWindowFocus: false,
  });

  return {
    products,
    loadingFeaturedProducts: isLoading,
    refetch,
  };
};

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
    queryKey: [
      'products',
      categoryId,
      name,
      minPrice,
      maxPrice,
      pageIndex,
      pageSize,
    ],
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
    enabled: !!categoryId || !!name || !!minPrice || !!maxPrice || !!pageIndex,
    refetchOnWindowFocus: false,
  });

  return {
    products,
    loadingProducts: isLoading,
    isRefetching,
    refetch,
    isSuccess,
    isError,
  };
};
