import { LabTestService } from '@/services/lab-tests';
import { LabTestQueryParams } from '@/services/lab-tests/types';
import { useQuery } from '@tanstack/react-query';

export const useGetLabTests = (params: LabTestQueryParams) => {
  const queryKeys = [
    'lab-tests',
    ...Object.values(params).filter((param) => !!param),
  ];

  const {
    data: labTests,
    isLoading: loadingLabTests,
    refetch: refetchLabTests,
    isSuccess,
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
    isSuccess,
  };
};
