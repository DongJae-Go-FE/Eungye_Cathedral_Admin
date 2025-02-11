import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("next-auth.session-token");

  if (!token) {
    if (req.nextUrl.pathname !== "/login") {
      return Response.redirect(new URL("/login", req.url));
    }
  }
  if (token) {
    if (req.nextUrl.pathname === "/login")
      return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|icons|public).*)",
  ],
};
