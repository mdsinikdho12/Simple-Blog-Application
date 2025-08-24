"use client";

import "./globals.css";
import Navber from "./Components/Navber";
import Footer from "./Components/Footer";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");
  return (
    <html lang="en">
      <body className="bg-[#273547]">
        {!isAdminRoute && <Navber />}
        <main>{children}</main>
        {!isAdminRoute && <Footer />}
      </body>
    </html>
  );
}
