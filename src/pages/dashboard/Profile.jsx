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
  FaUpload,
} from "react-icons/fa";
import { apiFileUpload } from "../../services/uploadDocouments";
import toast from "react-hot-toast";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: "charles mintah",
    age: "34",
    gender: "male",
    contact: "0205662946",
    medicalHistory: "stomach ulcer",
  });
  const [medicalFile, setMedicalFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setMedicalFile(file);
    } else {
      setMedicalFile(null);
      toast.error("Please upload a valid PDF file.");
    }
  };

  const handleSave = () => {
    // Typically, you'd send `profileData` to the backend
    toast.success("Profile updated successfully!");
  };

  const handleCancel = () => {
    setProfileData({
      name: "",
      age: "",
      gender: "",
      contact: "",
      medicalHistory: "",
    });
    toast("Changes have been canceled.");
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();

    if (!medicalFile) {
      toast.error("Please select a PDF file before uploading.");
      return;
    }

    const formData = new FormData();
    formData.append("file", medicalFile);

    setLoading(true);
    try {
      await apiFileUpload(formData);
      toast.success("File uploaded successfully!");
      setMedicalFile(null);
    } catch (error) {
      console.error(error);
      toast.error("Failed to upload file");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="bg-[#FFF8E5] p-6 rounded-2xl shadow-sm space-y-4">
        <h2 className="text-3xl font-bold text-[#DAA520CC]">Patient Profile</h2>
        <p className="text-md text-gray-700">
          Manage your personal details and medical history
        </p>
      </div>

      {/* Main Profile Form */}
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
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

          {/* Age */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
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

          {/* Gender */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <label className="block text-gray-700">Gender</label>
            <select
              name="gender"
              value={profileData.gender}
              onChange={handleInputChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Contact */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
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

        {/* Save/Cancel Buttons */}
        <div className="flex justify-between mt-6">
          <motion.button
            type="button"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            onClick={handleCancel}
            className="flex items-center gap-2 text-red-500 hover:bg-red-100 px-4 py-2 rounded-md"
          >
            <FaTimes />
            Cancel
          </motion.button>
          <motion.button
            type="button"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            onClick={handleSave}
            className="flex items-center gap-2 text-green-500 hover:bg-green-100 px-4 py-2 rounded-md"
          >
            <FaSave />
            Save Changes
          </motion.button>
        </div>
      </form>

      {/* PDF File Upload Form */}
      <form
        onSubmit={handleFileUpload}
        className="bg-white p-6 rounded-lg shadow-sm mt-6"
      >
        <label className="block text-gray-700 mb-2">
          Upload Medical History (PDF)
        </label>
        <div className="flex items-center gap-3 mb-4">
          <FaFilePdf className="text-red-500 text-xl" />
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="block w-full"
          />
        </div>
        {medicalFile && (
          <div className="mb-4 text-sm text-gray-600">
            Selected file: {medicalFile.name}
          </div>
        )}
        <motion.button
          type="submit"
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
          className={`flex items-center gap-2 text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-md ${
            loading ? "opacity-60 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          <FaUpload />
          {loading ? "Uploading..." : "Upload File"}
        </motion.button>
      </form>
    </div>
  );
};

export default Profile;
