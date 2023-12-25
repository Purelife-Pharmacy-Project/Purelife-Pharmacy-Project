import { mock_products } from '@/helpers/mocks/products';
import { Product, ProductType } from '@/services/products/types';

class ProductService {
  // private static PRODUCTS_API_BASE = '/Product';
  private static PRODUCTS_API_BASE = '/products';

  public static getAllProducts = async ({
    active = false,
    pageSize = 10,
    pageIndex = 1,
    name = '',
    categoryId = '',
    manufacturerId = '',
    productId = '',
  }) => {
    // const response = (await Api.get<ProductType[]>(
    //   `${this.PRODUCTS_API_BASE}/get-products?Active=${active}&PageSize=${pageSize}&PageIndex=${pageIndex}&Name=${name}&CategoryId=${categoryId}&ProductId=${productId}`
    // )) as unknown as ProductType[];
    try {
      const response = (await new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            mock_products.filter((product) => {
              //   check if the params are available and if they are, check if they match the product
              if (active && product.isActive !== active) return false;
              else if (
                name &&
                !product.name.toLowerCase().includes(name.toLowerCase())
              ) {
                return false;
              } else if (categoryId && product.categoryId !== categoryId) {
                return false;
              } else if (
                manufacturerId &&
                product.manufacturerId !== manufacturerId
              ) {
                return false;
              }
              return product;
            })
          );
        }, 500);
      })) as unknown as ProductType[];

      /**
       * Sending a serializable object so Next.js can pass it to client components safely
       * Ref: https://github.com/vercel/next.js/discussions/46137
       */
      const newProducts = response.map((product) => new Product(product));
      return JSON.parse(JSON.stringify(newProducts)) as Product[];
    } catch (error) {
      console.error(error);
      return [];
    }
  };
}

export default ProductService;
