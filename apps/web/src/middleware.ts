import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

async function verifyJWT(token: string) {
  const SECRET_KEY = new TextEncoder().encode('human1234');
  try {
    const { payload } = await jwtVerify(token, SECRET_KEY);
    return payload;
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
}

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  const url = request.nextUrl.pathname;

  if (token) {
    try {
      const decoded = await verifyJWT(token);
      console.log(decoded)
      if (url === '/login' || url === '/register') {
        if (decoded.isOrganizer) {
          return NextResponse.redirect(
            new URL('/organizer/dashboard', request.url),
          );
        }

        return NextResponse.redirect(new URL('/profile', request.url));
      }

      if (decoded.isOrganizer && url.includes('/organizer')) {
        return NextResponse.next();
      } else if (decoded.isOrganizer && url.includes('/profile')) {
        return NextResponse.redirect(new URL('/organizer/dashboard', request.url));
      }

      if (!decoded.isOrganizer && url.includes('/organizer')) {
        return NextResponse.redirect(new URL('/profile', request.url));
      } else {
        return NextResponse.next();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  } else {
    if (url === '/login' || url === '/register') {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/', '/login', '/register', '/organizer/:path*', '/profile'],
};
