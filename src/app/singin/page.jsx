"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        setIsLoading(false);
        setErrorMessage(data?.error);
      } else {
        router.push("/login");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-dvh w-full bg-gradient-to-r from-[#273547] via-[#202C3B] to-[rgb(51,64,90)] grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-12 px-4">
      <div className="max-w-md w-full mx-auto mt-16 flex flex-col gap-6 px-6 py-8 items-center h-[550px] border border-gray-200 rounded-lg">
        <h1 className="text-3xl font-bold mb-1">Create account</h1>
        <p className="text-sm text-gray-600 text-center">
          Let's start with your basic information
        </p>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="block text-sm text-white-700 mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              placeholder="Enter your name"
              className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setName(e.target.value)}
            />
            <label
              htmlFor="email"
              className="block text-sm text-white-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm text-white-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-white-700">
              <input type="checkbox" className="accent-blue-600" />
              Remember me
            </label>
            <Link
              className="text-sm text-white-700 hover:text-blue-500 hover:underline"
              href="/forgot-password">
              Forgot password?
            </Link>
          </div>
          <div className="bg-blue-600 text-center text-white rounded-lg p-2 w-full hover:bg-blue-700 transition duration-200 font-semibold">
            {!isLoading && (
              <button type="submit" className="text-center">
                Sign Up
              </button>
            )}
            {isLoading && (
              <p className="text-center text-white font-bold">
                Creating New user...
              </p>
            )}
          </div>
          {errorMessage && <p className="text-red-800">{errorMessage}</p>}
        </form>
        <div className="w-full flex items-center gap-2 mt-2">
          <hr className="flex-1 border-gray-300" />
          <span className="text-gray-400 text-xs">or</span>
          <hr className="flex-1 border-gray-300" />
        </div>
        <Link
          href="/login"
          className="text-sm text-blue-600 hover:underline mt-1">
          You already have an account? Sign in
        </Link>
      </div>
      <Image
        src="/woman-laptop-standing-dark.png"
        alt="Description"
        width={500}
        height={300}
      />
    </div>
  );
};

export default Page;
