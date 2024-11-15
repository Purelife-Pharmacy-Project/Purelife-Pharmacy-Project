import Api from '@/helpers/api';
import { filteredQueryParams } from '@/helpers/utils';
import { Product, ProductType } from '../products/types';
import { LabTest, LabTestQueryParams } from './types';

export class LabTestService {
  private static LAB_TEST_API_BASE = '/LabTest';
  constructor() {}

  public static async getLabTests(params: LabTestQueryParams) {
    const queryParams = filteredQueryParams({
      Name: params.name,
      ProductId: params.productId,
      PageSize: params.pageSize,
      PageIndex: params.pageIndex,
      CategoryId: params.categoryId,
    });

    const response = (await Api.get(
      `${this.LAB_TEST_API_BASE}/get-labtest?${queryParams}`
    )) as unknown as { data: ProductType[]; totalPage: number };

    const tests = response.data?.map((test) => new LabTest(test));

    return JSON.parse(
      JSON.stringify({ data: tests, totalPages: response.totalPage })
    ) as { data: Product[]; totalPages: number };
  }
}
