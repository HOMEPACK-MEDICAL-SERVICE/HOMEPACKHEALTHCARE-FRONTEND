import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaTrashAlt, FaPen, FaPhoneAlt } from "react-icons/fa";
import {
  apiCancelAppointment,
  apiGetAppointment,
} from "../../services/appointments";
import toast from "react-hot-toast";

const DocNumbers = [
  "0205662946",
  "0544678781",
  "0244867921",
  "0305442946",
  "0245435678",
  "0244988080",
  "0271234576",
  "02489812465",
  "02456787983",
  "02465789093",
];

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const response = await apiGetAppointment();
      setAppointments(response.data.data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async (id) => {
    setLoading(true);
    try {
      await apiCancelAppointment(id);
      toast.success("Appointment Cancelled");

      // Refresh the appointment list
      await fetchAppointments();
    } catch (error) {
      console.log(error);
      toast.error("Cancellation failed");
    } finally {
      setLoading(false);
    }
  };

  const handleReschedule = (id) => {
    console.log("Reschedule triggered for:", id);
    // Add navigation or modal logic here
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const getDoctorContact = () => {
    const randomIndex = Math.floor(Math.random() * DocNumbers.length);
    return DocNumbers[randomIndex];
  };

  const getWhatsAppLink = (phoneNumber) => {
    return `https://wa.me/${phoneNumber}`;
  };

  const renderAppointmentCard = (appointment, isCancelled = false) => {
    const contact = getDoctorContact();
    const isUpcoming =
      new Date(appointment.appointmentSlot?.date) >= new Date();

    return (
      <motion.div
        key={appointment._id}
        className="bg-white p-6 rounded-lg shadow-sm"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h4 className="text-lg font-semibold text-[#DAA520CC]">
              {appointment.doctor?.name}
            </h4>
            <p className="text-sm text-gray-600">
              {appointment.doctor?.specialty}
            </p>
            <p className="text-sm text-gray-500">
              {new Date(appointment.appointmentSlot?.date).toLocaleDateString()}{" "}
              at {appointment.appointmentSlot?.startTime} -{" "}
              {appointment.appointmentSlot?.endTime}
            </p>

            {!isCancelled && (
              <div className="mt-2 flex items-center gap-4">
                <a
                  href={`tel:${contact}`}
                  className="flex items-center text-blue-500 hover:text-blue-700"
                >
                  <FaPhoneAlt className="mr-2" />
                  Call
                </a>
                <a
                  href={getWhatsAppLink(contact)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-green-500 hover:text-green-700"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    className="w-5 h-5 mr-2"
                  />
                  WhatsApp
                </a>
              </div>
            )}
          </div>

          {!isCancelled && isUpcoming && (
            <div className="flex flex-col md:flex-row gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#F0F4F8] hover:bg-[#FFE8B6] transition duration-300"
                onClick={() => handleReschedule(appointment._id)}
              >
                <FaPen className="text-blue-600" />
                <span className="text-blue-600">Reschedule</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#F0F4F8] hover:bg-red-100 transition duration-300 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
                onClick={() => handleCancel(appointment._id)}
              >
                <FaTrashAlt className="text-red-600" />
                <span className="text-red-600">
                  {loading ? "Cancelling..." : "Cancel"}
                </span>
              </motion.button>
            </div>
          )}

          {isCancelled && (
            <div className="italic text-sm text-red-500 font-medium">
              Cancelled by user
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  const upcomingAppointments = appointments.filter(
    (a) =>
      new Date(a.appointmentSlot?.date) >= new Date() &&
      a.status !== "cancelled"
  );

  const pastAppointments = appointments.filter((a) => a.status === "past");
  const cancelledAppointments = appointments.filter(
    (a) => a.status === "cancelled"
  );

  return (
    <div className="p-6 space-y-10">
      {/* Page Header */}
      <div className="bg-[#FFF8E5] p-6 rounded-2xl shadow-sm text-center">
        <h2 className="text-3xl font-bold text-[#DAA520CC] mb-2">
          My Appointments
        </h2>
        <p className="text-gray-600 text-sm">
          View, reschedule, or cancel your upcoming appointments.
        </p>
      </div>

      {/* Loader */}
      {loading && (
        <div className="text-center text-gray-500">Loading appointments...</div>
      )}

      {/* Upcoming */}
      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Upcoming Appointments
        </h3>
        <div className="space-y-4">
          {upcomingAppointments.length > 0 ? (
            upcomingAppointments.map((appointment) =>
              renderAppointmentCard(appointment)
            )
          ) : (
            <p className="text-gray-500">No upcoming appointments.</p>
          )}
        </div>
      </section>

      {/* Past */}
      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Past Appointments
        </h3>
        <div className="space-y-4">
          {pastAppointments.length > 0 ? (
            pastAppointments.map((appointment) =>
              renderAppointmentCard(appointment)
            )
          ) : (
            <p className="text-gray-500">No past appointments yet.</p>
          )}
        </div>
      </section>

      {/* Cancelled */}
      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Cancelled Appointments
        </h3>
        <div className="space-y-4">
          {cancelledAppointments.length > 0 ? (
            cancelledAppointments.map((appointment) =>
              renderAppointmentCard(appointment, true)
            )
          ) : (
            <p className="text-gray-500">No cancelled appointments.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Appointments;
