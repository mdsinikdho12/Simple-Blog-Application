"use client";
import { useEffect, useState } from "react";

const Page = () => {
  const [user, setUser] = useState([]);
  const [blog, setBlog] = useState([]);

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
    const fetchUsers = async () => {
      const res = await fetch("/api/users");
      const data = await res.json();
      setUser(data);
    };

    fetchUsers();
    fetchPosts();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Admin Dashboard</h1>
      <h2 className="text-xl font-bold text-center">Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-6">
        <div className="bg-[#103355] text-white p-4 rounded-lg text-center shadow">
          <h2 className="text-xl font-bold">{user.length}</h2>
          <p>Users</p>
        </div>
        <div className="bg-[#103355] text-white p-4 rounded-lg text-center shadow">
          <h2 className="text-xl font-bold">{blog.length}</h2>
          <p>Blogs</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
