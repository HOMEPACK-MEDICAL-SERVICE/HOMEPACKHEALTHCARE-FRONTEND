import React from "react";
import nurse from "../../assets/nurse1.jpg";
import aboutImage from "../../assets/aboutImage.png";
import serviceImage1 from "../../assets/servicesImage1.png";
import serviceImage2 from "../../assets/servicesImage2.png";
import serviceImage3 from "../../assets/servicesImage3.png";
import customer1 from "../../assets/test1.jpg"
import customer2 from "../../assets/test2m.jpg"
import customer3 from "../../assets/test3.jpg"
import { FaStar, FaRegStar } from "react-icons/fa";
import { FiCheckCircle, FiCalendar, FiClipboard } from "react-icons/fi";


import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ContactUs from "./ContactUs";

const Landing = () => {
  return (
    <div className="w-full min-h-screen font-[Inria Sans] bg-white">
      {/* home section */}
      <section id="home" className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-8 py-10">
        {/* Text Section */}
        <motion.div
          initial={{ x: -100, opacity: 0, scale: 0.9 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 mb-10 md:mb-0 flex flex-col justify-center space-y-4 text-center md:text-left"
        >
          <p className="text-black text-3xl sm:text-3xl mt-3  sm:mt-3 md:text-5xl font-bold leading-snug">
            Quality Healthcare <br className="hidden sm:block" /> delivered to
            Your <br className="hidden sm:block" /> Door Step
          </p>
          <p className="text-sm sm:text-base text-gray-600">
            Personalized homecare service, virtual consultations, and first aid
            training – all accessible from the comfort of your home.
          </p>

          {/* Button Row */}
          <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start gap-3 mt-4">
            <Link to="/book">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#CE9315] text-white font-bold px-6 py-2 rounded-lg w-full sm:w-auto cursor-pointer hover:bg-[#946704]"
              >
                Book Appointment
              </motion.button>
            </Link>
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#CE9315] text-white font-bold px-6 py-2 rounded-lg w-full sm:w-auto cursor-pointer hover:bg-[#946704]"
              >
                Explore Services
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ x: 100, opacity: 0, scale: 0.9 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="w-full md:w-1/2 h-64 sm:h-80 md:h-[400px] bg-contain bg-center bg-no-repeat rounded-md mt-5"
          style={{ backgroundImage: `url(${nurse})` }}
        ></motion.div>
      </section>

      {/* about section */}
      <section id="about" className="w-full min-h-screen flex flex-col items-center px-4 md:px-8 py-10 bg-gray-100 font-[Inria Sans]">
        {/* Top Section: Text + Image */}
        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-10 mb-10">
          {/* Text Column */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-[50%] text-center md:text-left space-y-4"
          >
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
              About<span className="text-[#CE9315]"> Us</span>
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify">
              At HomePack Medical Services, we bring quality healthcare directly
              to your home. Our mission is to provide personalized, accessible,
              and efficient medical care beyond traditional hospital settings.
              Through our innovative homecare services, secure telemedicine
              consultations, and comprehensive first aid training, we strive to
              meet your health needs with compassion and professionalism.
              Experience healthcare that's designed around you—delivered where
              you need it most.
            </p>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-[50%] h-[300px] sm:h-[400px] bg-contain bg-no-repeat bg-center rounded-lg"
            style={{ backgroundImage: `url(${aboutImage})` }}
          ></motion.div>
        </div>

        {/* Bottom Section: Two Text Blocks */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full md:w-[50%] text-center md:text-left"
          >
            <p className="text-xl md:text-4xl sm:text-2xl font-bold text-black">
              Transform with Innovative <br /> Healthcare Solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full md:w-[50%] text-center md:text-left"
          >
            <p className="text-base sm:text-lg text-gray-700 text-justify">
              We are a team of healthcare experts and technologists passionate
              about improving the healthcare experience. Our diverse expertise
              drives us to continuously innovate and expand our platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* services section */}
      <section id='services' className="w-full min-h-screen flex flex-col items-center px-4 md:px-8 py-10 font-[Inria Sans]">
        {/* Header */}
        <div className="w-full mb-8">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
            Services
          </p>
        </div>

        {/* Services Cards */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-wrap gap-6 justify-center"
        >
          {[
            {
              title: "Home Care",
              desc: "Home Care provides professional medical assistance and personal support to patients in their homes, ensuring comfort and convenience.",
              img: serviceImage1,
            },
            {
              title: "Telemedicine",
              desc: "Medical practitioners provide online consultations, prescribe medication and order tests. This is useful for basic non-emergency illnesses and this is better than self-medication.",
              img: serviceImage2,
            },
            {
              title: "First Aid Training",
              desc: "First-aid, CPR, elder/child care workshops to equip people to handle medical emergencies.",
              img: serviceImage3,
            },
          ].map(({ title, desc, img }, i) => (
            <div
              key={i}
              className="w-full md:w-[30%] h-80 bg-cover bg-center rounded-lg shadow-md"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="bg-zinc-900/60 w-full h-full rounded-lg p-10 flex flex-col justify-between">
                <div className="text-white">
                  <p className="text-[28px] font-bold mb-2">{title}</p>
                  <p className="text-[14px] leading-relaxed">{desc}</p>
                </div>
                <Link
                  to="/services"
                  className="inline-block mt-4 bg-[#CE9315] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#946704] transition duration-300 w-max"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </motion.div>

        {/* How It Works Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full flex flex-col mt-16"
        >
          <div className="mb-6">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
              How It<span className="text-[#CE9315]"> Works</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            {[
              {
                title: "Step 1",
                heading: "Choose your Desired Services",
                text: "Select from our range of services tailored to your needs.",
                icon: <FiClipboard size={40} className="text-[#CE9315]" />,
              },
              {
                title: "Step 2",
                heading: "Schedule your Appointments",
                text: "Pick a date and time that works for you.",
                icon: <FiCalendar size={40} className="text-[#CE9315]" />,
              },
              {
                title: "Step 3",
                heading: "Confirm Your Booking",
                text: "Review your details and confirm your appointment.",
                icon: <FiCheckCircle size={40} className="text-[#CE9315]" />,
              },
            ].map(({ title, heading, text, icon }, i) => (
              <div
                key={i}
                className="w-full md:w-[30%] bg-white rounded-lg shadow-md p-6 text-center"
              >
                <div className="mb-4 flex justify-center">{icon}</div>
                <p className="font-bold text-lg mb-1">{title}</p>
                <p className="text-md font-semibold mb-2">{heading}</p>
                <p className="text-sm text-gray-400">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* book & testimonies section */}
      <div className="w-full min-h-screen flex flex-col items-center px-4 md:px-8 py-10 font-[Inria Sans] bg-gray-100/20 space-y-10">
        {/* Images Section */}
        <motion.div
          className="w-full flex flex-wrap"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        >
          {[serviceImage1, serviceImage2, serviceImage3].map((img, i) => (
            <div
              key={i}
              className="w-full md:w-1/3 h-60 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          ))}
        </motion.div>

        {/* Appointment Section */}
        <motion.div
          className="w-full md:w-[75%] bg-[#CE9315] h-60 rounded-lg px-6 flex flex-col md:flex-row items-center justify-between text-white shadow-lg"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center md:text-left py-4 md:py-0">
            <p className="text-3xl font-bold">Book Your Appointment Today</p>
            <p className="text-sm mt-2">
              Get personalized care at your convenience.
            </p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              to="/book"
              className="bg-white text-black font-bold px-6 py-2 rounded hover:bg-gray-200 transition duration-200"
            >
              Book Now
            </Link>
            <Link
              to="/learn-more"
              className="bg-white text-black font-bold px-6 py-2 rounded hover:bg-gray-200 transition duration-200"
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            Testimonials
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                name: "Sarah Mensah",
                image: customer1,
                stars: 5,
                comment:
                  "HomePack provided excellent homecare for my father. Professional and compassionate staff!",
              },
              {
                name: "Kwame Owusu",
                image: customer2,
                stars: 4,
                comment:
                  "Telemedicine was seamless and quick. I didn’t have to leave home. Highly recommend!",
              },
              {
                name: "Akua Boateng",
                image: customer3,
                stars: 5,
                comment:
                  "The first aid training empowered me to respond to emergencies confidently. Loved it!",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                className="w-full md:w-[30%] bg-white p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 80 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <div className="flex text-[#CE9315] mb-2">
                  {[...Array(t.stars)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  {[...Array(5 - t.stars)].map((_, i) => (
                    <FaRegStar key={i} />
                  ))}
                </div>
                <p className="font-bold mb-1">{t.name}</p>
                <p className="text-gray-700 text-sm">{t.comment}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      {/* Contact section */}

      <section id="contact">
        <ContactUs/>
      </section>
    </div>
  );
};

export default Landing;
