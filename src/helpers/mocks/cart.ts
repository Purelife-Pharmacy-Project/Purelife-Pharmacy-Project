import { CartType } from '@/services/cart/types';
import { Product } from '@/services/products/types';
import { mock_products } from './products';

export const mock_cart: CartType[] = [
  {
    id: '1',
    product: new Product(mock_products[0]),
    unitsLeft: 10,
    quantity: 1,
  },
  {
    id: '2',
    product: new Product(mock_products[1]),
    unitsLeft: 2,
    quantity: 2,
  },
  {
    id: '3',
    product: new Product(mock_products[2]),
    unitsLeft: 5,
    quantity: 3,
  },
];
