import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secret = process.env.JWT_SECRET;

export async function middleware(req) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  // Check for both authentication methods
  const {
    data: { session },
  } = await supabase.auth.getSession();
  
  const userId = req.cookies.get("userId")?.value;
  console.log('Middleware - userId cookie:', userId);
  console.log('Middleware - Supabase session:', session ? 'Found' : 'Not found');

  if (req.nextUrl.pathname.startsWith("/intern")) {
    // If we have either authentication method, verify the user exists
    if (userId || session?.user?.id) {
      const id = userId || session?.user?.id;
      console.log('Middleware - Verifying user:', id);

      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('id')
        .eq('id', id)
        .single();

      if (!userError && userData) {
        console.log('Middleware - Valid user found');
        return res;
      }
    }

    console.log('Middleware - No valid authentication found');
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  if (req.nextUrl.pathname.startsWith("/vip-courses")) {
    const token = req.cookies.get("token");
    if (!token) return NextResponse.redirect(new URL("/courses/payment", req.url));

    try {
      const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));
      if (!payload.vip_subscription) return NextResponse.redirect(new URL("/courses/payment", req.url));
    } catch {
      return NextResponse.redirect(new URL("/courses/payment", req.url));
    }
  }

  return res;
}

export const config = {
  matcher: ["/intern/:path*", "/signin", "/vip-courses/:path*"],
};
