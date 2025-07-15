import React from "react";
import bgHero from "../assets/aluminium-doors-windows.jpg";
import home1 from "../assets/home1.png";
import {
  FaTools,
  FaWindowRestore,
  FaBuilding,
  FaGripLines,
  FaWrench,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import stairImage1 from "../assets/stairImage1.webp";
import stairImage2 from "../assets/stairImage2.jpg";
import stairImage3 from "../assets/stairImage3.png";

export default function Home() {
  return (
    <div className="w-full scroll-smooth">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bgHero})` }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-60 z-10"></div>

        <div className="relative z-20 flex flex-col md:flex-row justify-between items-center h-full px-6 max-w-7xl mx-auto text-white">
          {/* LEFT */}
          <div className="mt-24 md:mt-0 max-w-xl text-center md:text-left">
            <p className="text-yellow-400 text-lg font-bold">
              WELCOME TO KRISHIKA ALUMINIUM
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-snug mt-2">
              Join for Quality Services.
            </h1>
            <button
              className="mt-6 bg-yellow-400 text-black px-6 py-3 font-semibold rounded shadow hover:bg-yellow-300 transition duration-200"
              onClick={() => {
                document
                  .getElementById("offer")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              DISCOVER MORE
            </button>
          </div>

          {/* RIGHT */}
          <div className="mt-10 md:mt-0">
            <img
              src={home1}
              alt="Home Visual"
              className="w-[90%] md:w-[500px] lg:w-[600px] h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

    
     
    </div>
  );
}
