import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};

export default withAuth(
  async function middleware(req) {
    const url = req.nextUrl.pathname;

    const role = req.nextauth?.token?.role || req.nextauth?.token?.user?.role;
    console.log(req.nextauth?.token, "role");

    if (url.includes("/admin") && role !== "admin") {
      return NextResponse.redirect(new URL("/", req.url));
    }

    if (url.startsWith("/api/admin") && role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        if (!token) {
          return false;
        }

        return true;
      },
    },
  }
);
