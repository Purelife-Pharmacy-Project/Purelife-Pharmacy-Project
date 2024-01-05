import PaymentsService from '@/services/payment';
import { useMutation } from '@tanstack/react-query';

export const useVerifyPayment = (
  onSuccess?: () => void,
  onError?: (error: string) => void
) => {
  const {
    mutate: verifyPayment,
    isPending: loadingVerifyPayment,
    isError: errorVerifyPayment,
    isSuccess: successVerifyPayment,
  } = useMutation({
    mutationFn: (reference: string) => PaymentsService.verifyPayment(reference),
    onSuccess: () => {
      onSuccess && onSuccess();
    },
    onError: (error: Error | string) => {
      onError && onError(error as string);
    },
  });

  return {
    verifyPayment,
    loadingVerifyPayment,
    errorVerifyPayment,
    successVerifyPayment,
  };
};
