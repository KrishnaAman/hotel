import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { assets } from "../assets/assets";

// Sample static experiences
const experiences = [
  {
    id: "exp1",
    title: "Luxury Spa Retreat",
    description:
      "Rejuvenate with world-class spa therapies designed for ultimate bliss.",
    image: assets.spa,
    category: "Wellness",
  },
  {
    id: "exp2",
    title: "Himalayan Adventure",
    description:
      "Thrilling trekking and exhilarating rafting for an adrenaline rush.",
    image: assets.adventure,
    category: "Adventure",
  },
  {
    id: "exp3",
    title: "Gourmet Dining Experience",
    description:
      "Indulge in an exquisite gourmet dinner featuring signature dishes.",
    image: assets.dining,
    category: "Culinary",
  },
  {
    id: "exp4",
    title: "Curated City Tour",
    description:
      "Discover the hidden gems and vibrant culture of the city with our expert-led guides.",
    image: assets.cityTour,
    category: "Exploration",
  },
];

const Experiences = () => {
  // Staggered fade-in effect for cards
  useEffect(() => {
    const cards = document.querySelectorAll(".fade-in-card");
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("opacity-100", "translate-y-0");
      }, index * 100);
    });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section with Background Image */}
      <div
        className="relative flex flex-col items-center justify-center px-6 text-white h-[70vh] overflow-hidden"
        style={{
          backgroundImage: `url(${assets.expback})`, // your new hero background
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-extrabold tracking-tight">
            Your Next Adventure Awaits
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl font-light">
            Discover our handpicked collection of unique experiences, designed
            to create moments you’ll treasure forever.
          </p>
        </div>
      </div>

      {/* Experiences Section */}
      <div className="container mx-auto px-6 md:px-16 pt-20 pb-30">
        <Title
          title="Curated Experiences"
          subTitle="From wellness retreats to thrilling escapades, find your perfect activity."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="fade-in-card bg-white rounded-2xl shadow-xl transition-all duration-500 transform opacity-0 -translate-y-4 group overflow-hidden relative"
            >
              <img
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                src={exp.image}
                alt={exp.title}
              />
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                  {exp.category}
                </span>
                <h3 className="mt-3 font-bold text-xl text-gray-800">
                  {exp.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <NewsLetter />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Experiences;
