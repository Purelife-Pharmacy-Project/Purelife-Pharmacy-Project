import { VaccineService } from '@/services/vaccine';
import { VaccineQueryParams } from '@/services/vaccine/types';
import { useQuery } from '@tanstack/react-query';

export const useGetVaccines = ({
  name,
  productId,
  pageSize,
  pageIndex,
}: VaccineQueryParams = {}) => {
  const queryKeys = [
    'vaccines',
    name,
    String(productId),
    String(pageIndex),
    String(pageSize),
  ].filter(Boolean);

  const {
    data: vaccines,
    isLoading: loadingVaccines,
    refetch: refetchVaccines,
  } = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: queryKeys,
    queryFn: () =>
      VaccineService.getAllVaccines({
        name,
        productId,
        pageSize,
        pageIndex,
      }),
    enabled: !!name || !!productId || !!pageSize || !!pageIndex,
    refetchOnWindowFocus: false,
  });

  return {
    vaccines,
    loadingVaccines,
    refetchVaccines,
  };
};
