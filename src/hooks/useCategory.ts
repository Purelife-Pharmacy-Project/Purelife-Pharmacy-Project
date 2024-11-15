import { CategoryService } from '@/services/categories';
import { useQuery } from '@tanstack/react-query';

export const useGetCategories = () => {
  const {
    data: categories,
    isLoading: loadingCategories,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: () =>
      CategoryService.getAllCategories({
        pageSize: 100,
      }),
    // refetchOnWindowFocus: true,
    // staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  return {
    categories,
    loadingCategories,
    isSuccess,
    isError,
  };
};
