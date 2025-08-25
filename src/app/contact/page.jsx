"use client";
import React, { useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("/api/contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess("✅ Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError("❌ Failed to send message. Please try again.");
      }
    } catch (err) {
      setError("❌ Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#212636] flex items-center justify-center px-4 sm:px-8">
      <div className="max-w-3xl w-full bg-[#0f3253] shadow-xl rounded-2xl p-8 sm:p-12">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-white text-center mb-4">
          📩 Contact Us
        </h1>
        <p className="text-center text-gray-300 mb-8">
          Have any questions or suggestions? Feel free to reach out to us using
          the form below.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-600 bg-[#1b3a58] text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-600 bg-[#1b3a58] text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-600 bg-[#1b3a58] text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300 shadow-md disabled:opacity-50">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Message */}
        {success && (
          <p className="text-green-400 text-center mt-4 font-medium">
            {success}
          </p>
        )}
        {error && (
          <p className="text-red-400 text-center mt-4 font-medium">{error}</p>
        )}
      </div>
    </div>
  );
};

export default Page;
