import React, { useState } from "react";
import { FaPlay, FaCheckCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function AboutSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleClose = () => {
    setIsPlaying(false);
  };

  const handleScrollToServices = () => {
    const section = document.getElementById("services");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-14 px-4 md:px-16" id="about">
      <div className="flex flex-col lg:flex-row items-start gap-12">
        {/* LEFT SIDE: Image + Video */}
        <div className="w-full lg:w-1/2 relative">
          <img
            src="https://i.pinimg.com/1200x/72/1c/e3/721ce36198b54463d1f843224f04f2e2.jpg"
            alt="Laundry"
            className="w-full rounded-xl shadow-lg object-cover"
          />

          <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 px-4 py-2 rounded shadow">
            <h4 className="text-lg font-semibold text-gray-800">
              We Take Care of Your Laundry
            </h4>
          </div>

          <div className="absolute -bottom-10 -right-10 w-64 shadow-xl">
            {!isPlaying ? (
              <div className="relative">
                <img
                  src="https://i.pinimg.com/736x/d1/9d/56/d19d563e66551c6619221c7d7cf883c5.jpg"
                  alt="Video Preview"
                  className="rounded-xl object-cover w-full h-auto"
                />
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-60 rounded-xl"
                >
                  <FaPlay className="text-white text-2xl" />
                </button>
                <div className="absolute bottom-2 left-2 bg-white text-sm text-gray-800 font-medium px-3 py-1 rounded shadow">
                  Watch how we work
                </div>
              </div>
            ) : (
              <div className="relative">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/4QxmleZeu9s?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="rounded-xl w-full h-[315px]"
                ></iframe>
                <button
                  onClick={handleClose}
                  className="absolute top-2 right-2 bg-white hover:bg-red-100 text-gray-800 p-1.5 rounded-full shadow"
                >
                  <IoClose className="text-xl" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT SIDE: Text */}
        <div className="w-full lg:w-1/2 mt-16 lg:mt-0">
          <span className="text-sm font-medium bg-blue-100 text-blue-600 px-4 py-1 rounded-full">
            About Launder
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 leading-snug">
            Reviving Your Clothes,
            <br />
            One Wash at a Time
          </h2>
          <p className="text-gray-600 mt-4 text-base leading-relaxed">
            We provide premium laundry and dry cleaning services with modern
            equipment and skilled staff. Your clothes deserve better care.
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-blue-500 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-gray-900">
                  Years of Experience
                </h4>
                <p className="text-gray-600 text-sm">
                  Over a decade of consistently delivering clean, fresh garments
                  to happy clients.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaCheckCircle className="text-blue-500 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-gray-900">
                  Professional Staffs
                </h4>
                <p className="text-gray-600 text-sm">
                  Highly trained professionals who treat every item with care
                  and precision.
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={handleScrollToServices}
            className="mt-6 bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-lg shadow-md transition duration-200"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
