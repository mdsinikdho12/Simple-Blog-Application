"use client";
import React, { useEffect, useState } from "react";

const MessagesPage = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/contactus");
      const data = await res.json();
      setMessages(data);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-8 lg:px-20">
      <h1 className="text-4xl font-extrabold text-white text-center mb-4">
        📩 Messages
      </h1>
      <p className="text-center text-gray-300 mb-12">
        Here you can manage all your messages.
      </p>

      <div className="max-w-5xl mx-auto">
        {messages.length === 0 ? (
          <p className="text-center text-gray-400">No messages found.</p>
        ) : (
          <div className="grid gap-6">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="bg-[#0e1b27] rounded-xl shadow-md p-6 text-white hover:shadow-lg transition duration-300">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h2 className="text-xl font-semibold">{msg.name}</h2>
                  <span className="text-sm text-gray-400">
                    {new Date(msg.createdAt).toLocaleString()}
                  </span>
                </div>

                {/* Email */}
                <p className="text-sm text-blue-300 mb-3">{msg.email}</p>

                {/* Message */}
                <p className="text-gray-200 leading-relaxed">{msg.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagesPage;
