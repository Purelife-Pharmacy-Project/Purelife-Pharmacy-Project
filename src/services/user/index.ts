import { USER_TOKEN_KEY } from '@/constants';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

/**
 * All user related services should be defined here.
 * Methods should be async and return the User class.
 **/
export const loadAuthToken = (): string => cookies.get(USER_TOKEN_KEY);

export const saveAuthToken = (token: string) => {
  return cookies.set(USER_TOKEN_KEY, token, { path: '/', sameSite: 'strict' });
};

export const removeAuthToken = () =>
  cookies.remove(USER_TOKEN_KEY, { path: '/', sameSite: 'strict' });

export const logoutUser = () => {
  return removeAuthToken();
};
