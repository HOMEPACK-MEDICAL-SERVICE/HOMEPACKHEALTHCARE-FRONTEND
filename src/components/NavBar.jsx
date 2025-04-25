import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 font-[Inria Sans] transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between relative">
        {/* Logo */}
        <div className="z-50 flex-shrink-0">
          <img src={Logo} alt="Logo" className="w-28" />
        </div>

        {/* Hamburger Icon - Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-zinc-700 z-50"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Links */}
        <div
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent
            flex-col md:flex-row md:flex md:items-center md:justify-between 
            px-6 md:px-0 py-4 md:py-0 space-y-4 md:space-y-0 transition-all duration-300 ease-in-out
            ${isOpen ? "flex" : "hidden"} md:flex w-full`}
        >
          {/* Left Nav - Scroll Links */}
          <div className="flex flex-col md:flex-row flex-1 justify-center items-center space-y-2 md:space-y-0 md:space-x-8 md:mr-40 text-zinc-700 font-medium">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer hover:text-[#CE9315]"
            >
              Home
            </ScrollLink>

            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer hover:text-[#CE9315]"
            >
              About Us
            </ScrollLink>

            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer hover:text-[#CE9315]"
            >
              Services
            </ScrollLink>

            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer hover:text-[#CE9315]"
            >
              Contact
            </ScrollLink>
          </div>

          {/* Auth Buttons */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-center md:text-right">
            <RouterLink
              to="/login"
              onClick={() => setIsOpen(false)}
              className="text-zinc-700 hover:text-[#CE9315] font-medium"
            >
              Login
            </RouterLink>
            <RouterLink
              to="/signup"
              onClick={() => setIsOpen(false)}
              className="bg-[#CE9315] text-white px-4 py-1 rounded hover:opacity-90 font-semibold"
            >
              Register
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
