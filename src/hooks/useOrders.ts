import OrderService from '@/services/orders';
import { CreateOrderPayload } from '@/services/orders/types';
import { useMutation, useQuery } from '@tanstack/react-query';
import { InitiateTransactionResponse } from '@/services/cart/types';

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
  onSuccess?: (data: InitiateTransactionResponse['data']) => void,
  onError?: (error: unknown) => void
) => {
  const {
    data,
    mutate: createOrder,
    isPending: loadingCreateOrder,
    isError: errorCreateOrder,
    isSuccess: successCreateOrder,
  } = useMutation({
    mutationFn: (payload: CreateOrderPayload) =>
      OrderService.createOrder(payload),
    onSuccess: (data) => {
      if (data) {
        onSuccess && onSuccess(data);
      }
    },
    onError: (error) => {
      onError && onError(error);
    },
  });

  return {
    data,
    createOrder,
    loadingCreateOrder,
    errorCreateOrder,
    successCreateOrder,
  };
};
