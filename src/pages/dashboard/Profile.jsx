import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUserAlt,
  FaPhoneAlt,
  FaCalendarAlt,
  FaGenderless,
  FaSave,
  FaTimes,
  FaFilePdf,
} from "react-icons/fa";

const Profile = () => {
  // Define state to hold user data, you can replace these with data fetched from the backend later
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    age: 30,
    gender: "Male",
    contact: "123-456-7890",
    medicalHistory: "No serious medical history.",
    medicalFile: null, // State for uploaded medical file
  });

  // Handle changes to user info
  const handleInputChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle file upload change (for medical history file)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setProfileData({
        ...profileData,
        medicalFile: file,
      });
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  // Handle save button click
  const handleSave = () => {
    // Handle save logic, e.g., send data to backend
    alert("Profile updated successfully!");
  };

  // Handle cancel button click
  const handleCancel = () => {
    setProfileData({
      name: "",
      age: "",
      gender: "",
      contact: "",
      medicalHistory: "",
      medicalFile: null, // Clear file if canceled
    });
    alert("Changes have been canceled.");
  };

  return (
    <div className="p-6 space-y-6">
      {/* Profile Header */}
      <div className="bg-[#FFF8E5] p-6 rounded-2xl shadow-sm space-y-4">
        <h2 className="text-3xl font-bold text-[#DAA520CC]">Patient Profile</h2>
        <p className="text-md text-gray-700">
          Manage your personal details and medical history
        </p>
      </div>

      {/* Profile Information Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          {/* Name */}
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            value={profileData.name}
            onChange={handleInputChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
            placeholder="Enter your name"
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          {/* Age */}
          <label className="block text-gray-700">Age</label>
          <input
            type="number"
            name="age"
            value={profileData.age}
            onChange={handleInputChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
            placeholder="Enter your age"
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          {/* Gender */}
          <label className="block text-gray-700">Gender</label>
          <select
            name="gender"
            value={profileData.gender}
            onChange={handleInputChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          {/* Contact Information */}
          <label className="block text-gray-700">Contact Information</label>
          <input
            type="text"
            name="contact"
            value={profileData.contact}
            onChange={handleInputChange}
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
            placeholder="Enter your contact number"
          />
        </div>
      </div>

      {/* Medical History */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <label className="block text-gray-700">Medical History</label>
        <textarea
          name="medicalHistory"
          value={profileData.medicalHistory}
          onChange={handleInputChange}
          className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
          rows="4"
          placeholder="Share your medical history"
        ></textarea>
      </div>

      {/* File Upload for PDF */}
      <div className="bg-white p-6 rounded-lg shadow-sm mt-4">
        <label className="block text-gray-700">
          Upload Medical History (PDF)
        </label>
        <div className="flex items-center gap-2 border-2 border-gray-300 rounded-lg p-3 cursor-pointer hover:bg-gray-100 transition">
          <FaFilePdf className="text-red-500" />
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="w-full opacity-0 cursor-pointer"
          />
          {profileData.medicalFile && (
            <span className="text-sm text-gray-600">
              {profileData.medicalFile.name}
            </span>
          )}
        </div>
      </div>

      {/* Save and Cancel Buttons with Icons */}
      <div className="flex justify-between mt-6">
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
          onClick={handleCancel}
          className="flex items-center gap-2 text-red-500 hover:bg-red-100 px-4 py-2 rounded-md"
        >
          <FaTimes />
          Cancel
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
          onClick={handleSave}
          className="flex items-center gap-2 text-green-500 hover:bg-green-100 px-4 py-2 rounded-md"
        >
          <FaSave />
          Save Changes
        </motion.button>
      </div>
    </div>
  );
};

export default Profile;
