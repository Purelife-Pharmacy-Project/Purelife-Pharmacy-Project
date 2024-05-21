import { OrderPayload, OrderResponse } from '@/services/cart/types';
import Api from '@/helpers/api';

class CartService {
  private static CART_API_BASE = '/Sales';

  // Cart API

  public static createOrder = async (payload: OrderPayload) => {
    const response = (await Api.post<OrderResponse>(
      `${this.CART_API_BASE}/create-bulk-sale`,
      payload
    )) as unknown as OrderResponse;

    if (response.error) {
      throw 'Unable to create order';
    }

    return response.result;
  };
}

export default CartService;
