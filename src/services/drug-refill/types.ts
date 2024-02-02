export type SubscriptionTemp = {
  id: number;
  name: string;
};

export type SubscriptionProduct = {
  productId: number;
  quantity: number;
  priceUnit: number;
};

export type CreateSubscriptionPayload = {
  templateId: number;
  products: SubscriptionProduct[];
};

export type SubscriptionProductType = {
  description: string;
  subId: number;
  productId: number;
  quantity: number;
};

export type SubscriptionType = {
  id: number;
  products: SubscriptionProductType[];
};

export class Subscription {
  id: number;
  products: SubscriptionProductType[];

  constructor(data: SubscriptionType) {
    this.id = data.id;
    this.products = data.products;
  }
}
