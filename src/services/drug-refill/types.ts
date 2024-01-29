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
