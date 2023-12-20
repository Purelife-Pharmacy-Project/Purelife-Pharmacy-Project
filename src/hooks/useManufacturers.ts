import { ManufacturersService } from '@/services/manufacturers';
import { useQuery } from '@tanstack/react-query';

export const useGetManufacturers = (categoryId: string, name: string) => {
  const {
    data: manufacturers,
    isLoading: loadingManufacturers,
    refetch: refetchManufacturers,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: ['manufacturers', categoryId, name],
    queryFn: () => ManufacturersService.getAllManufacturers(categoryId, name),
  });

  return {
    manufacturers,
    loadingManufacturers,
    refetchManufacturers,
    isSuccess,
    isError,
  };
};
