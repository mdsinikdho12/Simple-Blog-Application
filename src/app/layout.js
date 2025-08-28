"use client";

import "./globals.css";
import Navber from "./Components/Navber";
import Footer from "./Components/Footer";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <html lang="en">
      <head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="zhcRs4-9uj6g2TzbIog6yjY1c5EKstHvTL9zg57whLU"
        />
      </head>
      <body className="bg-[#18304e]">
        <SessionProvider>
          {!isAdminRoute && <Navber />}
          <main>{children}</main>
          {!isAdminRoute && <Footer />}
        </SessionProvider>
      </body>
    </html>
  );
}
