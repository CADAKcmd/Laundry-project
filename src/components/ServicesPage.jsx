import React from "react";
import {
  FaTshirt,
  FaSoap,
  FaTruckPickup,
  FaHandsWash,
  FaBroom,
  FaCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    title: "Laundry Service",
    description:
      "We handle all your laundry needs with top-grade detergents and care, ensuring freshness and hygiene.",
    icon: <FaTshirt />,
    image: "https://i.pinimg.com/1200x/33/3a/60/333a6009e79964ef5c625db241ce3460.jpg",
  },
  {
    title: "Dry Cleaning",
    description:
      "Delicate and premium fabrics are treated with industry-standard dry cleaning methods for a pristine finish.",
    icon: <FaSoap />,
    image: "https://i.pinimg.com/1200x/a3/e5/b4/a3e5b4880c313bcef61e90af755c4208.jpg",
  },
  {
    title: "Pickup & Delivery",
    description:
      "Enjoy hassle-free laundry with our door-to-door pickup and delivery service, fast and on time.",
    icon: <FaTruckPickup />,
    image: "https://i.pinimg.com/736x/45/01/d6/4501d66551d2d8e4b05fd477d1c4939c.jpg",
  },
  {
    title: "Clothes Folding",
    description:
      "We fold your clothes professionally and neatly so they’re ready to wear or store with ease.",
    icon: <FaCheckCircle />,
    image: "https://i.pinimg.com/736x/a3/77/8f/a3778ff44d7aae4bef82a03e01d74f07.jpg",
  },
  {
    title: "Hand Wash",
    description:
      "Perfect for delicates and special garments, our hand wash service ensures gentle and careful cleaning.",
    icon: <FaHandsWash />,
    image: "https://i.pinimg.com/736x/5b/ec/3b/5bec3bcefe8b7c31d555394cca02ae6f.jpg",
  },
  {
    title: "Ironing",
    description:
      "Wrinkle-free and crisp—our professional ironing service delivers your clothes looking sharp and fresh.",
    icon: <FaBroom />,
    image: "https://i.pinimg.com/736x/54/cd/d3/54cdd30312f80e4cd5058d231ffa7a55.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const ServicesPage = () => {
  return (
    <main className="bg-gray-50 py-12 px-4 min-h-screen" id="services">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-sky-500 font-semibold text-sm">Our Services</p>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2 leading-tight">
          A Personal and Professional <br className="hidden sm:inline" /> Cleaning Experience
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={idx}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-56 object-cover"
            />
            <div className="flex justify-center -mt-8">
              <div className="bg-sky-400 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl shadow-md">
                {service.icon}
              </div>
            </div>
            <div className="text-center px-6 py-6">
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              {/* <a
                href="#"
                className="text-sky-500 font-semibold inline-flex items-center gap-1 hover:underline"
              >
                Learn More <span>&rarr;</span>
              </a> */}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default ServicesPage;
