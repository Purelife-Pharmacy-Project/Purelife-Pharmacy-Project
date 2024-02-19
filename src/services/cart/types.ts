import { Product } from '../products/types';

export type CartType = {
  id: number;
  product: Product;
  quantity: number;
};

export type UpdateCartPayloadType = {
  quantity: number;
};
