import Api from '@/helpers/api';
import { CreateOrderPayload, Order } from './types';

class OrderService {
  private static ORDERS_API_BASE = '/Order';

  constructor() {}

  public static async createOrder(order: CreateOrderPayload) {
    return Api.post(`${this.ORDERS_API_BASE}/create`, order);
  }

  public static async getAllCustomerOrders() {
    return (await Api.get<{
      data: Order[];
      totalPage: number;
    }>(`${this.ORDERS_API_BASE}/getByCustomerId`)) as unknown as {
      data: Order[];
      totalPage: number;
    };
  }
}

export default OrderService;
