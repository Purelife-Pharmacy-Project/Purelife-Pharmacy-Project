import OrderService from '@/services/orders';
import { ApplyCouponPayload, CouponType } from '@/services/orders/types';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useApplyCoupons = () => {
  return useMutation({
    mutationFn: (payload: ApplyCouponPayload) =>
      OrderService.applyCouponToOrder(payload),
    mutationKey: ['applyCoupon'],
  });
};

export const useGetCoupon = (successCallback?: (data: CouponType) => void) => {
  return useMutation({
    mutationFn: (code: string) => OrderService.getCoupon(code),
    mutationKey: ['getCoupons'],
    onSuccess: (data: CouponType) => {
      if (successCallback) {
        successCallback(data);
      }
    },
    onError: (error) => {
      toast.error('Coupon not found');
    },
  });
};
