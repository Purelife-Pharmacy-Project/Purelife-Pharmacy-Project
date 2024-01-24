import Api from '@/helpers/api';

export class CouponService {
  private static COUPON_API_BASE = '/Coupon';
  constructor() {}

  public static async getCoupon(couponCode: string) {
    const response = Api.get(
      `${this.COUPON_API_BASE}?couponCode=${couponCode}`
    );

    return response;
  }

  public static async applyCoupon(data: {
    couponCode: string;
    couponName: string;
    orderId: string;
    userId: string;
    couponPrice: number;
    productLineId: string;
  }) {
    const response = Api.post(`${this.COUPON_API_BASE}/apply`, data);

    return response;
  }
}
