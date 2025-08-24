"use client";
import { useState, useEffect } from "react";

const Blogitem = () => {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      const response = await fetch("/api/blogs");
      const data = await response.json();
      setBlogData(data);
    };

    fetchBlogData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4 p-4 bg-transparent shadow-md">
      {blogData ? (
        blogData.map((post) => (
          <div
            key={post._id}
            className=" p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <h2 className="text-xl text-center font-semibold">{post.title}</h2>

            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover rounded-md"
            />

            <p className=" mb-3 font-normal text-gray-500 dark:text-gray-400 mt-2">
              {post.content.length > 150
                ? post.content.slice(0, 150) + "..."
                : post.content}
            </p>

            <div className="flex items-center mt-4">
              <img
                src={post.authorImg} // ✅ fixed
                alt={post.author}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="text-sm font-medium">{post.author}</p>
                <p className="text-xs text-gray-500">
                  {new Date(post.createdAt).toLocaleDateString()}{" "}
                  {/* ✅ fixed */}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Blogitem;
