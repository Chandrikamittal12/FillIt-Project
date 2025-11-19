import React from "react";

const Login = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-rose-200 via-purple-300 to-purple-400
       px-4"
    >
      {/* Card */}
      <div
        className="w-full max-w-md bg-linear-to-br from-orange-300  to-rose-300
        
        border border-purple-300/70
        p-8 rounded-2xl shadow-xxl"
      >
        {/* Heading */}
        <h2 className="text-4xl font-bold text-rose-900  text-center mb-6">
          Login
        </h2>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="text-purple-600 text-md font-bold">Email Id </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 rounded-lg
              bg-purple-50 text-gray-700 placeholder-gray-500
              border border-purple-200
              focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-purple-600 text-md font-bold">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 rounded-lg
              bg-purple-50 text-gray-700 placeholder-gray-500
              border border-purple-200
              focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Forgot link */}
          <div className="text-right">
            <a
              href="/forgot"
              className="text-purple-600 text-sm font-medium hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          {/* Button */}
          <button
            className="w-full py-2 bg-linear-to-r from-purple-500 to-blue-500
            text-white font-semibold rounded-lg shadow-md
            hover:opacity-90 transition"
          >
            Login
          </button>
        
        </form>

        {/* Signup */}
        <p className="text-center text-purple-700 mt-6 text-sm">
          Don’t have an account?{" "}
          <a href="/signup" className="font-medium underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
