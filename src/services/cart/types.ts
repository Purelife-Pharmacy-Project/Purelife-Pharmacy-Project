import { Product } from '../products/types';
import { OdooResponseType } from '@/helpers/api/types';

export type CartType = {
  id: number;
  product: Product;
  quantity: number;
};

export type UpdateCartPayloadType = {
  quantity: number;
};

export type OrderPayload = {
  partnerId: number;
  address: string;
  name: string;
  phoneNumber: string;
  products: Array<{
    productId: number;
    productQuantity: number;
  }>;
};

export type ReadSalePayload = {
  SaleOrderId: number;
};

export type ReadSaleResponse = {} & OdooResponseType<
  Array<{
    id: number;
    name: string;
    amount_total: number;
    note: string;
  }>
>;

export type InitiateTransactionResponse = {
  status: boolean;
  message: string;
  error: any | null;
  data: {
    authorization_url: string;
    access_code: string;
    reference: string;
  };
  meta: {
    bulkSaleId: number;
    paymentId: number;
  };
};

export type OrderResponse = {} & OdooResponseType<number>;
