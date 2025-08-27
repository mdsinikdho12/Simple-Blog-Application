"use client";
import { useEffect, useState } from "react";

const Page = () => {
  const [user, setUser] = useState([]);
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [unique, setUnique] = useState(0);

  const fetchPosts = async () => {
    try {
      const res = await fetch("/api/blogs");
      const data = await res.json();
      setBlog(data);
    } catch (error) {
      console.error("Failed to load posts", error);
    }
  };

  useEffect(() => {
    const fetchVisitors = async () => {
      const res = await fetch("/api/visitor");
      const data = await res.json();
      setUnique(data.uniqueVisitors);
    };
    const fetchUsers = async () => {
      const res = await fetch("/api/users");
      const data = await res.json();
      setUser(data);
    };

    const loadData = async () => {
      await Promise.all([fetchUsers(), fetchPosts()]);
      setLoading(false);
    };

    loadData();
    fetchVisitors();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Admin Dashboard</h1>
      <h2 className="text-xl font-bold text-center">Statistics</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-6">
        {loading ? (
          <>
            {/* Skeleton Loader for Users */}
            <div className="bg-[#103355] p-4 rounded-lg text-center shadow animate-pulse">
              <div className="h-8 w-16 mx-auto bg-gray-600 rounded mb-2"></div>
              <div className="h-4 w-20 mx-auto bg-gray-500 rounded"></div>
            </div>

            {/* Skeleton Loader for Blogs */}
            <div className="bg-[#103355] p-4 rounded-lg text-center shadow animate-pulse">
              <div className="h-8 w-16 mx-auto bg-gray-600 rounded mb-2"></div>
              <div className="h-4 w-20 mx-auto bg-gray-500 rounded"></div>
            </div>
          </>
        ) : (
          <>
            {/* Users Count */}
            <div className="bg-[#103355] text-white p-4 rounded-lg text-center shadow">
              <h2 className="text-xl font-bold">{user.length}</h2>
              <p className="font-semibold"> 👥Users</p>
            </div>

            {/* Blogs Count */}
            <div className="bg-[#103355] text-white p-4 rounded-lg text-center shadow">
              <h2 className="text-xl font-bold">{blog.length}</h2>
              <p className="font-semibold"> 📝Blogs</p>
            </div>
            <div className="bg-[#103355] text-white p-4 rounded-lg text-center shadow">
              <p className="text-3xl mt-2">{unique}</p>
              <h2 className="text-xl font-bold">👤 Unique Visitors</h2>
              <p className="text-sm text-gray-400">(Per Day Counted)</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
