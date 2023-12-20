import { mock_categories } from '@/mocks/categories';
import { CategoryType } from '@/services/categories/types';

export class CategoryService {
  private static CATEGORIES_API_BASE = '/Category';

  public static getAllCategories = async () => {
    // const response = (await Api.get<CategoryType[]>(
    //   `${this.CATEGORIES_API_BASE}/get-all`
    // )) as unknown as CategoryType[];

    return (await new Promise((resolve) => {
      setTimeout(() => {
        resolve(mock_categories);
      }, 500);
    })) as unknown as CategoryType[];
  };
}
