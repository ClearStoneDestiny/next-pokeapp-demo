import { decrypt, SESSION_COOKIE_NAME } from "@lib/session";
import { NextRequest, NextResponse } from "next/server";
import configs from "./configs";

const protectedRoutes = [
  configs.ROUTES.DASHBOARD,
  configs.ROUTES.COLLECTIONS,
  configs.ROUTES.POKEMON_DETAILS,
  configs.ROUTES.SHOP,
];
const publicOnlyRoutes = [
  configs.ROUTES.LOGIN,
  configs.ROUTES.PRICING,
  configs.ROUTES.REGISTER,
];

export async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isProtectedRoute = protectedRoutes.some((route) =>
    path.startsWith(route),
  );
  const isPublicOnlyRoute = publicOnlyRoutes.some((route) =>
    path.startsWith(route),
  );

  const sessionCookie = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  const session = await decrypt(sessionCookie);

  if (isProtectedRoute && !session?.userId) {
    const loginUrl = new URL(configs.ROUTES.LOGIN, request.nextUrl);
    loginUrl.searchParams.set("from", path);
    return NextResponse.redirect(loginUrl);
  }

  if (isPublicOnlyRoute && session?.userId) {
    return NextResponse.redirect(
      new URL(configs.ROUTES.DASHBOARD, request.nextUrl),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|svg)$).*)",
  ],
};
