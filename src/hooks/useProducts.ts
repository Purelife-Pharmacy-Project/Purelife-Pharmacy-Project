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
  productId?: string
) => {
  const {
    data: products,
    isLoading: loadingProducts,
    isFetching,
    isSuccess,
    isError,
    refetch,
  } = useQuery({
    queryKey: [
      'products',
      categoryId,
      name,
      pageSize,
      pageIndex,
      active,
      productId,
    ],
    queryFn: () =>
      ProductService.getAllProducts({
        categoryId,
        name,
        pageSize,
        pageIndex,
        active,
        productId,
      }),
    enabled: !!categoryId || !!name,
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
