import Api from '@/helpers/api';
import { CategoryType } from './type';

export class CategoryService {
  private static CATEGORIES_API_BASE = '/Category';

  public static getAllCategories = async () => {
    const response = (await Api.get<CategoryType[]>(
      `${this.CATEGORIES_API_BASE}/get-all`
    )) as unknown as CategoryType[];

    return response;
  };
}
