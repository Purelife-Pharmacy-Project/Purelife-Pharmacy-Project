import { OdooResponseType } from '@/helpers/api/types';

export type CategoryQueryParams = {
  categoryId?: string;
  pageSize?: number;
  pageIndex?: number;
};

export type CategoryResponse = {} & OdooResponseType<Array<CategoryType>>;

export type CategoryType = {
  id: string;
  name: string;
};
