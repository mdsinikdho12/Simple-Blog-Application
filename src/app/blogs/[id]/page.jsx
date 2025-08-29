"use client";
import React from "react";
import { useEffect, useState } from "react";
import { Alert, Button } from "@heroui/react";

export default function BlogClientPage({ params }) {
  const [data, setData] = useState(null);
  const [isVisible, setIsVisible] = React.useState(false);

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
  const title = "Text copy Successfully";
  const description =
    "Your action has been completed successfully. We'll notify you when updates are available.";

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
          <p className="text-xl">{data.content}</p>
        </div>

        {/* Tags Section */}
        {data.tags && (
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-gray-300 mb-3">
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

        {/* Footer: Copy & Share */}
        <div className="mt-10 flex items-center gap-4">
          {/* Copy Link Button */}
          <Button
            color="primary"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              setIsVisible(true);
              setTimeout(() => setIsVisible(false), 3000); // auto hide after 3 sec
            }}>
            📋 Copy Link
          </Button>

          {/* Share Button */}
          <Button
            color="success"
            onClick={async () => {
              if (navigator.share) {
                await navigator.share({
                  title: data.title,
                  text: "Check out this blog!",
                  url: window.location.href,
                });
              } else {
                alert("Sharing is not supported in this browser.");
              }
            }}>
            🔗 Share
          </Button>
        </div>

        {/* Success Alert */}
        {isVisible && (
          <div className="fixed top-4 right-4 z-50">
            <div
              id="toast-success"
              class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800"
              role="alert">
              <div class="inline-flex items-center justify-center shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span class="sr-only">Check icon</span>
              </div>
              <div class="ms-3 text-sm font-normal">
                Text copied successfully.
              </div>
              <button
                type="button"
                class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                data-dismiss-target="#toast-success"
                aria-label="Close">
                <span class="sr-only">Close</span>
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
