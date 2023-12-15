import ProductService from '@/services/products';
import { useQuery } from '@tanstack/react-query';

export const useGetProducts = () => {
  const {
    data: products,
    isLoading: loadingProducts,
    isSuccess,
    isError,
  } = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
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

export const useGetProductsByCategory = (categoryId: string) => {
  const {
    data: products,
    isLoading: loadingProducts,
    isSuccess,
    isError,
  } = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ['products', categoryId],
    queryFn: () => ProductService.getAllProducts({ categoryId }),
    enabled: !!categoryId,
  });

  return {
    products,
    loadingProducts,
    isSuccess,
    isError,
  };
};
