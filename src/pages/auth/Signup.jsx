import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaEnvelope, FaLock, FaUser, FaPhone } from "react-icons/fa";
import { MdWc } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";

const Signup = () => {
  // State variables to store input values and password visibility status
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Toggle password visibility
  const handlePasswordToggle = () => setShowPassword(!showPassword);

  // Toggle confirm password visibility
  const handleConfirmPasswordToggle = () =>
    setShowConfirmPassword(!showConfirmPassword);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate that the passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // handle form submission (e.g., send data to backend)
  };

  return (
    <div className="w-full h-[900px] flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#CE9315]">
          Create Account
        </h2>

        {/* Form */}
        <form className="space-y-4 text-gray-700" onSubmit={handleSubmit}>
          {/* Full Name Input */}
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full pl-10 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#CE9315] shadow-sm"
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#CE9315] shadow-sm"
            />
          </div>

          {/* Phone Number Input */}
          <div className="relative">
            <FaPhone className="absolute left-3 top-3 text-gray-400" />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full pl-10 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#CE9315] shadow-sm"
            />
          </div>

          {/* Gender Select */}
          <div className="relative">
            <MdWc className="absolute left-3 top-3 text-gray-400" />
            <select
              className="w-full pl-10 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#CE9315] shadow-sm text-gray-500"
              defaultValue=""
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="nonbinary">Non-binary</option>
              <option value="other">Other</option>
              <option value="prefer_not_say">Prefer not to say</option>
            </select>
          </div>

          {/* Password Input */}
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"} // Toggle between text and password type
              placeholder="Password"
              className="w-full pl-10 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#CE9315] shadow-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Set password value on change
            />
            {/* Password Visibility Toggle */}
            <button
              type="button"
              onClick={handlePasswordToggle} // Toggle password visibility on click
              className="absolute right-3 top-3 text-gray-400"
            >
              {showPassword ? <HiEyeOff /> : <HiEye />}
            </button>
          </div>

          {/* Confirm Password Input */}
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type={showConfirmPassword ? "text" : "password"} // Toggle between text and password type
              placeholder="Confirm Password"
              className="w-full pl-10 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#CE9315] shadow-sm"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} // Set confirm password value on change
            />
            {/* Confirm Password Visibility Toggle */}
            <button
              type="button"
              onClick={handleConfirmPasswordToggle} // Toggle confirm password visibility on click
              className="absolute right-3 top-3 text-gray-400"
            >
              {showConfirmPassword ? <HiEyeOff /> : <HiEye />}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#CE9315] text-white py-2 rounded-lg hover:bg-[#b47611] transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Alternative Login Option (Google Sign Up) */}
        <div className="my-4 text-center text-gray-500">or continue with</div>
        <button className="w-full border flex items-center justify-center gap-3 py-2 rounded-lg hover:bg-gray-100 transition">
          <FaGoogle className="text-red-500" />
          <span>Sign up with Google</span>
        </button>

        {/* Link to Login Page if User Already Has an Account */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#CE9315] font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
