import React from "react";
import { useNavigate } from "react-router-dom";
import sideImage from "../assets/newlywed-couple-showing-affection-holding-hands-as-they-are-walking-through-zhangjiajie-national-forest-park.jpg";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex font-dot overflow-hidden">
      {/* Left Section - Signup Form */}
      <div className="w-1/2 flex items-center justify-center p-8 bg-[#F5F5F5] overflow-y-auto">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-6">
            <h1 className="text-2xl font-serif text-gray-800">Larksper.</h1>
          </div>

          {/* Welcome Text */}
          <h2 className="text-3xl font-serif text-gray-900 mb-2">
            Create Account
          </h2>
          <p className="text-gray-500 mb-6">
            Join us to discover amazing products and experiences
          </p>

          <form className="space-y-4">
            {/* Name Inputs */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
                  placeholder="Enter first name"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
                  placeholder="Enter last name"
                  required
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Phone Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
                placeholder="Enter phone number"
                required
              />
            </div>

            {/* Password Inputs */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
                  placeholder="Enter password"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
                  placeholder="Confirm password"
                  required
                />
              </div>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-2.5 rounded-lg hover:bg-gray-800 transition-all duration-200"
            >
              Create Account
            </button>

            {/* Google Sign Up */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-2.5 rounded-lg hover:bg-gray-50 transition-all duration-200"
            >
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Sign up with Google
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/Login")}
              className="font-medium text-gray-700 hover:text-gray-900"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="w-1/2 relative">
        <img
          src={sideImage}
          alt="Signup"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay with text */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-16">
          <div className="text-white">
            <h2 className="text-4xl font-serif mb-4">Larksper</h2>
            <p className="text-sm opacity-80">
              Join our community of fashion enthusiasts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
