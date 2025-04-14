import React, { useState } from "react";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      {/* Top Navbar */}
      <div className="flex items-center justify-between bg-white shadow px-4 py-3">
        <div className="flex items-center gap-2">
          <FaBars
            onClick={() => setSidebarOpen(true)}
            className="text-2xl md:hidden text-[#DAA520CC] cursor-pointer"
          />
          <h1 className="text-xl font-bold text-[#DAA520CC]">MediTrack</h1>
        </div>
        <div className="flex items-center gap-3">
          <img
            src="/profile.jpg" // Replace with actual profile image path
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">John Doe</p>
            <p className="text-sm text-gray-500">Patient</p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar (Responsive) */}
        <div
          className={`bg-white z-50 md:relative fixed top-0 left-0 h-full w-64 shadow transition-transform transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <SideBar onClose={() => setSidebarOpen(false)} />
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
