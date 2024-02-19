import { fromNaira, toNaira } from '@/helpers/utils';
import { CartType } from '@/services/cart/types';
import type {} from '@redux-devtools/extension'; // required for devtools typing
import { toast } from 'sonner';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type CartSummary = {
  totalPayableAmount: string;
  deliveryFee: string;
  couponPercentage?: number;
  totalCartAmount: number;
};

type CartState = {
  cart: CartType[];
  summary: CartSummary;
  setDeliveryFee: (deliveryFee: number) => void;
  addToCart: (cart: CartType) => void;
  getCartItem: (productId: number) => CartType | undefined;
  setCouponPercentage: (couponPercentage: number) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
};

const calculatedTotalCartAmount = (cart: CartType[]) =>
  cart.reduce((acc, cart) => acc + cart.product.price * cart.quantity, 0);

const calculatedPayableAmount = (
  cart: CartType[],
  deliveryFee: number,
  couponPercentage: number | undefined
) => {
  const totalCartAmount = calculatedTotalCartAmount(cart);

  if (couponPercentage && couponPercentage > 0) {
    const discount = (totalCartAmount * couponPercentage) / 100;
    return totalCartAmount + deliveryFee - discount;
  }

  return totalCartAmount + deliveryFee;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [] as CartType[],
      summary: {
        totalPayableAmount: toNaira(0),
        deliveryFee: toNaira(0),
        couponPercentage: 0,
        totalCartAmount: 0,
      },
      addToCart: (cart) =>
        set((state) => {
          const cartItem = state.cart.find(
            (item) => item.product.id === cart.product.id
          );

          if (cartItem && cartItem.product.quantity === 0) {
            return {
              cart: [...state.cart],
            };
          }

          let newCart;

          if (cartItem) {
            if (cartItem.quantity < (cartItem?.product.quantity as number)) {
              newCart = state.cart.map((item) =>
                item.product.id === cart.product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              );
            } else {
              toast.error('Item out of stock');
              return {
                cart: [...state.cart],
              };
            }
          } else {
            newCart = [...state.cart, cart];
          }

          return {
            cart: newCart,
            summary: {
              ...state.summary,
              totalCartAmount: calculatedTotalCartAmount(newCart),
              totalPayableAmount: toNaira(
                calculatedPayableAmount(
                  newCart,
                  fromNaira(state.summary.deliveryFee),
                  state.summary.couponPercentage
                )
              ),
            },
          };
        }),
      clearCart: () => set({ cart: [] }),
      removeFromCart: (productId: number) =>
        set((state) => {
          if (state.cart.length === 1) {
            state.clearCart();

            return { cart: [] };
          } else {
            const newCart = state.cart.filter(
              (item) => item.product.id !== productId
            );

            return {
              cart: newCart,
              summary: {
                ...state.summary,
                totalCartAmount: calculatedTotalCartAmount(newCart),
                totalPayableAmount: toNaira(
                  calculatedPayableAmount(
                    newCart,
                    fromNaira(state.summary.deliveryFee),
                    state.summary.couponPercentage
                  )
                ),
              },
            };
          }
        }),
      setDeliveryFee: (deliveryFee: number) =>
        set((state) => {
          return {
            summary: {
              ...state.summary,
              totalCartAmount: calculatedTotalCartAmount(state.cart),
              deliveryFee: toNaira(deliveryFee),
              totalPayableAmount: toNaira(
                calculatedPayableAmount(
                  state.cart,
                  deliveryFee,
                  state.summary.couponPercentage
                )
              ),
            },
          };
        }),
      setCouponPercentage: (couponPercentage: number) =>
        set((state) => {
          toast.success('Coupon Applied');
          return {
            summary: {
              ...state.summary,
              couponPercentage,
              totalPayableAmount: toNaira(
                calculatedPayableAmount(
                  state.cart,
                  fromNaira(state.summary.deliveryFee),
                  couponPercentage
                )
              ),
            },
          };
        }),
      getCartItem: (productId: number) =>
        get().cart.find((item) => item.product.id === productId),
    }),
    {
      name: '__storage__',
    }
  )
);
