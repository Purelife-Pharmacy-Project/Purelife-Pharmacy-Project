import Api from '@/helpers/api';

class ProductService {
  private static PRODUCTS_API_BASE = '/Product';

  public static getAllProducts = async (
    active = true,
    pageSize = 10,
    pageIndex = 0,
    name = '',
    categoryId = '',
    productId = ''
  ) => {
    const response = await Api.get(
      `${this.PRODUCTS_API_BASE}/get-products?Active=true`
    );
    return response;
  };
}

export default ProductService;
