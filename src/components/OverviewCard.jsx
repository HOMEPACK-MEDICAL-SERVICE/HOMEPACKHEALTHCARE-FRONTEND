import React from "react";
import { motion } from "framer-motion";

const OverviewCard = ({ icon, label, value, delay = 0 }) => {
  return (
    <motion.div
      // Initial fade-in animation from bottom
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white shadow-md rounded-2xl p-6 flex gap-6 items-center hover:shadow-lg transition duration-300"
    >
      {/* Icon container with background color and consistent branding */}
      <div className="p-5 rounded-full bg-[#DAA5201A] text-[#DAA520CC] text-2xl">
        {icon}
      </div>

      {/* Text content area */}
      <div>
        {/* Descriptive label for the metric */}
        <p className="text-sm text-gray-500">{label}</p>

        {/* Dynamic value from props (can be static or backend-driven) */}
        <h3 className="text-xl font-semibold text-[#DAA520CC]">{value}</h3>
      </div>
    </motion.div>
  );
};

export default OverviewCard;
