import Api from '@/helpers/api';
import {
  ApplyCouponPayload,
  CouponType,
  CreateOrderPayload,
  Order,
  OrderType,
} from './types';
import {
  InitiateTransactionResponse,
  OrderResponse,
  ReadSaleResponse,
} from '@/services/cart/types';

class OrderService {
  private static ORDERS_API_BASE = '/Sales';
  private static COUPONS_API_BASE = '/Coupon';

  constructor() {}

  public static async createOrder(order: CreateOrderPayload) {
    const response = (await Api.post<OrderResponse>(
      `${this.ORDERS_API_BASE}/create-bulk-sale`,
      order
    )) as unknown as OrderResponse;

    if (response.error || !response.result) {
      throw 'Unable to create order';
    }

    const salesOrderId = response.result;

    const salesResponse = (await Api.get<ReadSaleResponse>(
      `${this.ORDERS_API_BASE}/read-sale?SaleOrderId=${salesOrderId}`
    )) as unknown as ReadSaleResponse;

    if (salesResponse.error || !salesResponse.result) {
      throw 'Unable to read sale';
    }

    const transactionResponse = (await Api.post<InitiateTransactionResponse>(
      `Transactions/create-and-initiate`,
      {
        partnerId: order.partnerId,
        amount: salesResponse.result[0].amount_total,
        currencyId: 120,
        paymentType: 'inbound',
        journalId: 17,
        paymentMethodLineId: 22,
        reference: salesResponse.result[0].name,
        email: order.email,
        acquirerId: 16,
        salesOrderIds: [{ id: 4, salesId: salesOrderId }],
      }
    )) as unknown as InitiateTransactionResponse;

    if (transactionResponse.error) {
      throw 'Unable to create transaction';
    }

    return transactionResponse.data;
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
