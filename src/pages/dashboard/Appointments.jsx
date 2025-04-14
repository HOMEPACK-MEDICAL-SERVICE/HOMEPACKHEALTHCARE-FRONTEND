import React from "react";
import { motion } from "framer-motion";
import { FaTrashAlt, FaPen } from "react-icons/fa";

const Appointments = () => {
  // Sample appointment data — replace with real backend data later
  const appointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Mensah",
      specialty: "Cardiologist",
      date: "2024-05-01",
      time: "10:00 AM",
      status: "upcoming",
    },
    {
      id: 2,
      doctor: "Dr. Kwame Asante",
      specialty: "Dermatologist",
      date: "2024-04-10",
      time: "2:00 PM",
      status: "past",
    },
  ];

  // Placeholder functions for button actions
  const handleReschedule = (id) => {
    console.log("Rescheduling appointment", id);
  };

  const handleCancel = (id) => {
    console.log("Cancelling appointment", id);
  };

  return (
    <div className="p-6 space-y-8">
      {/* Heading */}
      <div className="bg-[#FFF8E5] p-6 rounded-2xl shadow-sm text-center">
        <h2 className="text-3xl font-bold text-[#DAA520CC] mb-2">
          My Appointments
        </h2>
        <p className="text-gray-600 text-sm">
          View, reschedule, or cancel your upcoming appointments.
        </p>
      </div>

      {/* Upcoming Appointments */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Upcoming Appointments
        </h3>
        <div className="space-y-4">
          {appointments
            .filter((a) => a.status === "upcoming")
            .map((appointment) => (
              <motion.div
                key={appointment.id}
                className="bg-white p-6 rounded-lg shadow-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  {/* Appointment Info */}
                  <div>
                    <h4 className="text-lg font-semibold text-[#DAA520CC]">
                      {appointment.doctor}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {appointment.specialty}
                    </p>
                    <p className="text-sm text-gray-500">
                      {appointment.date} at {appointment.time}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col md:flex-row gap-2">
                    {/* Reschedule */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#F0F4F8] hover:bg-[#FFE8B6] transition duration-300"
                      onClick={() => handleReschedule(appointment.id)}
                    >
                      <FaPen className="text-blue-600" />
                      <span className="text-blue-600">Reschedule</span>
                    </motion.button>

                    {/* Cancel */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#F0F4F8] hover:bg-red-100 transition duration-300"
                      onClick={() => handleCancel(appointment.id)}
                    >
                      <FaTrashAlt className="text-red-600" />
                      <span className="text-red-600">Cancel</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      {/* Past Appointments */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Past Appointments
        </h3>
        <div className="space-y-4">
          {appointments
            .filter((a) => a.status === "past")
            .map((appointment) => (
              <motion.div
                key={appointment.id}
                className="bg-white p-6 rounded-lg shadow-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  {/* Appointment Info */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {appointment.doctor}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {appointment.specialty}
                    </p>
                    <p className="text-sm text-gray-500">
                      {appointment.date} at {appointment.time}
                    </p>
                  </div>

                  {/* No action buttons for past appointments */}
                  <div className="text-sm text-gray-400 italic">
                    Appointment completed
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Appointments;
