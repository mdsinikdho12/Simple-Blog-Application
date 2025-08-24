"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { signIn } from "next-auth/react";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setLoading(false);
        setErrorMessage(result.error);
      } else {
        router.push("/");
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage("An error occurred");
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#273547] via-[#202C3B] to-[#33405A] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-12 px-4">
      <Image src="/banner.png" alt="Description" width={500} height={300} />
      <div className="max-w-md w-full mx-auto mt-16 flex flex-col gap-6 px-6 py-8 items-center h-auto border border-blue-200 rounded-lg">
        <Image
          src="/avater.png"
          alt="Profile"
          width={100}
          height={100}
          className="rounded-full border-2 border-blue-500"
        />
        <h1 className="text-3xl font-bold mb-1">Welcome back</h1>
        <p className="text-sm text-gray-600 text-center">
          Enter your credentials to sign in
        </p>
        <form className="w-full flex flex-col gap-4" onSubmit={submitHandler}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-white-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoComplete="email"
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
              autoComplete="current-password"
              required
              onChange={(e) => setPassword(e.target.value)}
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
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-lg p-2 w-full hover:bg-blue-700 transition duration-200 font-semibold">
            {isLoading ? "Sending request..." : "Login"}
          </button>
          {errorMessage && <h3 style={{ color: "red" }}>{errorMessage}</h3>}
        </form>
        <div className="w-full flex items-center gap-2 mt-4">
          <hr className="flex-1 border-gray-300" />
          <span className="text-gray-400 text-xs">or</span>
          <hr className="flex-1 border-gray-300" />
        </div>
        <Link
          href="/singin"
          className="text-sm text-blue-600 hover:underline mt-2">
          Don't have an account? Sign up
        </Link>
      </div>
    </div>
  );
};

export default Page;
