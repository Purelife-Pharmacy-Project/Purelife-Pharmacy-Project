import ProductService from '@/services/products';
import { useQuery } from '@tanstack/react-query';

export const useGetProducts = () => {
  const {
    data: products,
    isLoading: loadingProducts,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: ['products'],
    queryFn: () => ProductService.getAllProducts({}),
  });

  return {
    products,
    loadingProducts,
    isSuccess,
    isError,
  };
};

export const useGetProductsByCategory = (
  categoryId?: string,
  name?: string,
  pageSize?: number,
  pageIndex?: number,
  active?: boolean,
  productId?: string,
  manufacturerId?: string
) => {
  const {
    data: products,
    isLoading: loadingProducts,
    isFetching,
    isSuccess,
    isError,
    refetch,
  } = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ['products', categoryId, name, manufacturerId],
    queryFn: () =>
      ProductService.getAllProducts({
        categoryId,
        name,
        pageSize,
        pageIndex,
        active,
        productId,
        manufacturerId,
      }),
    enabled: !!categoryId || !!name || !!manufacturerId,
  });

  return {
    products,
    loadingProducts,
    isFetching,
    refetch,
    isSuccess,
    isError,
  };
};
