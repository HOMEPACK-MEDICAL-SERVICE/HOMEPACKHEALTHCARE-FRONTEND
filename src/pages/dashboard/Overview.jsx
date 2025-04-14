import React from "react";
import {
  FaStethoscope,
  FaCalendarAlt,
  FaNotesMedical,
  FaPhone,
} from "react-icons/fa";
import OverviewCard from "../../components/OverviewCard";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Overview = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6">
      {/* Greeting Section with Call-to-Action */}
      <div className="bg-[#FFF8E5] border border-[#DAA52033] p-6 rounded-2xl shadow-sm space-y-4">
        <div>
          {/* Replace 'John Doe' with backend patient name */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#DAA520CC] mb-1">
            Welcome, John Doe 👋
          </h2>
          <p className="text-md md:text-lg text-gray-700">
            Here’s a summary of your health dashboard.
          </p>
        </div>

        {/* Booking Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* ➤ Navigate to telemedicine booking page */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            onClick={() => navigate("/dashboard/book-telemedicine")}
            className="bg-[#DAA520CC] text-white font-medium px-5 py-2 rounded-lg shadow-sm hover:bg-[#c2981a] transition"
          >
            Book Telemedicine
          </motion.button>

          {/* ➤ Navigate to home visit booking page */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            onClick={() => navigate("/dashboard/book-home-visit")}
            className="bg-[#DAA520CC] text-white font-medium px-5 py-2 rounded-lg shadow-sm hover:bg-[#c2981a] transition"
          >
            Book Home Visit
          </motion.button>
        </div>
      </div>

      {/* Overview Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <OverviewCard
          icon={<FaStethoscope />}
          label="Doctors Available"
          value="10"
          delay={0.1}
        />
        <OverviewCard
          icon={<FaCalendarAlt />}
          label="Upcoming Appointments"
          value="2"
          delay={0.2}
        />
        <OverviewCard
          icon={<FaNotesMedical />}
          label="Medical History"
          value="5 Records"
          delay={0.3}
        />
        <OverviewCard
          icon={<FaPhone />}
          label="Contact Info"
          value="Up to date"
          delay={0.4}
        />
      </div>
    </div>
  );
};

export default Overview;
