export interface IApiPaginateResponse {
  itemsPerPage: number;
  page: number;
  pages: number;
  items: number;
}

export interface IApiResponse<T> {
  status: 'error' | 'success';
  code: string;
  message: string;
  data: T;
  meta?: IApiPaginateResponse;
}

export interface IApiSuccessResponse<T> extends IApiResponse<T> {
  status: 'success';
  meta?: IApiPaginateResponse;
  data: T;
}

export interface IApiErrorResponse<T> extends IApiResponse<T> {
  status: 'error';
  meta: undefined;
}

export interface Document {
  _id: string;
  createdAt: string;
  updatedAt: string;
}
