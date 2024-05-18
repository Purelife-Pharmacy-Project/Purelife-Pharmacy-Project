import { AxiosRequestConfig } from 'axios';

export type OdooResponseType<T> = {
  id: string | null;
  result: T | false;
  error: string | null;
};

export interface IApiPaginateResponse {
  itemsPerPage: number;
  page: number;
  pages: number;
  items: number;
}

export interface IApiResponse<T> {
  status: number;
  title: string;
  message: string;
  statusText: string;
  data: T;
  config: any;
}

export interface IApiSuccessResponse<T> extends IApiResponse<T> {
  meta?: IApiPaginateResponse;
  data: T;
}

export interface IApiErrorResponse<T> extends IApiResponse<T> {
  meta: undefined;
}

export interface Document {
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export type CustomAxiosRequestConfig = {} & AxiosRequestConfig;
