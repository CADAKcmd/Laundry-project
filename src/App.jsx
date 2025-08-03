import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/About";
import ServicesPage from "./components/ServicesPage";
import BookNow from "./components/BookNow";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import GetStarted from "./components/GetStarted";

import Footer from "./components/Footer";
import LocationMap from "./components/LocationMap";

const App = () => {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesPage />
      <BookNow />
      <HowItWorks />
      <WhyChooseUs />
      <GetStarted />
      <LocationMap />
      <Footer />
    </div>
  );
};

export default App;
