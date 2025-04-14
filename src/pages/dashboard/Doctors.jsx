import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaStethoscope, FaCalendarAlt } from "react-icons/fa";

const doctorsData = [
  {
    id: 1,
    name: "Dr. John Doe",
    specialty: "Cardiologist",
    location: "New York",
    availableSlots: ["9:00 AM", "11:00 AM", "1:00 PM"],
    profileImage: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    specialty: "Dermatologist",
    location: "Los Angeles",
    availableSlots: ["10:00 AM", "12:00 PM", "2:00 PM"],
    profileImage: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Dr. Alice Brown",
    specialty: "Pediatrician",
    location: "Chicago",
    availableSlots: ["8:00 AM", "10:00 AM", "4:00 PM"],
    profileImage: "https://via.placeholder.com/150",
  },
  // More doctors here
];

const Doctors = () => {
  // State to hold search query and filtered doctors
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState(doctorsData);

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter doctors based on search query (by name, specialty, or location)
    const filtered = doctorsData.filter((doctor) => {
      return (
        doctor.name.toLowerCase().includes(query.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(query.toLowerCase()) ||
        doctor.location.toLowerCase().includes(query.toLowerCase())
      );
    });

    setFilteredDoctors(filtered);
  };

  // Handle booking an appointment (you can later integrate this with backend logic)
  const handleBookAppointment = (doctorId) => {
    alert(`Booking appointment with doctor ID: ${doctorId}`);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Heading for the section */}
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
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Search doctors by name, specialty, or location"
        />
      </div>

      {/* Doctors List */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-[#DAA520CC] mb-4">
          Available Doctors
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => (
            <motion.div
              key={doctor.id}
              className="bg-white p-6 rounded-lg shadow-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Doctor Profile */}
              <img
                src={doctor.profileImage}
                alt={doctor.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h4 className="text-lg font-semibold text-[#DAA520CC] text-center">
                {doctor.name}
              </h4>
              <p className="text-sm text-gray-600 text-center">
                {doctor.specialty}
              </p>
              <p className="text-sm text-gray-500 text-center">
                {doctor.location}
              </p>

              {/* Available Slots */}
              <div className="mt-4">
                <h5 className="text-sm font-semibold text-gray-700">
                  Available Slots:
                </h5>
                <ul className="text-sm text-gray-600">
                  {doctor.availableSlots.map((slot, index) => (
                    <li key={index}>{slot}</li>
                  ))}
                </ul>
              </div>

              {/* Book Appointment Button */}
              <motion.button
                className="mt-4 w-full bg-[#DAA520CC] text-white font-semibold py-3 rounded-lg shadow-md hover:bg-[#c2981a] transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleBookAppointment(doctor.id)}
              >
                Book Appointment
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
