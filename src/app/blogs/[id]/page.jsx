"use client";
import { useEffect, useState } from "react";

export default function BlogClientPage({ params }) {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await fetch(`/api/blogs`);
    const result = await response.json();
    const singleBlog = result.find((item) => item._id === params.id);
    setData(singleBlog);
  };

  useEffect(() => {
    fetchData();
  }, [params.id]);

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#24405c]">
        <p className="text-lg text-white animate-pulse">Loading blog...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3e4a57] via-[#142435] to-[#113b75] py-10 px-4 sm:px-8 lg:px-20">
      <div className="max-w-4xl mx-auto bg-[#1e293b] rounded-2xl shadow-lg p-8 sm:p-12">
        {/* Blog Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-snug mb-6">
          {data.title}
        </h1>

        {/* Meta Information */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
          <span>
            ✍️ Author:{" "}
            <span className="font-semibold">{data.author || "Unknown"}</span>
          </span>
          <span>
            📅 {new Date(data.createdAt || Date.now()).toLocaleDateString()}
          </span>
        </div>

        {/* Thumbnail Image */}
        {data.image && (
          <div className="mb-8">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-80 object-cover rounded-xl shadow-md"
            />
          </div>
        )}

        {/* Blog Content */}
        <div className="prose prose-lg prose-indigo max-w-none leading-relaxed text-white">
          <p>{data.content}</p>
        </div>

        {/* Tags Section */}
        {data.tags && (
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              📌 Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {data.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
      </div>
    </div>
  );
}
