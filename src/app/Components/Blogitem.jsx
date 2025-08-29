"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

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
      {blogData
        ? blogData.map((post) => (
            <div
              key={post._id}
              className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <h2 className="text-xl text-center mb-2  font-bold">
                {post.title}
              </h2>

              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-md"
              />

              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 mt-2">
                {post.content.length > 150
                  ? post.content.slice(0, 150) + "..."
                  : post.content}
              </p>

              <div className="flex items-center mt-4">
                <img
                  src={post.authorImg}
                  alt={post.author}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="text-sm font-medium">{post.author}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(post.createdAt).toLocaleDateString()}{" "}
                  </p>
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <span className="text-sm bg-blue-600 rounded-lg px-2 py-1 text-white">
                  {post.category}
                </span>
              </div>

              <Link
                href={`/blogs/${post._id}`}
                className="inline-block mt-4 text-blue-600 hover:underline">
                Read More
              </Link>
            </div>
          ))
        : Array.from({ length: 3 }).map((_, idx) => (
            <div
              key={idx}
              className="max-w-sm p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700">
              <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              <div className="flex items-center mt-4">
                <div className="w-10 h-10 me-3 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                <div>
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                  <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
          ))}
    </div>
  );
};

export default Blogitem;
