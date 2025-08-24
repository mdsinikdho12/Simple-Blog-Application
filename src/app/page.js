"use client";

import Subscribe from "./Components/Subscribe";
import Blogitem from "./Components/Blogitem";

export default function Home() {
  return (
    <div className="bg-gradient-to-r min-h-screen from-[#273547] via-[#202C3B] to-[#33405A] py-12 px-4">
      <h1 className="mb-7 text-center text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Discover Our{" "}
        <mark className="px-2 text-white bg-blue-600 rounded-sm dark:bg-blue-500">
          Latest News
        </mark>
      </h1>
      <p className="mt-5 md:mt-4 text-base md:text-lg text-center text-gray-200 max-w-xl mx-auto">
        Welcome to our blog site where you can find the latest updates and
        articles on
        <span className="font-semibold text-blue-400 ml-1">
          Programming, Web Development, and Tech Trends
        </span>
      </p>
      <Subscribe />
      <Blogitem />
    </div>
  );
}
