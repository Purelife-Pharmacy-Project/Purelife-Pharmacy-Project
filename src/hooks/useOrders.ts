import OrderService from '@/services/orders';
import { CreateOrderPayload } from '@/services/orders/types';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useGetOrders = () => {
  const {
    data: orders,
    isLoading: loadingGetOrders,
    isError: errorGetOrders,
  } = useQuery({
    queryKey: ['orders'],
    queryFn: () => OrderService.getAllCustomerOrders(),
  });

  return {
    orders: orders,
    loadingGetOrders,
    errorGetOrders,
  };
};

export const useCreateOrder = (
  onSuccess?: () => void,
  onError?: (error: unknown) => void
) => {
  const {
    mutate: createOrder,
    isPending: loadingCreateOrder,
    isError: errorCreateOrder,
    isSuccess: successCreateOrder,
  } = useMutation({
    mutationFn: (payload: CreateOrderPayload) =>
      OrderService.createOrder(payload),
    onSuccess: () => {
      onSuccess && onSuccess();
    },
    onError: (error) => {
      onError && onError(error);
    },
  });

  return {
    createOrder,
    loadingCreateOrder,
    errorCreateOrder,
    successCreateOrder,
  };
};
