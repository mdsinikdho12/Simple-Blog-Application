"use client";
import React, { useState } from "react";
import Link from "next/link";

const sidebarItems = [
  { name: "Dashboard", icon: "📊", link: "/admin" },
  { name: "All Posts", icon: "📝", link: "/admin/posts" },
  { name: "Subscriptions", icon: "📩", link: "/admin/subscriptions" },
  { name: "Add Post", icon: "➕", link: "/admin/addProduct" },
  { name: "All Users", icon: "👥", link: "/admin/Alluser" },
  { name: "Messages", icon: "💬", link: "/admin/messages" },
  { name: "Home", icon: "🏠", link: "/" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded-md">
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-gray-900 text-white h-screen py-5 fixed top-0 left-0 
        w-[220px] z-40 transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"}`}>
        <h2 className="text-center mb-8 mt-5 text-2xl font-semibold">
          Admin Panel
        </h2>
        <nav>
          <ul className="list-none p-0">
            {sidebarItems.map((item) => (
              <li key={item.name} className="mb-5">
                <Link
                  href={item.link}
                  className="flex items-center px-5 py-2 rounded-md transition-colors hover:bg-gray-800"
                  onClick={() => setIsOpen(false)}>
                  <span className="mr-3 text-xl">{item.icon}</span>
                  <span className="text-base">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
