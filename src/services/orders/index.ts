import Api from '@/helpers/api';
import UsersService from '../user';
import {
  ApplyCouponPayload,
  CouponType,
  CreateOrderPayload,
  Order,
  OrderType,
} from './types';

class OrderService {
  private static ORDERS_API_BASE = '/Order';
  private static COUPONS_API_BASE = '/Coupon';

  constructor() {}

  public static async createOrder(order: CreateOrderPayload) {
    const userId = UsersService.getUserFromToken().id;

    return Api.post(`${this.ORDERS_API_BASE}/create`, {
      ...order,
      customerId: userId,
    });
  }

  public static async getAllCustomerOrders() {
    const response = (await Api.get<{
      data: OrderType[];
      totalPage: number;
    }>(`${this.ORDERS_API_BASE}/getByCustomerId`)) as unknown as {
      data: OrderType[];
      totalPage: number;
    };

    const orders = response.data.map((order) => new Order(order));

    return {
      data: orders,
      totalPage: response.totalPage,
    };
  }

  public static async getOrderById(id: string) {
    return (await Api.get<{
      data: OrderType;
      totalPage: number;
    }>(`${this.ORDERS_API_BASE}/getById?id=${id}`)) as unknown as {
      data: OrderType;
      totalPage: number;
    };
  }

  public static async getCoupon(code: string) {
    const response = (await Api.get<CouponType>(
      `${this.COUPONS_API_BASE}?couponCode=${code}`
    )) as unknown as CouponType;

    return response;
  }

  public static async applyCouponToOrder(payload: ApplyCouponPayload) {
    return (await Api.post(`${this.COUPONS_API_BASE}/apply`, payload)) as {
      data: any;
    };
  }
}

export default OrderService;
