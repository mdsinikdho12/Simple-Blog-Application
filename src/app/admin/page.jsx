import React from "react";

const Page = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Admin Dashboard</h1>
      <h2 className="text-xl font-bold text-center">Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-6">
        <div className="bg-[#103355] text-white p-4 rounded-lg text-center shadow">
          <h2 className="text-xl font-bold">120</h2>
          <p>Users</p>
        </div>
        <div className="bg-[#103355] text-white p-4 rounded-lg text-center shadow">
          <h2 className="text-xl font-bold">12</h2>
          <p>Blogs</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
