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
    queryFn: () => ProductService.getAllProducts(),
  });

  return {
    products,
    loadingProducts,
  };
};
