"use client";

import "./globals.css";
import Navber from "./Components/Navber";
import Footer from "./Components/Footer";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import { Hind_Siliguri } from "next/font/google";

// Font load
const hindSiliguri = Hind_Siliguri({
  subsets: ["latin", "bengali"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <html lang="en" className={hindSiliguri.className}>
      <head>
        <meta
          name="google-site-verification"
          content="zhcRs4-9uj6g2TzbIog6yjY1c5EKstHvTL9zg57whLU"
        />
      </head>
      <body className={`bg-[#18304e] ${hindSiliguri.className}`}>
        <SessionProvider>
          {!isAdminRoute && <Navber />}
          <main>{children}</main>
          {!isAdminRoute && <Footer />}
        </SessionProvider>
      </body>
    </html>
  );
}
