import { NavLink } from "react-router-dom";
import {
  FaUser,
  FaStethoscope,
  FaCalendarAlt,
  FaHome,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";
import { apiGetProfile } from "../services/getProfile";

const navItems = [
  { label: "Overview", path: "/dashboard", icon: <FaHome />, exact: true },
  { label: "Profile", path: "/dashboard/profile", icon: <FaUser /> },
  { label: "Doctors", path: "/dashboard/doctors", icon: <FaStethoscope /> },
  {
    label: "Appointments",
    path: "/dashboard/appointments",
    icon: <FaCalendarAlt />,
  },
];

const SideBar = ({ onClose }) => {
  return (
    <div className="h-full flex flex-col p-4 bg-white">
      {/* Close button for mobile */}
      <div className="md:hidden flex justify-end mb-4">
        <button onClick={onClose}>
          <FaTimes className="text-[#DAA520CC] text-xl" />
        </button>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.exact} // Only apply "end" to Overview
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition ${
                isActive
                  ? "bg-[#DAA5201A] text-[#DAA520CC] font-semibold"
                  : "text-gray-700 hover:bg-[#DAA5200F]"
              }`
            }
            onClick={onClose}
          >
            <span className="text-lg">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Exit/Logout */}
      <div className="mt-auto">
        <NavLink
          to="/"
          className="flex items-center gap-3 px-4 py-2 rounded-md text-red-600 hover:bg-red-50"
          onClick={onClose}
        >
          <FaSignOutAlt />
          Exit
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
