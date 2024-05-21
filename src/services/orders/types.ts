import { toNaira } from '@/helpers/utils';
import { OdooResponseType } from '@/helpers/api/types';

export type OrderProduct = {
  productId: number;
  quantity: number;
  priceUnit: number;
  description: string;
};

export type CreateOrderPayload = {
  partnerId: number;
  address: string;
  name: string;
  email: string;
  phoneNumber: string;
  products: Array<{
    productId: number;
    productQuantity: number;
  }>;
};

export type CreateOrderResponse = {} & OdooResponseType<number>;

export type OrderType = {
  id: number;
  orderNumber: string;
  status: string;
  billingAddress: string;
  products: OrderProduct[];
  amount: string;
};

export class Order {
  id: number;
  orderNumber: string;
  status: string;
  billingAddress: string;
  products: OrderProduct[];
  amount: string;

  constructor(data: OrderType) {
    this.id = data.id;
    this.orderNumber = data.orderNumber;
    this.status = data.status;
    this.billingAddress = data.billingAddress;
    this.products = data.products;
    this.amount = toNaira(
      (this.products.reduce(
        (acc, curr) => acc + curr.priceUnit * curr.quantity,
        0
      ) as number) || 0
    );
  }
}

export type CouponType = {
  message: string;
  discountPercentage: number;
  couponName: string;
  lineProductId: number;
};

export type ApplyCouponPayload = {
  couponCode: string;
  couponName: string;
  productLineId: string;
  orderId: string;
  couponPrice: number;
};
