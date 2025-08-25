"use client";

import { useState } from "react";

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

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError(false);

    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
      } else {
        setMessage("❌ Failed to add blog!");
        setError(true);
      }
    } catch (error) {
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

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block mb-1 font-medium text-white">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter blog title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-600 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Content */}
        <div>
          <label className="block mb-1 font-medium text-white">Content</label>
          <textarea
            name="content"
            placeholder="Write your blog content..."
            value={formData.content}
            onChange={handleChange}
            rows="5"
            className="w-full p-3 rounded-lg border border-gray-600 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block mb-1 font-medium text-white">Image URL</label>
          <input
            type="text"
            name="image"
            placeholder="https://example.com/image.jpg"
            value={formData.image}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-600 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-medium text-white">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-600 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          </select>
        </div>

        {/* Author Image */}
        <div>
          <label className="block mb-1 font-medium text-white">
            Author Image URL
          </label>
          <input
            type="text"
            name="authorImg"
            placeholder="https://example.com/author.jpg"
            value={formData.authorImg}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-600 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Author */}
        <div>
          <label className="block mb-1 font-medium text-white">Author</label>
          <input
            type="text"
            name="author"
            placeholder="Author name"
            value={formData.author}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-600 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition font-semibold">
          {loading ? "Submitting..." : "Add Blog"}
        </button>
      </form>

      {/* Message */}
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
