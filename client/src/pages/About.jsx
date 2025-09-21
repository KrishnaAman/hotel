import React from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { assets } from "../assets/assets"; // keep this for cityTour image

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div
        className="flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url('/src/assets/aboutHero.png')] bg-no-repeat bg-cover bg-center h-[60vh] relative"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative font-playfair text-3xl md:text-5xl font-extrabold text-center max-w-3xl z-10">
          About QuickStay
        </h1>
        <p className="relative text-sm md:text-lg mt-4 max-w-xl text-center z-10">
          At QuickStay, we are committed to providing world-class hospitality
          and unforgettable experiences for every traveler. Learn more about
          our journey, values, and mission.
        </p>
      </div>

      {/* About Content */}
      <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 py-20 gap-12">
        <Title
          title="Our Mission"
          subTitle="To deliver luxury, comfort, and unforgettable memories to our guests around the globe."
        />
        <div className="max-w-md text-gray-600 text-sm md:text-base text-center">
          Founded with the vision to redefine luxury stays, QuickStay offers a
          curated selection of hotels and experiences. From tranquil escapes to
          vibrant city adventures, our dedicated team ensures that every stay is
          memorable. Your comfort and satisfaction are our top priorities.
        </div>

        <Title
          title="Why Choose Us"
          subTitle="Discover the QuickStay difference through quality, comfort, and unmatched service."
        />
        <div className="flex flex-col md:flex-row items-center gap-8 mt-6">
          <div className="flex flex-col gap-4 max-w-md">
            <h3 className="font-semibold text-lg">Exceptional Hospitality</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Our team goes above and beyond to ensure your stay is seamless,
              enjoyable, and truly memorable.
            </p>

            <h3 className="font-semibold text-lg">Curated Experiences</h3>
            <p className="text-gray-600 text-sm md:text-base">
              From fine dining to adventure tours, our carefully curated
              experiences make every trip unique.
            </p>

            <h3 className="font-semibold text-lg">Global Network</h3>
            <p className="text-gray-600 text-sm md:text-base">
              QuickStay partners with exclusive properties worldwide, ensuring
              luxury and comfort wherever you travel.
            </p>
          </div>
          <img
            src={assets.cityTour} // keep this image
            alt="Why Choose Us"
            className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Newsletter Section */}
      <NewsLetter />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
