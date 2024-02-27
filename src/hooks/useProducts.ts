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
        active: true,
        pageSize: 3,
        pageIndex: 1,
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
  pageSize?: number;
  searchStr?: string;
  pageIndex?: number;
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
      params.pageSize,
      params.pageIndex,
    ],
    queryFn: () =>
      ProductService.getAllProducts({
        categoryId: params.categoryId,
        pageSize: params.pageSize,
        pageIndex: params.pageIndex,
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

export const useGetProducts = (
  categoryId?: string,
  name?: string,
  pageSize?: number,
  pageIndex?: number,
  active?: boolean,
  productId?: string,
  minPrice?: string,
  maxPrice?: string
) => {
  const queryKeys = ['products'];
  if (categoryId) queryKeys.push(categoryId);
  if (name) queryKeys.push(name);
  if (minPrice) queryKeys.push(minPrice);
  if (maxPrice) queryKeys.push(maxPrice);
  if (pageIndex) queryKeys.push(String(pageIndex));
  if (pageSize) queryKeys.push(String(pageSize));

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
        categoryId,
        name,
        pageSize,
        pageIndex,
        active,
        productId,
        minPrice,
        maxPrice,
      }),
    enabled: queryKeys.length > 1,
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
