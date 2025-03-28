import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../api";
import { useAuth } from "../context/AuthContext";
import sideImage from "../assets/newlywed-couple-showing-affection-holding-hands-as-they-are-walking-through-zhangjiajie-national-forest-park.jpg";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login: authLogin } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData);
      if (response.user) {
        authLogin(response.user);
        navigate("/");
      }
    } catch (err) {
      setError(err.response?.data?.error || "Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex font-dot">
      {/* Left Section - Login Form */}
      <div className="w-1/2 flex items-center justify-center p-16 bg-[#F5F5F5]">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-2xl font-serif text-gray-800">Larksper.</h1>
          </div>

          {/* Welcome Text */}
          <h2 className="text-3xl font-serif text-gray-900 mb-2">
            Welcome back?
          </h2>
          <p className="text-gray-500 mb-8">
            The faster you fill up, the faster you get a ticket
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm text-gray-600"
                >
                  Remember me
                </label>
              </div>
              <button
                type="button"
                className="text-sm text-gray-600 hover:text-gray-800"
              >
                Forgot Password
              </button>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-all duration-200"
            >
              Sign In
            </button>

            {/* Google Sign In */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
            >
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Sign In with Google
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="mt-8 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/Signup"
              className="font-medium text-gray-700 hover:text-gray-900"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="w-1/2 relative">
        <img
          src={sideImage}
          alt="Login"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay with text */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-16">
          <div className="text-white">
            <h2 className="text-4xl font-serif mb-4">Larksper</h2>
            <p className="text-sm opacity-80">
              Explore our collection of premium fashion and accessories
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
