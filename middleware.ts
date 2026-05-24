import { NextRequest, NextResponse } from "next/server";

// Anyone without the cookie gets sent to /login.
// The cookie is set server-side by app/login/page.tsx after a successful form post.
const COOKIE_NAME = "acadia_access";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow login page, login API, and Next.js internals through.
  if (
    pathname === "/login" ||
    pathname.startsWith("/api/login") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt"
  ) {
    return NextResponse.next();
  }

  const hasAccess = req.cookies.get(COOKIE_NAME)?.value === "ok";
  if (hasAccess) return NextResponse.next();

  const loginUrl = new URL("/login", req.url);
  if (pathname !== "/") loginUrl.searchParams.set("from", pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  // Run on every request except static assets handled above.
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
