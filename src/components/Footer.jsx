import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      className="w-full bg-[#FAFAFA] text-gray-800 py-10 px-6 md:px-20 font-[Inria Sans]"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 60 }}
      transition={{ duration: 0.7 }}
    >
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Brand Description */}
        <div className="w-full md:w-1/4">
          <h2 className="text-2xl font-bold text-[#CE9315]">HomePack</h2>
          <p className="text-sm mt-2 text-gray-700">
            Bringing care to your doorstep with trusted homecare and
            telemedicine services.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4 text-[#CE9315]">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="hover:text-[#b77e10] transition" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="hover:text-[#b77e10] transition" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="hover:text-[#b77e10] transition" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-[#b77e10] transition" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/4">
          <h3 className="text-md font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link to="/about" className="hover:text-[#CE9315] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#CE9315] transition">
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#CE9315] transition">
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/testimonials"
                className="hover:text-[#CE9315] transition"
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal & Support Links */}
        <div className="w-full md:w-1/4">
          <h3 className="text-md font-semibold mb-4">Legal & Support</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-[#CE9315] transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-[#CE9315] transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-[#CE9315] transition">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/support" className="hover:text-[#CE9315] transition">
                Support
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-[#CE9315] transition">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="w-full md:w-1/4">
          <h3 className="text-md font-semibold mb-4">Subscribe</h3>
          <p className="text-sm text-gray-600 mb-4">
            Stay updated with our latest services and healthcare tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto flex-1 px-4 py-3 rounded-lg text-black bg-white focus:outline-none focus:ring-2 focus:ring-[#CE9315]"
            />
            <button className="bg-[#CE9315] hover:bg-[#b77e10] text-white font-bold px-6 py-3 rounded-lg transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="w-full border-t border-gray-300 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} HomePack. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
