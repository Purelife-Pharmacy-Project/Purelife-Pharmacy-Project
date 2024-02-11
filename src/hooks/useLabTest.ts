import { LabTestService } from '@/services/lab-tests';
import { useQuery } from '@tanstack/react-query';

export const useGetLabTests = (params: {
  name?: string;
  productId?: string;
  pageSize?: number;
  pageIndex?: number;
}) => {
  const queryKeys = [
    'lab-tests',
    ...Object.values(params).filter((param) => !!param),
  ];
  const {
    data: labTests,
    isLoading: loadingLabTests,
    refetch: refetchLabTests,
  } = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: queryKeys,
    queryFn: () => LabTestService.getLabTests(params),
    refetchOnWindowFocus: false,
  });

  return {
    labTests,
    loadingLabTests,
    refetchLabTests,
  };
};
