import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaTiktok, FaBars } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Contact", to: "getstarted" },
  ];

  return (
    <header className="w-full bg-white border-b shadow-sm">
      {/* --- Top Contact Bar (Hidden on Mobile) --- */}
      <div className="bg-gray-100 px-4 py-2 text-sm text-gray-800 hidden md:flex">
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex items-center gap-6 text-base">
            <span className="flex items-center gap-2">
              <MdPhone className="text-blue-600 text-xl" />
              <span className="font-medium"> +234 913 423 0326, +234 705 400 1332</span>
            </span>
            <span className="flex items-center gap-2">
              <MdEmail className="text-blue-600 text-xl" />
              <span className="font-medium">successlaundry001@gmail.com</span>
            </span>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <a
              href="https://www.tiktok.com/@successlaundry3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className="text-blue-600 hover:text-black cursor-pointer" />
            </a>
          </div>
        </div>
      </div>

      {/* --- Main Navbar --- */}
      <nav className="px-4 py-3 bg-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/assets/Rr.png" alt="Logo" className="h-12 w-auto sm:h-14" />
          </div>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="w-7 h-7 text-gray-700">
              <FaBars className="w-7 h-7 text-gray-700" />
            </button>
          </div>

          <ul className="hidden md:flex gap-5 text-sm text-gray-700 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  className="hover:text-blue-600 cursor-pointer transition-colors"
                  activeClass="text-blue-600 font-semibold"
                >
                  {link.name}
                </ScrollLink>
              </li>
            ))}
          </ul>

          <ScrollLink
            to="ordernow"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            className="hidden md:block bg-sky-500 hover:bg-sky-600 text-white font-semibold px-4 py-2 rounded shadow-sm cursor-pointer"
          >
            Order Pickup
          </ScrollLink>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 text-sm text-gray-700 font-medium">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setMenuOpen(false)}
                spy={true}
                className="hover:text-blue-600 cursor-pointer transition-colors"
                activeClass="text-blue-600 font-semibold"
              >
                {link.name}
              </ScrollLink>
            ))}
            <ScrollLink
              to="ordernow"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setMenuOpen(false)}
              spy={true}
              className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-5 py-2 rounded-lg w-max shadow-sm cursor-pointer"
            >
              Order Pickup
            </ScrollLink>
          </div>
        )}
      </nav>
    </header>
  );
}