import { VaccineService } from '@/services/vaccine';
import { useQuery } from '@tanstack/react-query';

export const useGetVaccines = (params: {
  name?: string;
  productId?: number;
  pageSize?: number;
  pageIndex?: number;
}) => {
  const queryKeys = [
    'vaccines',
    ...Object.values(params).filter((param) => !!param),
  ];
  const {
    data: vaccines,
    isLoading: loadingVaccines,
    refetch: refetchVaccines,
  } = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: queryKeys,
    queryFn: () => VaccineService.getAllVaccines(params),
  });

  return {
    vaccines,
    loadingVaccines,
    refetchVaccines,
  };
};
