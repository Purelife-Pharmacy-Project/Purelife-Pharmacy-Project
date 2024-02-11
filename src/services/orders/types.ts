import { toNaira } from '@/helpers/utils';

export type OrderProduct = {
  productId: number;
  quantity: number;
  priceUnit: number;
  description: string;
};

export type CreateOrderPayload = {
  customerId: number;
  billingAddress: string;
  products: OrderProduct[];
};

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
