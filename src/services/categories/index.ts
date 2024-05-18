import Api from '@/helpers/api';
import { filteredQueryParams } from '@/helpers/utils';
import {
  CategoryQueryParams,
  CategoryResponse,
} from '@/services/categories/types';

export class CategoryService {
  private static CATEGORIES_API_BASE = '/Product';

  public static getAllCategories = async (params: CategoryQueryParams) => {
    const queryParams = filteredQueryParams({
      PageSize: params.pageSize,
      PageIndex: params.pageIndex,
      CategoryId: params.categoryId,
      Fields: 'name',
    });

    const response = (await Api.get<CategoryResponse>(
      `${this.CATEGORIES_API_BASE}/list-product-categories?${queryParams}`
    )) as unknown as CategoryResponse;

    console.log();

    if (response.error) {
      throw 'Error getting category';
    }

    return response.result || [];
  };
}
