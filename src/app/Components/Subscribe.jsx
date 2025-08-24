import React from "react";

const Subscribe = () => {
  return (
    <div className="flex items-center mx-auto mt-6  bg-[#2f3640] rounded-lg overflow-hidden w-full max-w-md">
      <span className="px-3">
        <img src="/email.png" alt="email icon" className="h-6 w-8" />
      </span>

      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-2 py-3 text-gray-200 bg-[#2f3640] focus:outline-none"
      />

      <button className="bg-blue-600 text-white px-5 py-3 hover:bg-blue-700 transition">
        Subscribe
      </button>
    </div>
  );
};

export default Subscribe;
