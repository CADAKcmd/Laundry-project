import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

export default function GetStarted() {
  return (
    <section
      id="getstarted"
      className="w-full bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-6 md:p-16 text-gray-800 overflow-hidden animate-fadeInUp"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Experience the New Level <br className="hidden md:block" /> of Laundry Service
          </h1>

          <p className="text-gray-600 mb-6">
            We provide fast, affordable, and professional laundry services. Enjoy premium care for your clothes with timely pickups and eco-friendly cleaning solutions.
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=successlaundry001@gmail.com&su=Laundry%20Pickup%20Request&body=Hello%2C%20I%20would%20like%20to%20book%20a%20laundry%20pickup%20service.%20Please%20get%20back%20to%20me%20with%20available%20slots."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded transition-all shadow-md animate-bounce"
          >
            Get Started <FaArrowRight className="ml-2" />
          </a>
        </div>

        {/* Right Section */}
        <div className="flex-1 space-y-8">
          <div className="flex items-start gap-4">
            <div className="bg-blue-500 text-white p-3 rounded-full">
              <FaPhoneAlt />
            </div>
            <div>
              <h4 className="font-bold text-lg">Contact Us</h4>
              <p className="text-sm text-gray-700 font-semibold">
                Phone : <span className="text-blue-600">+234 913 423 0326</span>
              </p>
              <p className="text-sm text-gray-700 font-semibold">
                Email : <span className="text-blue-600">successlaundry001@gmail.com</span>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-blue-500 text-white p-3 rounded-full">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4 className="font-bold text-lg">Our Address</h4>
              <p className="text-sm text-gray-700">
                3, Morocco Road, Shomolu, <br /> Lagos, Nigeria
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
