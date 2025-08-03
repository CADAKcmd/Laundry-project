import React, { useEffect, useRef, useState } from "react";
import { FaShoppingCart, FaTruck, FaTshirt, FaSmile } from "react-icons/fa";

const steps = [
  {
    icon: <FaShoppingCart />,
    title: "Place Your Order",
    description:
      "Let us know what you need—wash, dry, or iron—right from your phone or website.",
  },
  {
    icon: <FaTruck />,
    title: "We Pickup & Clean",
    description:
      "Our team collects your clothes and processes them using premium tools and detergents.",
  },
  {
    icon: <FaTshirt />,
    title: "We Deliver Fresh Laundry",
    description:
      "Get your clothes back neatly folded or pressed, delivered right to your door.",
  },
  {
    icon: <FaSmile />,
    title: "Enjoy Clean Clothes",
    description:
      "Feel fresh and worry-free with every cycle—clean clothes on your schedule.",
  },
];

export default function HowItWorks() {
  const cardsRef = useRef([]);
  const [visible, setVisible] = useState(Array(steps.length).fill(false));

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
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="uppercase text-sky-500 font-semibold mb-2">How It Works</p>
        <h2 className="text-3xl sm:text-4xl font-bold">
          From Order to Delivery—<br className="hidden sm:inline" />With Ease
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map(({ icon, title, description }, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            data-index={i}
            className={`flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 shadow transition-all duration-700 ease-out
              ${visible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
          >
            <div className="bg-sky-400 text-white w-16 h-16 flex items-center justify-center rounded-full text-2xl mb-4">
              {icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
