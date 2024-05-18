import Api from '@/helpers/api';
import { filteredQueryParams } from '@/helpers/utils';
import {
  Product,
  ProductQueryParams,
  ProductType,
} from '@/services/products/types';
import { OdooResponseType } from '@/helpers/api/types';

class ProductService {
  private static PRODUCTS_API_BASE = '/Product';

  public static getAllProducts = async (params: ProductQueryParams) => {
    const queryParams = filteredQueryParams({
      IsPublished: params.isPublished ?? true,
      MinListPrice: params.MinListPrice || 0,
      MaxListPrice: params.MaxListPrice || 1000000,
      Limit: params.Limit,
      Offset: params.offset,
      CategoryId: params.CategoryId,
    });

    const response = (await Api.get<{
      data: ProductType[];
    }>(
      `${this.PRODUCTS_API_BASE}/fetch-products?${
        queryParams + '&Fields=name&Fields=lst_price&Fields=image_1024'
      }`
    )) as unknown as {
      result: ProductType[];
    };

    return (response.result || [])?.map((product) => new Product(product));
  };

  public static searchProducts = async (params: ProductQueryParams) => {
    const queryParams = filteredQueryParams({
      IsPublished: true,
      Limit: params.Limit,
      Offset: params.offset,
      SearchQuery: params.searchQuery,
    });

    const response = (await Api.get<{
      data: ProductType[];
    }>(
      `${this.PRODUCTS_API_BASE}/search-products?${
        queryParams + '&Fields=name&Fields=lst_price&Fields=image_1024'
      }`
    )) as unknown as {
      result: ProductType[];
    };

    return (response.result || [])?.map((product) => new Product(product));
  };

  public static getProductByProductId = async (productId: string) => {
    const response = (await Api.get<
      OdooResponseType<
        Array<{
          id: string;
          name: string;
          lst_price: number;
          image_256: number;
        }>
      >
    >(
      `${this.PRODUCTS_API_BASE}/get-by-id?productId=${productId}`
    )) as unknown as OdooResponseType<
      Array<{
        id: string;
        name: string;
        lst_price: number;
        image_256: number;
      }>
    >;

    if (response.error || !response.result) {
      throw 'Unable to fetch Item';
    }

    return new Product({
      ...response.result[0],
      image_1024: response.result[0].image_256,
      description: '',
      canBePurchased: true,
      canBeSold: true,
      categ_id: [0, ''],
      id: 0,
    });
  };

  public static getDeliveryAddresses = async () => {
    const response = (await Api.get<{ data: ProductType[] }>(
      `${this.PRODUCTS_API_BASE}/get-delivery`
    )) as unknown as { data: ProductType[] };

    return response.data;
  };
}

export default ProductService;
