import { RequestCookies } from 'next/dist/compiled/@edge-runtime/cookies';
import { NextRequest, NextResponse } from 'next/server';
import { USER_TOKEN_KEY } from './constants';

export const isAuthenticated = (request: NextRequest) => {
  const cookies = request.cookies;

  if (cookies) {
    return (
      !!cookies.get(USER_TOKEN_KEY)?.value &&
      request.cookies.get(USER_TOKEN_KEY)?.value !== ''
    );
  }
};

export const removeAuthorization = (cookies: RequestCookies) => {
  // remove the user token from the cookies
  cookies.set({
    name: USER_TOKEN_KEY,
    value: '',
  });
};

export const goHome = () => {
  NextResponse.redirect('/');
};

export function middleware(request: NextRequest) {
  // if the user is not authenticated, redirect them to the login page
  if (!isAuthenticated(request)) {
    removeAuthorization(request.cookies);
    const currentRoute = request.nextUrl.pathname;
    return NextResponse.redirect(
      new URL(`/sign-in?redirectUrl=${currentRoute}`, request.url)
    );
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/my-account/:path*', '/billing', '/telehealth/drug-refill'],
};
