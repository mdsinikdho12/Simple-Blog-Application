"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaGithub, FaDiscord, FaYoutube } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import Image from "next/image";
import { signOut, signIn, useSession } from "next-auth/react";

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession(); // ইউজারের সেশন ডেটা

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
          </Link>
        </div>

        {/* Right side buttons */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {session ? (
            <div className="flex items-center space-x-4">
              {/* Profile Icon */}
              <Link href="/admin">
                <Image
                  src={session.user?.image || "/avater.png"}
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-full cursor-pointer border-2 border-blue-500 hover:scale-105 transition"
                />
              </Link>

              {/* Logout Button */}
              <button
                className="rounded-md bg-red-500 px-3 py-2 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                onClick={() => signOut()}>
                Logout
              </button>
            </div>
          ) : (
            <button
              className="rounded-md bg-blue-500 px-3 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              onClick={() => signIn()}>
              Login
            </button>
          )}

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm 
              text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none 
              focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 
              dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={isOpen}>
            <span className="sr-only">Open main menu</span>
            {/* Hamburger icon */}
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Menu items */}
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-cta">
          <ul
            className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 
            rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row 
            md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 
            dark:border-gray-700">
            <li>
              <Link
                href="/"
                className="text-lg hover:text-[#273547] transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-lg rounded hover:text-[#8fa1b6] hover:bg-[#1a2536] transition duration-300">
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-lg rounded hover:text-[#8fa1b6] hover:bg-[#1a2536] transition duration-300">
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-lg hover:text-[#273547] transition duration-300">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
