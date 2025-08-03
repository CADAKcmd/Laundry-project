import React, { useState } from "react";
import { FaTruck, FaClock, FaWallet } from "react-icons/fa";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

export default function BookNow() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    service: "",
    address: "",
    notes: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const details = [
    {
      icon: <FaTruck />,
      title: "Quick Delivery",
      desc: "We pick up and deliver laundry fast and fresh.",
    },
    {
      icon: <FaClock />,
      title: "24/7 Support",
      desc: "Our support team is available anytime you need help.",
    },
    {
      icon: <FaWallet />,
      title: "Affordable Price",
      desc: "Best prices in town without compromising quality.",
    },
  ];

  return (
    <section
      id="ordernow"
      className="bg-cover bg-center py-20 px-4"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/8a/cd/e1/8acde1f3a0998f071f548ee57a28978a.jpg')",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white bg-opacity-90 backdrop-blur-md rounded-xl max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 p-8 shadow-xl"
      >
        {/* LEFT DETAILS */}
        <div>
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-6 text-gray-800"
          >
            Why Book With Us?
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {details.map((item, idx) => (
              <motion.div
                custom={idx}
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                viewport={{ once: true }}
                key={idx}
                className="bg-white rounded-xl p-6 flex items-start gap-4 shadow hover:shadow-lg transition"
              >
                <div className="bg-sky-500 text-white text-2xl p-3 rounded-full">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl shadow-lg w-full"
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Book a Service
          </h3>

          <form
            className="space-y-4"
            action="https://formsubmit.co/successlaundry001@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-sky-500"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-sky-500"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Pickup Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-sky-500"
              required
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-sky-500"
              required
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-sky-500"
              required
            >
              <option value="">Select Service</option>
              <option>Laundry & Fold</option>
              <option>Dry Cleaning</option>
              <option>Steam Press</option>
              <option>Full Package</option>
            </select>
            <textarea
              name="notes"
              placeholder="Additional Notes (optional)"
              value={formData.notes}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-sky-500 h-24"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-sky-500 text-white font-semibold py-3 rounded-lg hover:bg-sky-600 transition"
            >
              Submit Booking
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
