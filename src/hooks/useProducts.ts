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
  subCategoryId?: string;
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
      params.subCategoryId,
    ],
    queryFn: () =>
      ProductService.getAllProducts({
        CategoryId: params.categoryId,
        SubCategoryId: params.subCategoryId,
        Limit: params.limit,
        offset: params.offset,
        name: params.searchStr,
      }),
    refetchOnWindowFocus: false,
    enabled:
      !!params.categoryId || !!params.searchStr || !!params.subCategoryId,
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

export const useGetProductsInfinity = ({
  categoryId,
  limit,
  offset,
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
    offset,
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
    fetchPreviousPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
    hasNextPage,
    hasPreviousPage,
  } = useInfiniteQuery({
    queryKey: queryKeys,
    queryFn: async ({ pageParam }) => {
      return await ProductService.getAllProducts({
        CategoryId: categoryId,
        Limit: limit,
        offset,
        MinListPrice,
        MaxListPrice,
        isPublished,
      });
    },
    enabled: !!categoryId || !!limit || !!MinListPrice || !!MaxListPrice || !!offset,
    refetchOnWindowFocus: false,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length ? allPages.length * lastPage.length : undefined;
    },
    getPreviousPageParam: (firstPage, allPages) => {
      if (limit) {
        const currentOffset = (allPages.length - 1) * limit;
        const previousOffset = currentOffset - limit;
        return previousOffset >= 0 ? previousOffset : undefined;
      }
      
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
    fetchProductPreviousPage: fetchPreviousPage,
    isFetchingProductNextPage: isFetchingNextPage,
    isFetchingProductPreviousPage: isFetchingPreviousPage,
    productHasNextPage: hasNextPage,
    productHasPreviousPage: hasPreviousPage,
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
