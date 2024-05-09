import { RequestCookies } from 'next/dist/compiled/@edge-runtime/cookies';
import { NextRequest, NextResponse } from 'next/server';
import { USER_TOKEN_KEY } from './constants';

export const isAuthenticated = (request: NextRequest) => {
  const cookies = request.cookies;

  if (cookies) {
    console.log('cookies', cookies);
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
  const url = new URL(request.url);
  const origin = url.origin;
  const pathname = url.pathname;
  const currentRoute = request.nextUrl.pathname;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-url', request.url);
  requestHeaders.set('x-origin', origin);
  requestHeaders.set('x-pathname', pathname);

  const isLoggedIn = isAuthenticated(request);

  if (currentRoute === '/sign-in') {
    if (isLoggedIn) {
      // if the user is already authenticated, redirect them to the home page
      return NextResponse.redirect(new URL('/', request.nextUrl.origin));
    }

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  if (!isLoggedIn) {
    // if the user is not authenticated, redirect them to the login page
    removeAuthorization(request.cookies);

    // store the current route in the query string to redirect the user back to the current route after login
    return NextResponse.redirect(
      new URL(`/sign-in?redirectUrl=${currentRoute}`, request.url)
    );
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ['/my-account/:path*', '/billing', '/telehealth/drug-refill'],
};
