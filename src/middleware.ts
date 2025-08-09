import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export { default } from 'next-auth/middleware';

export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request, secret: process.env.NEXT_AUTH_SECRET });

    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next(); // Continue as normal
}

// Apply middleware only to these routes
export const config = {
    matcher: ['/dashboard'],
};