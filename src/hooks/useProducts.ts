import ProductService from '@/services/products';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

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
  limit,
  MinListPrice,
  MaxListPrice,
  isPublished,
}: {
  categoryId?: string;
  limit?: number;
  offset?: number;
  MinListPrice?: number;
  MaxListPrice?: number;
  isPublished?: boolean;
} = {}) => {
  const queryKeys = [
    'products',
    categoryId,
    MinListPrice,
    MaxListPrice,
    String(limit),
    isPublished,
  ];

  const {
    data: products,
    isLoading: loadingProducts,
    isRefetching,
    isSuccess,
    isError,
    refetch,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: queryKeys,
    queryFn: async ({ pageParam }) => {
      return await ProductService.getAllProducts({
        CategoryId: categoryId,
        Limit: limit,
        offset: pageParam,
        MinListPrice,
        MaxListPrice,
        isPublished,
      });
    },
    enabled: !!categoryId || !!limit || !!MinListPrice || !!MaxListPrice,
    refetchOnWindowFocus: false,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length ? allPages.length * lastPage.length : undefined;
    },
  });

  return {
    products,
    loadingProducts,
    isRefetching,
    refetch,
    isSuccess,
    isError,
    fetchProductNextPage: fetchNextPage,
    isFetchingProductNextPage: isFetchingNextPage,
    productHasNextPage: hasNextPage,
  };
};

export const useSearchProducts = ({
  searchQuery,
  offset,
  limit,
}: {
  searchQuery?: string;
  offset: number;
  limit: number;
}) => {
  const queryKeys = [
    'search-products',
    String(offset),
    String(limit),
    searchQuery,
  ].filter(Boolean);

  const {
    data: products,
    isLoading: loadingFilteredProducts,
    isRefetching,
    isSuccess,
    isError,
    refetch,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: queryKeys,
    queryFn: ({ pageParam }) =>
      ProductService.searchProducts({
        searchQuery,
        Limit: limit,
        offset: pageParam,
      }),
    enabled: !!searchQuery?.length && (!!limit || !!offset),
    refetchOnWindowFocus: false,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length ? allPages.length * lastPage.length : undefined;
    },
  });

  return {
    filteredProducts: products,
    loadingFilteredProducts,
    isRefetching,
    refetch,
    isSuccess,
    isError,
    fetchFilteredProductNextPage: fetchNextPage,
    isFetchingFilteredProductNextPage: isFetchingNextPage,
    filteredProductHasNextPage: hasNextPage,
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
