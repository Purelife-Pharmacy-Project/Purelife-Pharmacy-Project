import { Product } from '../products/types';

export type CartType = {
  id: string;
  unitsLeft: number;
  product: Product;
  quantity: number;
};

export type UpdateCartPayloadType = {
  quantity: number;
};
