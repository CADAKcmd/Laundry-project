import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-blue-100 w-full overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-200 rounded-full -translate-x-1/4 -translate-y-1/4 md:w-72 md:h-72 md:-translate-x-1/3 md:-translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-200 rounded-full translate-x-1/4 translate-y-1/4 md:w-96 md:h-96 md:translate-x-1/3 md:translate-y-1/3"></div>

      {/* Top Hero Section */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-32 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Text */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-white text-sky-600 font-semibold text-sm px-4 py-1 rounded-full mb-4 shadow">
            Welcome to Success Laundry
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-snug mb-4">
            Experience the <br /> New Level of Laundry
          </h1>
          <p className="text-gray-600 mb-6 max-w-md mx-auto md:mx-0">
            Schedule a free pickup & delivery for all your laundry needs. Experience premium service at your convenience.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <ScrollLink to="services" smooth={true} duration={600}>
              <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold shadow transition">
                Get Started
              </button>
            </ScrollLink>
            <ScrollLink to="getstarted" smooth={true} duration={600}>
              <button className="bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold shadow border hover:bg-gray-100 transition">
                Contact Us
              </button>
            </ScrollLink>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img
            src="https://i.pinimg.com/736x/6b/3a/49/6b3a4902b5f8924e037c87eae173e98b.jpg"
            alt="Laundry Lady"
            className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg object-cover"
          />
        </motion.div>
      </div>

      {/* Booking Card */}
      <motion.div
        className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 -mt-8 md:-mt-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="bg-gray-900 bg-opacity-90 text-white rounded-lg shadow-lg p-6 md:p-8 w-full max-w-full md:max-w-lg mx-auto md:mx-0">
          <h2 className="text-xl md:text-2xl font-bold mb-3">Let's book a pickup service!</h2>
          <p className="text-sm text-gray-200 mb-4">
            Schedule a free pickup & delivery for your laundry today.
          </p>
          <ScrollLink to="ordernow" smooth={true} duration={600}>
            <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition mb-4">
              Booking Form
            </button>
          </ScrollLink>

          {/* Reviews */}
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
            </div>
            <span className="text-gray-300 text-sm">900+ Reviews</span>
          </div>
        </div>
      </motion.div>

      {/* Contact Section */}
      <div className="bg-white py-6 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center border-t mt-12 relative z-20">
        <div className="flex items-center gap-3">
          <MdEmail className="text-sky-500 text-3xl" />
          <div>
            <h3 className="font-bold text-gray-800">Contact Us</h3>
            <p className="text-gray-600 text-sm">+234 913 423 0326 <br /> +234 705 400 1332</p>
            <p className="text-gray-600 text-sm">successlaundry001@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-4 md:mt-0">
          <MdLocationOn className="text-sky-500 text-3xl" />
          <div>
            <h3 className="font-bold text-gray-800">Our Address</h3>
            <p className="text-gray-600 text-sm">3, Morocco Road, shomolu,</p>
            <p className="text-gray-600 text-sm">Lagos, Nigeria</p>
          </div>
        </div>
      </div>
    </section>
  );
}
