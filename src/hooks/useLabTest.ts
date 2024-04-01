import { LabTestService } from '@/services/lab-tests';
import { LabTestQueryParams } from '@/services/lab-tests/types';
import { useQuery } from '@tanstack/react-query';

export const useGetLabTests = ({
  productId,
  name,
  pageSize,
  pageIndex,
  categoryId,
}: LabTestQueryParams = {}) => {
  const queryKeys = [
    'lab-tests',
    productId,
    name,
    String(pageIndex),
    String(pageSize),
    categoryId,
  ].filter(Boolean);

  const {
    data: labTests,
    isLoading: loadingLabTests,
    isSuccess,
    isError,
    refetch: refetchLabTests,
  } = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: queryKeys,
    queryFn: () =>
      LabTestService.getLabTests({
        productId,
        name,
        pageSize,
        pageIndex,
        categoryId,
      }),
    enabled: !!name || !!productId || !!pageIndex || !!categoryId,
    refetchOnWindowFocus: false,
  });

  return {
    labTests,
    loadingLabTests,
    refetchLabTests,
    isSuccess,
    isError,
  };
};
