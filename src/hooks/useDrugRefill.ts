import { DrugRefillService } from '@/services/drug-refill';
import { CreateSubscriptionPayload } from '@/services/drug-refill/types';
import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useGetSubscriptionTempList = () => {
  const {
    data: subscriptionTempList,
    isLoading: loadingSubscriptionTempList,
    refetch,
  } = useQuery({
    queryKey: ['subscription-temp-list'],
    queryFn: () => DrugRefillService.getSubscriptionTempList(),
    refetchOnWindowFocus: false,
  });

  return {
    subscriptionTempList,
    loadingSubscriptionTempList,
    refetch,
  };
};

export const useGetSubscriptionsByCustomerId = () => {
  const {
    data: subscriptions,
    isLoading: loadingSubscriptions,
    refetch,
  } = useQuery({
    queryKey: ['subscriptions'],
    queryFn: () => DrugRefillService.getSubscriptionsByCustomerId(),
    refetchOnWindowFocus: false,
  });

  return {
    subscriptions,
    loadingSubscriptions,
    refetch,
  };
};

export const useCreateSubscription = (
  onSuccess?: () => void,
  onError?: (error: Error) => void
) => {
  const { mutate: createSubscription, isPending: loadingCreateSubscription } =
    useMutation({
      mutationKey: ['create-subscription'],
      mutationFn: (payload: CreateSubscriptionPayload) =>
        DrugRefillService.createSubscription(payload),
      onSuccess(data, variables, context) {
        toast.success('Subscription Created successfully');
        onSuccess && onSuccess();
      },
      onError(error, variables, context) {
        toast.error('Something went wrong. Please try again.');
        onError && onError(error);
      },
    });

  return {
    createSubscription,
    loadingCreateSubscription,
  };
};
