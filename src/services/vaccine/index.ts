import Api from '@/helpers/api';
import { filteredQueryParams } from '@/helpers/utils';
import { Product, ProductType } from '../products/types';
import { Vaccine, VaccineQueryParams } from './types';

export class VaccineService {
  private static VACCINE_API_BASE = '/Vaccine';
  constructor() {}

  public static async getAllVaccines(params: VaccineQueryParams) {
    const queryParams = filteredQueryParams({
      Name: params.name,
      ProductId: params.productId,
      PageSize: params.pageSize,
      PageIndex: params.pageIndex,
    });

    const response = (await Api.get<{
      data: ProductType[];
      totalPage: number;
    }>(`${this.VACCINE_API_BASE}/get-vaccine?${queryParams}`)) as unknown as {
      data: ProductType[];
      totalPage: number;
    };

    const vaccines = response.data?.map((vaccine) => new Vaccine(vaccine));

    return JSON.parse(
      JSON.stringify({ data: vaccines, totalPages: response.totalPage })
    ) as { data: Product[]; totalPages: number };
  }
}
