import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function LocationMap() {
  const openMap = () => {
    const address = encodeURIComponent("3, Morocco Road, Shomolu, Lagos, Nigeria");
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, "_blank");
  };

  return (
    <section className="bg-sky-100 py-16 px-6 md:px-20 text-center">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center mb-4">
          <FaMapMarkerAlt className="text-sky-600 text-4xl" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Locate Us for Your Washing Needs
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          Visit our laundry shop and experience premium cleaning services. We're here to make your clothes fresh and spotless!
        </p>
        <p className="text-base text-gray-800 font-medium mb-4">
            3, Morocco Road, Shomolu, Lagos, Nigeria
        </p>
        <button
          onClick={openMap}
          className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-2 rounded-full transition duration-200 shadow-md"
        >
          View on Google Maps
        </button>
      </div>
    </section>
  );
}
