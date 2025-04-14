import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <motion.div
      className="w-full bg-gray-100/30 py-16 px-6 md:px-20 font-[Inria Sans]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold text-center mb-10 text-[#333]">
        Contact Us
      </h2>

      <div className="w-full flex flex-col md:flex-row gap-10">
        {/* Contact Form */}
        <div className="w-full md:w-2/3 bg-white rounded-lg p-6 shadow-md">
          <form className="space-y-6">
            <div>
              <label className="block mb-1 text-sm font-semibold">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CE9315]"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-semibold">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CE9315]"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-semibold">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#CE9315]"
              />
            </div>

            <button
              type="submit"
              className="bg-[#CE9315] hover:bg-[#b77e10] text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/3 flex flex-col justify-between bg-[#CE9315] text-white rounded-lg p-6 shadow-md">
          <div>
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <p className="text-sm mb-2">Phone: +233 24 123 4567</p>
            <p className="text-sm mb-2">Email: support@homepack.com</p>
            <p className="text-sm">Location: Accra, Ghana</p>
          </div>
          <div className="mt-8 text-sm">
            <p>
              We’re here to help you 24/7 with any questions or inquiries about
              our services.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
