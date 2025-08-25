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
