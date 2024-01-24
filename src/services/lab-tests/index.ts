import Api from '@/helpers/api';
import { filteredQueryParams } from '@/helpers/utils';
import { Product } from '../products/types';
import { LabTest, LabTestQueryParams, LabTestType } from './types';

export class LabTestService {
  private static LAB_TEST_API_BASE = '/LabTest';
  constructor() {}

  public static async getLabTests(params: LabTestQueryParams) {
    const queryParams = filteredQueryParams({
      Name: params.name,
      ProductId: params.productId,
      PageSize: params.pageSize,
      PageIndex: params.pageIndex,
    });

    const response = (await Api.get(
      `${this.LAB_TEST_API_BASE}/get-labtest?${queryParams}`
    )) as unknown as { data: LabTestType[]; totalPage: number };

    const tests = response.data?.map((test) => new LabTest(test));

    return JSON.parse(
      JSON.stringify({ data: tests, totalPages: response.totalPage })
    ) as { data: Product[]; totalPages: number };
  }
}
