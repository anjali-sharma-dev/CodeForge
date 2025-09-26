import React from "react";
import { Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-[#00b8a3] rounded-full flex items-center justify-center">
            <Lock className="h-6 w-6 text-white" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-800">Welcome back</h2>
          <p className="mt-2 text-sm text-gray-600">Sign in to your account to continue</p>
        </div>

        <div className="bg-[#f9f9f9] py-8 px-6 shadow rounded-lg border border-gray-200">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-2">Email address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-400 text-gray-800 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b8a3] focus:border-transparent sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-800 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-400 text-gray-800 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b8a3] focus:border-transparent sm:text-sm"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 text-sm font-medium rounded-md text-white bg-[#00b8a3] hover:bg-[#00a693] transition"
            >
              Sign in
            </button>
          </form>

          <p className="text-sm text-gray-600 text-center mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="font-medium text-[#00b8a3] hover:underline">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;