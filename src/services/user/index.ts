import { USER_TOKEN_KEY } from '@/constants';
import Api from '@/helpers/api';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { jwtDecode } from 'jwt-decode';
import { LoginPayload, RegisterPayload } from './schema';
import { LoginResponse, UserType } from './types';

class UsersService {
  private static USERS_API_BASE = '/Contact';

  constructor() {}

  public static loadAuthToken = (): string =>
    getCookie(USER_TOKEN_KEY) as string;

  private static saveAuthToken = (token: string) => {
    return setCookie(USER_TOKEN_KEY, token, {
      path: '/',
      sameSite: 'strict',
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3), // 3 days
    });
  };

  public static removeAuthToken = () => deleteCookie(USER_TOKEN_KEY);

  public static getUserFromToken() {
    const token = this.loadAuthToken();
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

  public static async login(payload: LoginPayload) {
    const response = (await Api.post<LoginResponse>(
      `${this.USERS_API_BASE}/login`,
      payload
    )) as unknown as LoginResponse;

    this.saveAuthToken(response.token);
    return response;
  }

  public static async register(payload: RegisterPayload) {
    const { data } = await Api.post(`${this.USERS_API_BASE}/create`, payload);
    return data;
  }

  public static async getUser() {
    const id = this.getUserFromToken().id;
    if (!id) return null;
    const response = (await Api.get<UserType>(
      `${this.USERS_API_BASE}?id=${id}`
    )) as unknown as UserType[];

    return JSON.parse(JSON.stringify(response[0])) as UserType;
  }

  public static async updateUser(payload: Partial<UserType>) {
    const response = (await Api.post<UserType>(
      `${this.USERS_API_BASE}/update`,
      payload
    )) as unknown as UserType[];

    return response[0];
  }

  public static logoutUser() {
    // remove auth token
    return this.removeAuthToken();
  }
}

export default UsersService;
