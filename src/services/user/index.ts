import { PARTNER_ID_KEY, USER_ID_KEY, USER_TOKEN_KEY } from '@/constants';
import Api from '@/helpers/api';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { jwtDecode } from 'jwt-decode';
import { LoginPayload, RegisterPayload } from './schema';
import {
  LoginResponse,
  PartnerApiType,
  RegisterResponse,
  User,
  UserType,
} from './types';

class UsersService {
  private static USERS_API_BASE = '/Users';
  private static AUTH_API_BASE = '/Auth';

  constructor() {}

  public static loadAuthToken = (): string =>
    getCookie(USER_TOKEN_KEY) as string;

  public static loadUserId = (): string => getCookie(USER_ID_KEY) as string;

  public static loadPartnerId = (): string =>
    getCookie(PARTNER_ID_KEY) as string;

  private static saveAuthToken = (token: string) => {
    return setCookie(USER_TOKEN_KEY, token, {
      path: '/',
      sameSite: 'strict',
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3), // 3 days
    });
  };

  private static saveUserId = (userId: string) => {
    return setCookie(USER_ID_KEY, userId, {
      path: '/',
      sameSite: 'strict',
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3), // 3 days
    });
  };

  private static savePartnerId = (partnerId: string) => {
    return setCookie(PARTNER_ID_KEY, partnerId, {
      path: '/',
      sameSite: 'strict',
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3), // 3 days
    });
  };

  public static removeAuthToken = () => deleteCookie(USER_TOKEN_KEY);

  public static getUserFromToken() {
    const userId = this.loadUserId();
    const token = this.loadAuthToken();
    if (!token) {
      return null;
    }
    const decoded = jwtDecode(token) as {
      'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier': string;
      'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress': string;
      'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name': string;
      exp: number;
      iss: string;
      aud: string;
    };
    return {
      id: userId,
      email:
        decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
    };
  }

  public static decodeServerToken(token: string) {
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
      `${this.AUTH_API_BASE}/login`,
      payload
    )) as unknown as LoginResponse;

    if (!response.result) {
      throw 'Invalid login details';
    }

    this.saveUserId(response.result.toString());
    this.saveAuthToken(response.token);
    return response;
  }

  public static async register(payload: RegisterPayload) {
    const response = (await Api.post(
      `${this.USERS_API_BASE}/partner-signup`,
      payload
    )) as unknown as RegisterResponse;

    if (response.error) {
      throw 'Unable to register user';
    }

    return response.result;
  }

  public static async changePassword(payload: {
    oldPassword: string;
    newPassword: string;
  }) {
    const { data } = await Api.post(
      `${this.USERS_API_BASE}/change-password`,
      payload
    );

    return data;
  }

  public static async getUser() {
    // this is the user id on the browser. the userId is the user id on the server
    const clientUserId = this.getUserFromToken()?.id;

    if (!clientUserId) {
      this.logoutUser();
    }

    const response = (await Api.get<{ data: UserType; totalPage: number }>(
      `${this.USERS_API_BASE}?id=${clientUserId}`
    )) as unknown as { data: UserType[]; totalPage: number };

    return JSON.parse(JSON.stringify(new User(response.data[0]))) as UserType;
  }

  public static async getPartner() {
    const clientUserId = this.getUserFromToken()?.id;

    if (!clientUserId) {
      this.logoutUser();
    }

    const response = (await Api.get<{ data: PartnerApiType }>(
      `${this.USERS_API_BASE}/get-user-partner?PartnerIds=${clientUserId}&Fields=partner_id&Fields=email&Fields=phone&Fields=contact_address`
    )) as unknown as PartnerApiType;

    if (response.result) {
      const {
        partner_id: [id, name],
        email,
        phone,
        contact_address,
      } = response.result[0];
      this.savePartnerId(id.toString());

      return {
        id,
        name,
        phoneNumber: phone,
        contactAddress: contact_address,
        email,
      };
    }

    return {
      id: 0,
      name: '',
      phoneNumber: '',
      contactAddress: '',
      email: '',
    };
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
    this.removeAuthToken();
  }
}

export default UsersService;
