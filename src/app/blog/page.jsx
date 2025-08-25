import React from "react";
import Blogitem from "../Components/Blogitem";

const Page = () => {
  return (
    <div className="min-h-screen   bg-gradient-to-br from-[#203347] via-[#182e49] to-[#0c1a2c] ">
      {/* Page Heading */}
      <h1 className="text-4xl sm:text-5xl  font-extrabold text-center text-white-900 mb-12 drop-shadow-md">
        ✨ All Blog Posts
      </h1>

      <Blogitem />
    </div>
  );
};

export default Page;
