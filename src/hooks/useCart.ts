import { toNaira } from '@/helpers/utils';
import { CartService } from '@/services/cart';
import { CartType, UpdateCartPayloadType } from '@/services/cart/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useGetCart = () => {
  const {
    data: cart,
    isLoading: loadingCart,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: ['cart'],
    queryFn: () => CartService.getCart(),
  });

  return {
    cart,
    loadingCart,
    isSuccess,
    isError,
  };
};

export const useGetCartById = (id: string) => {
  const {
    data: cart,
    isLoading: isLoadingCart,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: ['cart', id],
    queryFn: () => CartService.getCartById(id),
  });

  return {
    cart,
    isLoadingCart,
    isError,
    isSuccess,
  };
};

export const useAddToCart = () => {
  const queryClient = useQueryClient();
  const {
    mutate: addToCart,
    isPending: loadingAddToCart,
    error: addToCartError,
    isSuccess,
    isError,
  } = useMutation({
    mutationFn: (payload: CartType) => CartService.addToCart(payload),
    onMutate: async (payload: CartType) => {
      const previousCart = queryClient.getQueryData<CartType[]>(['cart']);

      queryClient.setQueryData<CartType[]>(['cart'], (old) => {
        if (old) {
          return [...old, payload];
        }
        return [payload];
      });

      return { previousCart };
    },
  });

  return {
    addToCart,
    loadingAddToCart,
    addToCartError,
    isSuccess,
    isError,
  };
};

export const useUpdateCart = () => {
  const queryClient = useQueryClient();
  const {
    mutate: updateCart,
    isPending: loadingUpdateCart,
    error: updateCartError,
    isSuccess,
    isError,
  } = useMutation({
    mutationFn: (payload: { cartId: string; payload: UpdateCartPayloadType }) =>
      CartService.updateCartItem(payload.cartId, payload.payload),
    onMutate: async (payload: {
      cartId: string;
      payload: UpdateCartPayloadType;
    }) => {
      const previousCart = queryClient.getQueryData<CartType[]>(['cart']);

      // use optimistic update to update the cart item and make the api call later
      queryClient.setQueryData<CartType[]>(['cart'], (oldCart) => {
        if (oldCart) {
          const updatedCartIndex = oldCart?.findIndex(
            (cart) => cart.id === payload.cartId
          );

          if (updatedCartIndex !== -1) {
            // add new quantity to the cart item
            const cartItem = oldCart[updatedCartIndex];
            Object.assign(oldCart[updatedCartIndex], {
              ...oldCart[updatedCartIndex],
              product: {
                ...cartItem,
                quantity: payload.payload.quantity,
              },
            });

            return oldCart;
          }
        }
      });

      return { previousCart };
    },
  });

  if (isSuccess) {
    queryClient
      .invalidateQueries({
        queryKey: ['cart'],
      })
      .then(() => {});
  }

  return {
    updateCart,
    loadingUpdateCart,
    updateCartError,
    isSuccess,
    isError,
  };
};

export const useRemoveCartItem = () => {
  const queryClient = useQueryClient();
  const {
    mutate: removeCartItem,
    isPending: loadingRemoveCartItem,
    error: removeCartItemError,
    isSuccess,
    isError,
  } = useMutation({
    mutationFn: (cartId: string) => CartService.deleteCartItem(cartId),
    onMutate: async (cartId: string) => {
      const previousCart = queryClient.getQueryData<CartType[]>(['cart']);

      queryClient.setQueryData<CartType[]>(['cart'], (old) => {
        if (old) {
          const newCart = old.filter((cart) => cart.id !== cartId);
          console.log(newCart);
          return newCart;
        }
      });

      return { previousCart };
    },
  });

  return {
    removeCartItem,
    loadingRemoveCartItem,
    removeCartItemError,
    isSuccess,
    isError,
  };
};

export const useGetCartSummary = () => {
  const queryClient = useQueryClient();
  const cart = queryClient.getQueryData<CartType[]>(['cart']);

  const totalPrice = cart?.reduce((acc, curr) => {
    return acc + curr.product.price * curr.quantity;
  }, 0);

  const totalCartItems = cart?.length;

  return {
    subTotal: toNaira(totalPrice as number),
    discount: 0,
    deliveryFee: 0,
    total: toNaira(totalPrice as number),
    totalCartItems,
  };
};
