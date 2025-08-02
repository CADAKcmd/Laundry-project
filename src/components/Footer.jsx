import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-sky-900 text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Success Laundry</h2>
          <p className="text-gray-300 mb-4">
            Reliable laundry & dry cleaning services at your doorstep. Pickup, clean, and deliver — fresh every time.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.tiktok.com/@successlaundry3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-sky-300 text-2xl"
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <ScrollLink to="services" smooth={true} duration={500} className="cursor-pointer hover:text-white">
                Laundry Service
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="services" smooth={true} duration={500} className="cursor-pointer hover:text-white">
                Dry Cleaning
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="services" smooth={true} duration={500} className="cursor-pointer hover:text-white">
                Pickup & Delivery
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="services" smooth={true} duration={500} className="cursor-pointer hover:text-white">
                Folding & Ironing
              </ScrollLink>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer hover:text-white">
                About Us
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="why" smooth={true} duration={500} className="cursor-pointer hover:text-white">
                Why Choose Us
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="ordernow" smooth={true} duration={500} className="cursor-pointer hover:text-white">
                Book Now
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="getstarted" smooth={true} duration={500} className="cursor-pointer hover:text-white">
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Email: successlaundry001@gmail.com</li>
            <li>Phone: +234 913 423 0326 <br /> +234 705 400 1332</li>
            <li>Address: 3, Morocco Road, shomolu, Lagos, Nigeria</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-sky-700 mt-12 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Success Laundry. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
