"use client";
import { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // "success" | "error" | ""
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/Subscriptions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("✅ Subscription successful!");
        setEmail(""); // clear input
      } else {
        setStatus("❌ Failed to subscribe. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("⚠️ Something went wrong. Try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center mx-auto mt-6 w-full max-w-md">
      <div className="flex items-center bg-[#2f3640] rounded-lg overflow-hidden w-full shadow-lg">
        <span className="px-3">
          <img src="/email.png" alt="email icon" className="h-6 w-8" />
        </span>

        <input
          type="email"
          placeholder="Enter your email"
          aria-label="Email address"
          className="w-full px-2 py-3 text-gray-200 bg-[#2f3640] focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />

        <button
          onClick={handleSubscribe}
          type="button"
          disabled={loading}
          className={`px-5 py-3 transition ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          } text-white`}>
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </div>

      {status && (
        <p
          className={`mt-2 text-sm ${
            status.includes("✅") ? "text-green-400" : "text-red-400"
          }`}>
          {status}
        </p>
      )}
    </div>
  );
};

export default Subscribe;
