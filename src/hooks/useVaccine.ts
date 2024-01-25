import { VaccineService } from '@/services/vaccine';
import { useQuery } from '@tanstack/react-query';

export const useGetVaccines = (params: {
  name?: string;
  productId?: number;
  pageSize?: number;
  pageIndex?: number;
}) => {
  const {
    data: vaccines,
    isLoading: loadingVaccines,
    refetch: refetchVaccines,
  } = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: [
      'vaccines',
      params.name,
      params.productId,
      params.pageSize,
      params.pageIndex,
    ],
    queryFn: () => VaccineService.getAllVaccines(params),
  });

  return {
    vaccines,
    loadingVaccines,
    refetchVaccines,
  };
};
