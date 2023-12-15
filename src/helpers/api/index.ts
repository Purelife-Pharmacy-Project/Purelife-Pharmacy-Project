import { API_BASE_URL } from '@/constants';
// import { logoutUser } from '@/services/user';
import _axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { IApiErrorResponse, IApiResponse } from './types';

class Api {
  private static hasToastedUnauthorizedError = false;

  private static axiosInstance = _axios.create({
    baseURL: `${API_BASE_URL}/`,
    timeout: 1000 * 60, // 60 seconds
    headers: {
      'Content-Type': 'application/json',
    },
  });

  private static handleApiSuccess = (res: AxiosResponse) => {
    return res.data;
  };

  private static isStringError(error: any): error is string {
    return typeof error === 'string';
  }

  private static handleApiError = (
    err: AxiosError<IApiErrorResponse<any>, any>
  ) => {
    let errorMessage = '';

    if (err.response) {
      const apiError: IApiErrorResponse<any> | string = err.response.data;

      // check if apiError is a string
      if (this.isStringError(apiError)) {
        errorMessage = apiError;
        console.error(
          `Backend returned code ${err.code}, status: null, ` + 'data:',
          apiError
        );
        throw (
          errorMessage ||
          "We couldn't complete your request. Please try again or check your internet connection."
        );
      }

      if (apiError.code === 'EXPIRED_TOKEN') {
        // UsersService.logoutUser();
        window.location.href = `/auth/login?redirectUrl=${window.location.pathname}`;
      }

      if (
        apiError.code === 'MISSING_TOKEN' &&
        !this.hasToastedUnauthorizedError
      ) {
        // UsersService.logoutUser();

        const timeout = setTimeout(() => {
          window.location.href = `/login?redirectUrl=${window.location.pathname}`;
        }, 1000);

        return () => clearTimeout(timeout);
      }

      console.error(
        `Backend returned code ${err.code}, status: ${apiError.status}, ` +
          `body was: ${apiError.title || apiError.message}`,
        'data:',
        apiError.data
      );
      errorMessage = apiError.title || apiError.message;
    } else if (err.request) {
      // client never received a response, or request never left
      console.error('An error occurred:', err.message);
    } else {
      // anything else
      console.error('Well, that was unexpected:', err.message);
    }

    throw (
      errorMessage ||
      "We couldn't complete your request. Please try again or check your internet connection."
    );
  };

  static async get<T extends Record<string, any> | string>(
    endpoint: string,
    config?: AxiosRequestConfig
  ): Promise<IApiResponse<T>> {
    return this.axiosInstance
      .get(endpoint, config)
      .then(this.handleApiSuccess)
      .catch(this.handleApiError);
  }

  static async post<T extends Record<string, any>>(
    endpoint: string,
    data: any
  ): Promise<IApiResponse<T>> {
    return this.axiosInstance
      .post(endpoint, data)
      .then(this.handleApiSuccess)
      .catch(this.handleApiError);
  }

  static async put<T extends Record<string, any>>(
    endpoint: string,
    data: any
  ): Promise<IApiResponse<T>> {
    return this.axiosInstance
      .put(endpoint, data)
      .then(this.handleApiSuccess)
      .catch(this.handleApiError);
  }

  static async delete<T extends Record<string, any>>(
    endpoint: string
  ): Promise<IApiResponse<T>> {
    return this.axiosInstance
      .delete(endpoint)
      .then(this.handleApiSuccess)
      .catch(this.handleApiError);
  }
}

export default Api;
