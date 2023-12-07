import { USER_TOKEN_KEY } from '@/constants';
import Api from '@/helpers/api';
import { Cookies } from 'react-cookie';
import { LoginPayload, RegisterPayload } from './schema';

class UsersService {
  private static cookies = new Cookies();
  private static USERS_API_BASE = '/Contact';
  constructor() {}

  public static async login(payload: LoginPayload) {
    const { data } = await Api.post(`${this.USERS_API_BASE}/login`, payload);
    return data;
  }

  public static async register(payload: RegisterPayload) {
    const { data } = await Api.post(`${this.USERS_API_BASE}/create`, payload);
    return data;
  }

  public static async getUser() {
    const { data } = await Api.get(`${this.USERS_API_BASE}`);
    return data;
  }

  public static loadAuthToken = () => this.cookies.get(USER_TOKEN_KEY);

  public static saveAuthToken = (token: string) => {
    return this.cookies.set(USER_TOKEN_KEY, token, {
      path: '/',
      sameSite: 'strict',
    });
  };

  public static logoutUser() {
    // remove auth token
    return this.cookies.remove(USER_TOKEN_KEY, { path: '/' });
  }
}

export default UsersService;
