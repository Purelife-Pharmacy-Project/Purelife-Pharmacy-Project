import { LabTestService } from '@/services/lab-tests';
import { useQuery } from '@tanstack/react-query';

export const useGetLabTests = (params: {
  name?: string;
  productId?: string;
  pageSize?: number;
  pageIndex?: number;
}) => {
  const {
    data: labTests,
    isLoading: loadingLabTests,
    refetch: refetchLabTests,
  } = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: [
      'lab-tests',
      params.name,
      params.productId,
      params.pageSize,
      params.pageIndex,
    ],
    queryFn: () => LabTestService.getLabTests(params),
  });

  return {
    labTests,
    loadingLabTests,
    refetchLabTests,
  };
};
