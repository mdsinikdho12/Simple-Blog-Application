"use client";
import Sidebar from "@/app/Components/AdminComponents/Sideber";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#18304e]">
      {" "}
      <Sidebar />
      <main className="flex-1 p-4 sm:ml-[220px] transition-all duration-300">
        {children}
      </main>
    </div>
  );
}
