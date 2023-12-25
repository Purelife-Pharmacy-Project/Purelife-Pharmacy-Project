import { mock_manufacturers } from '@/helpers/mocks/manufacturers';
import { ManufacturerType } from '@/services/manufacturers/types';

export class ManufacturersService {
  private static MANUFACTURERS_API_BASE = '/Manufacturer';

  public static getAllManufacturers = async (
    categoryId: string,
    name: string
  ) => {
    // const response = (await Api.get<CategoryType[]>(    //   `${this.CATEGORIES_API_BASE}/get-all`
    // )) as unknown as CategoryType[];

    return (await new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          mock_manufacturers.filter((manufacturer) => {
            if (categoryId && manufacturer.categoryId !== categoryId) {
              return false;
            } else if (
              name &&
              !manufacturer.name.toLowerCase().includes(name.toLowerCase())
            ) {
              return false;
            }

            return true;
          })
        );
      }, 500);
    })) as unknown as ManufacturerType[];
  };
}
