import { toNaira } from '@/helpers/utils';
import { CartType } from '@/services/cart/types';
import type {} from '@redux-devtools/extension'; // required for devtools typing
import { toast } from 'sonner';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type CartSummary = {
  total: string;
  subTotal: string;
  discount: string;
  totalAmount: number;
};

type CartState = {
  cart: CartType[];
  summary: CartSummary;
  setSummary: (summary: CartSummary) => void;
  addToCart: (cart: CartType) => void;
  getCartItem: (cartId: string) => CartType | undefined;
  removeFromCart: (cartId: string) => void;
  increaseQuantity: (cartId: string) => void;
  decreaseQuantity: (cartId: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [] as CartType[],
      summary: {
        total: toNaira(0),
        subTotal: toNaira(0),
        discount: toNaira(0),
        totalAmount: 0,
      },
      // when make a cart action we need to update the summary
      setSummary: () =>
        set((state) => {
          const totalAmount = state.cart.reduce(
            (acc, cart) => acc + cart.product.price * cart.quantity,
            0
          );
          return {
            summary: {
              ...state.summary,
              subTotal: toNaira(totalAmount),
              total: toNaira(totalAmount),
              totalAmount,
            },
          };
        }),
      getCartItem: (cartId) => {
        return get().cart.find((cartItem) => cartItem.id === cartId);
      },
      addToCart: (cart) =>
        set((state) => {
          // check if item is already in cart
          const cartItem = state.cart.find(
            (item) => item.product.id === cart.product.id
          );

          // if item is in cart, just update the quantity
          if (cartItem?.unitsLeft === 0) {
            return {
              cart: state.cart,
            };
          }

          if (cartItem) {
            if (cartItem.quantity < cartItem.unitsLeft) {
              cartItem.quantity++;
              // update the summary
              state.setSummary(state.summary);

              toast.info('Item already in cart, quantity increased');

              return {
                cart: state.cart,
              };
            } else {
              toast.error('Item out of stock');
              return {
                cart: state.cart,
              };
            }
          } else {
            // if item is not in cart, add it to cart
            state.cart.push(cart);

            toast.success('Item added to cart');

            // update the summary
            state.setSummary(state.summary);

            return {
              cart: state.cart,
            };
          }
        }),
      removeFromCart: (cartId) => {
        set((state) => {
          if (state.cart.length === 1) {
            return {
              cart: [],
              summary: {
                total: toNaira(0),
                subTotal: toNaira(0),
                discount: toNaira(0),
                totalAmount: 0,
              },
            };
          }

          // update the summary
          state.setSummary(state.summary);

          return {
            cart: state.cart.filter((cartItem) => cartItem.id !== cartId),
          };
        });
      },
      increaseQuantity: (cartId) => {
        set((state) => {
          return {
            cart: state.cart.map((cartItem) => {
              if (cartItem.id === cartId) {
                cartItem.quantity < cartItem.unitsLeft
                  ? cartItem.quantity++
                  : toast.error('Item out of stock');
              }
              return cartItem;
            }),
            summary: {
              ...state.summary,
              totalAmount: state.cart.reduce(
                (acc, cart) => acc + cart.product.price * cart.quantity,
                0
              ),
              subTotal: toNaira(
                state.cart.reduce(
                  (acc, cart) => acc + cart.product.price * cart.quantity,
                  0
                )
              ),
              total: toNaira(
                state.cart.reduce(
                  (acc, cart) => acc + cart.product.price * cart.quantity,
                  0
                )
              ),
            },
          };
        });
      },
      decreaseQuantity: (cartId) => {
        set((state) => {
          return {
            cart: state.cart.map((cartItem) => {
              if (cartItem.id === cartId) {
                cartItem.quantity < cartItem.unitsLeft
                  ? cartItem.quantity--
                  : toast.error('Item out of stock');
              }
              return cartItem;
            }),
            summary: {
              ...state.summary,
              totalAmount: state.cart.reduce(
                (acc, cart) => acc + cart.product.price * cart.quantity,
                0
              ),
              subTotal: toNaira(
                state.cart.reduce(
                  (acc, cart) => acc + cart.product.price * cart.quantity,
                  0
                )
              ),
              total: toNaira(
                state.cart.reduce(
                  (acc, cart) => acc + cart.product.price * cart.quantity,
                  0
                )
              ),
            },
          };
        });
      },
      clearCart: () => {
        set(() => {
          return {
            cart: [],
            summary: {
              total: toNaira(0),
              subTotal: toNaira(0),
              discount: toNaira(0),
              totalAmount: 0,
            },
          };
        });
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);
