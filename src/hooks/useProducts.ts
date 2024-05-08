import ProductService from '@/services/products';
import { useQuery } from '@tanstack/react-query';

export const useGetFeaturedProducts = () => {
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['featured-products'],
    queryFn: () =>
      ProductService.getAllProducts({
        Limit: 3,
        offset: 1,
      }),
    refetchOnWindowFocus: false,
  });

  return {
    products,
    loadingFeaturedProducts: isLoading,
    refetch,
  };
};

export const useGetProductsByCategoryId = (params: {
  categoryId?: string;
  limit?: number;
  searchStr?: string;
  offset?: number;
}) => {
  const {
    data: products,
    isLoading: loadingProducts,
    isRefetching,
    refetch,
  } = useQuery({
    queryKey: [
      'products-by-category',
      params.categoryId,
      params.searchStr,
      params.limit,
      params.offset,
    ],
    queryFn: () =>
      ProductService.getAllProducts({
        CategoryId: params.categoryId,
        Limit: params.limit,
        offset: params.offset,
        name: params.searchStr,
      }),
    refetchOnWindowFocus: false,
    enabled: !!params.categoryId || !!params.searchStr,
  });

  return {
    products,
    loadingProducts,
    isRefetching,
    refetch,
  };
};

export const useGetProducts = ({
  categoryId,
  name,
  limit,
  offset,
  MinListPrice,
  MaxListPrice,
}: {
  categoryId?: string;
  name?: string;
  limit?: number;
  offset?: number;
  MinListPrice?: number;
  MaxListPrice?: number;
} = {}) => {
  const queryKeys = [
    'products',
    categoryId,
    name,
    MinListPrice,
    MaxListPrice,
    String(offset),
    String(limit),
  ].filter(Boolean);

  const {
    data: products,
    isLoading: loadingProducts,
    isRefetching,
    isSuccess,
    isError,
    refetch,
  } = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: queryKeys,
    queryFn: () =>
      ProductService.getAllProducts({
        CategoryId: categoryId,
        name,
        Limit: limit,
        offset,
        MinListPrice,
        MaxListPrice,
      }),
    enabled:
      !!name ||
      !!categoryId ||
      !!limit ||
      !!offset ||
      !!MinListPrice ||
      !!MinListPrice,
    refetchOnWindowFocus: false,
  });

  return {
    products,
    loadingProducts,
    isRefetching,
    refetch,
    isSuccess,
    isError,
  };
};

export const useGetProductByProductId = (productId: string) => {
  const {
    data: product,
    isLoading: loadingProduct,
    isRefetching,
    refetch,
  } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => ProductService.getProductByProductId(productId),
    refetchOnWindowFocus: false,
    enabled: !!productId,
  });

  return {
    product,
    loadingProduct,
    isRefetching,
    refetch,
  };
};

export const useGetDeliveryAddresses = (shouldFetch: boolean) => {
  const {
    data: addresses,
    isLoading: loadingAddresses,
    refetch,
  } = useQuery({
    queryKey: ['delivery-addresses'],
    queryFn: ProductService.getDeliveryAddresses,
    refetchOnWindowFocus: false,
    enabled: shouldFetch,
  });

  return {
    addresses,
    loadingAddresses,
    refetch,
  };
};
