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

export type Order = {
  id: number;
  orderNumber: string;
  status: string;
  billingAddress: string;
  products: OrderProduct[];
};
