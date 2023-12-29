import { toNaira } from '@/helpers/utils';
import { CartType } from '@/services/cart/types';
import type {} from '@redux-devtools/extension'; // required for devtools typing
import { toast } from 'sonner';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type CartSummary = {
  total: string;
  subTotal: string;
  discount: string;
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
  devtools(
    persist(
      (set, get) => ({
        cart: [] as CartType[],
        summary: {
          total: toNaira(0),
          subTotal: toNaira(0),
          discount: toNaira(0),
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
            cartItem && cartItem.product.canBeSold
              ? cartItem.quantity++
              : state.cart.push(cart);

            // update the summary
            state.setSummary(state.summary);

            toast.success('Item added to cart');

            return {
              cart: state.cart,
            };
          }),
        removeFromCart: (cartId) => {
          set((state) => {
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
                  cartItem.quantity++;
                }
                return cartItem;
              }),
              summary: {
                ...state.summary,
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
                  cartItem.quantity--;
                }
                return cartItem;
              }),
              summary: {
                ...state.summary,
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
              },
            };
          });
        },
      }),
      {
        name: 'cart-storage',
      }
    )
  )
);
