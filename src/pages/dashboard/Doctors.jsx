import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { apiGetDoctors } from "../../services/getAllDoctors";
import { apiBookAppointment } from "../../services/appointments";
import D1 from "../../assets/D1.jpg";
import D2 from "../../assets/D2.jpg";
import D3 from "../../assets/D3.jpg";
import D4 from "../../assets/D4.jpg";
import D5 from "../../assets/D5.jpg";
import D6 from "../../assets/D6.jpg";
import D7 from "../../assets/D7.jpg";
import D8 from "../../assets/D8.jpg";
import D9 from "../../assets/D9.jpg";
import D10 from "../../assets/D10.jpg";
import toast from "react-hot-toast";

// Format ISO date string to readable format
const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  return date.toLocaleDateString(undefined, {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

// doctors pics
const docPics = [D2, D1, D3, D5, D4, D6, D7, D8, D9, D10];

const Doctors = () => {
  const [allDoc, setAllDocs] = useState([]);
  const [filteredDocs, setFilteredDocs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getDoctors = async () => {
    try {
      setIsLoading(true);
      const response = await apiGetDoctors();
      const fetchedDoctors = response.data.data;
      setAllDocs(fetchedDoctors);
      setFilteredDocs(fetchedDoctors);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDoctors();
  }, []);

  useEffect(() => {
    const term = searchTerm.toLowerCase();
    const filtered = allDoc.filter(
      (doc) =>
        doc.name?.toLowerCase().includes(term) ||
        doc.specialty?.toLowerCase().includes(term) ||
        doc.location?.toLowerCase().includes(term)
    );
    setFilteredDocs(filtered);
  }, [searchTerm, allDoc]);

  const handleBookAppointment = async (doctorId, slot) => {
    setIsLoading(true);
    try {
      const payload = {
        doctorId,
        appointmentSlot: {
          date: slot.date,
          startTime: slot.startTime,
          endTime: slot.endTime,
        },
      };
      await apiBookAppointment(payload);
      toast.success(`Appointment Booked`);
    } catch (error) {
      console.log("Booking error:", error.response?.data || error.message);
      toast.error(`Failed to book Appointment`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Heading Section */}
      <div className="bg-[#FFF8E5] p-6 rounded-2xl shadow-sm mb-6">
        <h2 className="text-3xl font-bold text-[#DAA520CC]">Find a Doctor</h2>
        <p className="text-md text-gray-700">
          Search for doctors by specialty, location, or availability
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
        <FaSearch className="text-gray-500 mr-3" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Search doctors by name, specialty, or location"
        />
      </div>

      {/* Loading State */}
      {isLoading ? (
        <div className="text-center text-gray-600 mt-8">Loading doctors...</div>
      ) : (
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-[#DAA520CC] mb-4">
            {filteredDocs.length > 0
              ? "Available Doctors"
              : "No doctors match your search."}
          </h3>

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocs.map((doctor, index) => (
              <motion.div
                key={doctor._id}
                className="bg-white p-6 rounded-lg shadow-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Doctor Info */}
                <img
                  src={docPics[index % docPics.length]}
                  alt={doctor.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-lg font-semibold text-[#DAA520CC] text-center">
                  {doctor.name}
                </h4>
                <p className="text-sm text-gray-600 text-center">
                  {doctor.specialty}
                </p>
                <p className="text-sm text-gray-600 text-center">
                  {doctor.experience} years of practicing
                </p>

                {/* Available Slots */}
                <div className="mt-4">
                  <h5 className="text-sm font-semibold text-gray-700 mb-1">
                    Available Slots:
                  </h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {Array.isArray(doctor.availableSlots) &&
                    doctor.availableSlots.length > 0 ? (
                      doctor.availableSlots.map((slot, idx) => (
                        <li key={slot._id || idx}>
                          📅 {formatDate(slot.date)} | 🕒 {slot.startTime} -{" "}
                          {slot.endTime}
                        </li>
                      ))
                    ) : (
                      <li>No available slots</li>
                    )}
                  </ul>
                </div>

                {/* Book Button */}
                {Array.isArray(doctor.availableSlots) &&
                  doctor.availableSlots.length > 0 && (
                    <motion.button
                      className={`mt-4 w-full bg-[#DAA520CC] text-white font-semibold py-3 rounded-lg shadow-md hover:bg-[#c2981a] transition ${
                        isLoading ? "opacity-75 cursor-not-allowed" : ""
                      } `}
                      type="button"
                      disabled={isLoading}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() =>
                        handleBookAppointment(
                          doctor._id,
                          doctor.availableSlots[0]
                        )
                      }
                    >
                      {isLoading ? "Booking..." : "Book Appointment"}
                    </motion.button>
                  )}
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Doctors;
