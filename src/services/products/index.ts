import Api from '@/helpers/api';
import { Product, ProductType } from '@/services/products/types';

class ProductService {
  private static PRODUCTS_API_BASE = '/Product';

  public static getAllProducts = async ({
    active = false,
    pageSize = 10,
    pageIndex = 1,
    name = '',
    categoryId = '',
    productId = '',
  }) => {
    const response = (await Api.get<ProductType[]>(
      `${this.PRODUCTS_API_BASE}/get-products?Active=${active}&PageSize=${pageSize}&PageIndex=${pageIndex}&Name=${name}&CategoryId=${categoryId}&ProductId=${productId}`
    )) as unknown as ProductType[];

    /**
     * Sending a serialisable object so Nextjs can pass it to client components safely
     * Ref: https://github.com/vercel/next.js/discussions/46137
     */

    const newProducts = response.map((product) => new Product(product));
    return JSON.parse(JSON.stringify(newProducts)) as Product[];
  };
}

export default ProductService;
