import { API_BASE_URL, USER_TOKEN_KEY } from '@/constants';
import { User, UserType } from '@/services/user/types';
import _axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { toast } from 'sonner';
import { isServer } from '../utils';

const USERS_API_BASE = '/Contact';

// Server Instance
export const serverAxiosInstance = _axios.create({
  baseURL: `${API_BASE_URL}/`,
  timeout: 1000 * 60, // 60 seconds
});

// Server Interceptors
let hasHandledUnauthorizedError = false;
const cookieStore = cookies();
const token = cookieStore.get(USER_TOKEN_KEY)?.value || '';

serverAxiosInstance.interceptors.request.use(async (config) => {
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

serverAxiosInstance.interceptors.response.use(
  async (response) => {
    hasHandledUnauthorizedError = false;

    if (response.headers.Authorization) return response;

    if (token) {
      serverAxiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
    }

    return response;
  },
  (error) => {
    if (error.response) {
      const status = error.response.status;

      if (status === 401) {
        if (!isServer) {
          if (!hasHandledUnauthorizedError) {
            toast.error('Unauthorized. Please login again.');
            hasHandledUnauthorizedError = true;

            const logoutBtn = document.getElementById('logout-btn');

            if (logoutBtn) {
              logoutBtn.click();
            }

            redirect(`/sign-in?redirectUrl=${window.location.pathname}`);
          }
        }
      }
    }

    return Promise.reject(error);
  }
);

export const getUserIdFromServerToken = () => {
  if (token) {
    const decoded = jwtDecode(token) as {
      'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier': string;
      'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress': string;
      'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name': string;
      exp: number;
      iss: string;
      aud: string;
    };

    return {
      id: decoded[
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
      ],
      email:
        decoded[
          'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'
        ],
      name: decoded[
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
      ],
      exp: decoded.exp,
    };
  }
};

export const removeServerSession = () => {};

export const getUserSession = async () => {
  // TODO: continue here
  const userId = getUserIdFromServerToken()?.id;

  if (!userId) {
  }

  const response = (await serverAxiosInstance.get<{
    data: UserType;
    totalPage: number;
  }>(`${USERS_API_BASE}?id=${userId}`)) as unknown as {
    data: UserType[];
    totalPage: number;
  };

  return JSON.parse(JSON.stringify(new User(response.data[0]))) as UserType;
};
