import Api from '@/helpers/api';
import { filteredQueryParams } from '@/helpers/utils';
import { CategoryQueryParams, CategoryType } from '@/services/categories/types';

export class CategoryService {
  private static CATEGORIES_API_BASE = '/Category';

  public static getAllCategories = async (params: CategoryQueryParams) => {
    const queryParams = filteredQueryParams({
      PageSize: params.pageSize,
      PageIndex: params.pageIndex,
      CategoryId: params.categoryId,
    });

    const response = (await Api.get<CategoryType[]>(
      `${this.CATEGORIES_API_BASE}/get-all?${queryParams}`
    )) as unknown as CategoryType[];

    return JSON.parse(JSON.stringify(response)) as CategoryType[];
  };
}
