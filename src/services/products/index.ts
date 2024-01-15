import Api from '@/helpers/api';
import { filteredQueryParams } from '@/helpers/utils';
import {
  Product,
  ProductQueryParams,
  ProductType,
} from '@/services/products/types';

class ProductService {
  private static PRODUCTS_API_BASE = '/Product';

  public static getAllProducts = async (params: ProductQueryParams) => {
    const queryParams = filteredQueryParams({
      Active: params.active,
      PageSize: params.pageSize,
      PageIndex: params.pageIndex,
      Name: params.name,
      CategoryId: params.categoryId,
      ProductId: params.productId,
      'PriceRange.MinPrice': params.minPrice,
      'PriceRange.MaxPrice': params.maxPrice,
    });

    const response = (await Api.get<{
      data: ProductType[];
      totalPage: number;
    }>(`${this.PRODUCTS_API_BASE}/get-products?${queryParams}`)) as unknown as {
      data: ProductType[];
      totalPage: number;
    };

    const products = response.data?.map((product) => new Product(product));
    return JSON.parse(
      JSON.stringify({ products, totalPages: response.totalPage })
    ) as { products: Product[]; totalPages: number };
  };

  public static getProductByProductId = async (productId: string) => {
    const response = (await Api.get<{
      data: ProductType[];
      totalPages: number;
    }>(
      `${this.PRODUCTS_API_BASE}/get-products?ProductId=${productId}`
    )) as unknown as { data: ProductType[]; totalPages: number };

    console.log(response.data[0]);

    return new Product(response.data[0]);
  };
}

export default ProductService;
