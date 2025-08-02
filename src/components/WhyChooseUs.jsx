import React, { useEffect, useRef, useState } from "react";
import {
  FaAward,
  FaHandsHelping,
  FaTshirt,
  FaThumbsUp,
  FaClock,
  FaSmile,
} from "react-icons/fa";

const features = [
  {
    icon: <FaAward />,
    title: "Best Quality Laundry",
    desc: "We use top-tier cleaning products and techniques for all garments to maintain their quality.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Expert Cleaners",
    desc: "Our team consists of experienced professionals dedicated to perfect cleanliness and fabric care.",
  },
  {
    icon: <FaTshirt />,
    title: "Fabric-Friendly Products",
    desc: "We ensure all detergents and solutions are safe for all fabric types, including delicate materials.",
  },
  {
    icon: <FaThumbsUp />,
    title: "Trusted & Reliable",
    desc: "Hundreds of customers trust us for consistent, reliable laundry and dry cleaning service.",
  },
  {
    icon: <FaClock />,
    title: "On-Time Delivery",
    desc: "We pick up and deliver your laundry on time, every time – guaranteed.",
  },
  {
    icon: <FaSmile />,
    title: "Customer Satisfaction",
    desc: "Our goal is your happiness. We go the extra mile to ensure your satisfaction.",
  },
];

export default function WhyChooseUs() {
  const cardsRef = useRef([]);
  const [visible, setVisible] = useState(Array(features.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index, 10);
          if (entry.isIntersecting && !visible[index]) {
            setVisible((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    cardsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardsRef.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visible]);

  return (
    <section
      id="why"
      className="relative bg-cover bg-center bg-no-repeat py-20 px-4"
      style={{
        backgroundImage: `url('https://i.pinimg.com/736x/20/5e/a4/205ea4a831ea38d218af8529ad61523e.jpg')`, // 🔁 Replace with your actual image path
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto text-center mb-14 text-white">
        <p className="text-sky-400 font-semibold text-sm uppercase">
          Why Choose Us
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          We Give the Best Laundry Experience
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-200">
          We offer high-quality, affordable laundry and dry cleaning services
          designed to make your life easier.
        </p>
      </div>

      <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((item, idx) => (
          <div
            key={idx}
            ref={(el) => (cardsRef.current[idx] = el)}
            data-index={idx}
            className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 text-white text-left transition-all duration-700 ease-out
              ${visible[idx] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
          >
            <div className="text-sky-400 text-4xl mb-4">{item.icon}</div>
            <h4 className="font-semibold text-xl mb-2">{item.title}</h4>
            <p className="text-sm text-gray-200">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
