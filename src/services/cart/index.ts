import { mock_cart } from '@/helpers/mocks/cart';
import { CartType, UpdateCartPayloadType } from './types';

export class CartService {
  private static CART_API_BASE = '/Cart';

  public static getCart = async () => {
    // const response = (await Api.get<CartType[]>(
    //   `${this.CART_API_BASE}/get-all`
    // )) as unknown as CartType[];

    return (await new Promise((resolve) => {
      setTimeout(() => {
        resolve(JSON.parse(JSON.stringify(mock_cart)));
      }, 500);
    })) as unknown as CartType[];
  };

  public static getCartById = async (id: string) => {
    return (await new Promise((resolve) => {
      setTimeout(() => {
        const res = mock_cart.find((cart) => cart.id === id);
        resolve(res);
      });
    })) as unknown as CartType;
  };

  public static addToCart = async (cart: CartType) => {
    // const response = (await Api.post<CartType>(
    //     `${this.CART_API_BASE}/add-to-cart`, cart
    // )) as unknown as CartType;

    return (await new Promise((resolve) => {
      setTimeout(() => {
        resolve(cart);
      }, 500);
    })) as unknown as CartType;
  };

  public static updateCartItem = async (
    cartId: string,
    payload: UpdateCartPayloadType
  ) => {
    // const response = (await Api.put<CartType>(
    //     `${this.CART_API_BASE}/update-cart`, cart
    // )) as unknown as CartType;

    return (await new Promise((resolve) => {
      const newCartItem = mock_cart.find((cart) => cart.id === cartId);
      newCartItem &&
        Object.assign(newCartItem, {
          quantity: payload.quantity,
        });
      if (newCartItem) {
        setTimeout(() => {
          resolve(() => {
            const newCart = mock_cart.filter((cart) => cart.id !== cartId);
            return [newCart, newCartItem];
          });
        }, 500);
      }
    })) as unknown as CartType;
  };

  public static deleteCartItem = async (cartId: string) => {
    // const response = (await Api.delete<CartType>(
    //     `${this.CART_API_BASE}/delete-cart`, cart
    // )) as unknown as CartType;

    const newCart = mock_cart.filter((cart) => cart.id !== cartId);

    return (await new Promise((resolve) => {
      setTimeout(() => {
        resolve(newCart);
      }, 500);
    })) as unknown as CartType;
  };
}
