"use client";

import { useState, useRef } from "react";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: "",
    category: "",
    authorImg: "",
    author: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const [blogPreview, setBlogPreview] = useState(null);
  const [authorPreview, setAuthorPreview] = useState(null);

  // 🔑 file input এর জন্য ref
  const blogFileRef = useRef(null);
  const authorFileRef = useRef(null);

  // input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // image upload
  const handleImageUpload = async (e, fieldName) => {
    const file = e.target.files[0];
    if (!file) return;

    if (fieldName === "image") {
      setBlogPreview(URL.createObjectURL(file));
    } else if (fieldName === "authorImg") {
      setAuthorPreview(URL.createObjectURL(file));
    }

    const formDataUpload = new FormData();
    formDataUpload.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formDataUpload,
      });

      const data = await res.json();
      if (res.ok) {
        setFormData((prev) => ({ ...prev, [fieldName]: data.url }));
      } else {
        setMessage("❌ Image upload failed!");
        setError(true);
      }
    } catch (err) {
      console.error(err);
      setMessage("⚠️ Something went wrong while uploading image!");
      setError(true);
    }
  };

  // form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError(false);

    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setMessage("✅ Blog added successfully!");
        setFormData({
          title: "",
          content: "",
          image: "",
          category: "",
          authorImg: "",
          author: "",
        });
        setBlogPreview(null);
        setAuthorPreview(null);

        // 🔑 file input reset
        if (blogFileRef.current) blogFileRef.current.value = "";
        if (authorFileRef.current) authorFileRef.current.value = "";
      } else {
        setMessage("❌ Failed to add blog!");
        setError(true);
      }
    } catch (err) {
      console.error(err);
      setMessage("⚠️ Something went wrong!");
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-gray-700">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">
        ✍️ Add New Blog
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block mb-1 font-medium text-white">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-600 bg-transparent text-white focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Content */}
        <div>
          <label className="block mb-1 font-medium text-white">Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows="5"
            className="w-full p-3 rounded-lg border border-gray-600 bg-transparent text-white focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Blog Image Upload */}
        <div>
          <label className="block mb-1 font-medium text-white">
            Blog Image
          </label>
          <input
            type="file"
            accept="image/*"
            ref={blogFileRef} // 🔑 ref
            onChange={(e) => handleImageUpload(e, "image")}
            className="w-full p-3 rounded-lg border border-gray-600 bg-transparent text-white"
            required
          />
          {blogPreview && (
            <img
              src={blogPreview}
              alt="blog preview"
              className="mt-3 rounded-lg w-40 h-40 object-cover"
            />
          )}
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-medium text-white">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-600 bg-transparent text-white focus:ring-2 focus:ring-blue-500"
            required>
            <option value="" disabled>
              -- Select a Category --
            </option>
            <option value="Technology" className="text-black">
              Technology
            </option>
            <option value="Lifestyle" className="text-black">
              Lifestyle
            </option>
            <option value="Health" className="text-black">
              Health
            </option>
            <option value="Education" className="text-black">
              Education
            </option>
            <option value="Business" className="text-black">
              Business
            </option>
            <option value="Programming" className="text-black">
              Programming
            </option>
          </select>
        </div>

        {/* Author Image Upload */}
        <div>
          <label className="block mb-1 font-medium text-white">
            Author Image
          </label>
          <input
            type="file"
            accept="image/*"
            ref={authorFileRef} // 🔑 ref
            onChange={(e) => handleImageUpload(e, "authorImg")}
            className="w-full p-3 rounded-lg border border-gray-600 bg-transparent text-white"
            required
          />
          {authorPreview && (
            <img
              src={authorPreview}
              alt="author preview"
              className="mt-3 rounded-full w-20 h-20 object-cover"
            />
          )}
        </div>

        {/* Author */}
        <div>
          <label className="block mb-1 font-medium text-white">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full p-3 rounded-lg border border-gray-600 bg-transparent text-white focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition font-semibold">
          {loading ? "Submitting..." : "Add Blog"}
        </button>
      </form>

      {message && (
        <p
          className={`mt-5 text-center font-medium ${
            error ? "text-red-400" : "text-green-400"
          }`}>
          {message}
        </p>
      )}
    </div>
  );
}
