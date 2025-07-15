import React from "react";
import about1 from "../assets/about1.png";
import stairImage1 from "../photos/image5.jpg";
import stairImage2 from "../photos/image6.jpg";
import stairImage3 from "../photos/image7.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const About = () => {
  return (
    <section id="about" className="w-full bg-white">
      {/* Infrastructure Section */}
      <div className="py-24 px-6 md:px-20">
        <div className="bg-gray-100 border-white rounded-lg p-6 md:p-10 shadow-md">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Infrastructure
          </h2>

          {/* Grid for Vision + Swiper */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* LEFT SIDE: Vision & Mission */}
            <div className="bg-[#0a0a4a] text-white rounded-lg p-6 md:p-8">
              <div className="mb-6">
                <h3 className="text-red-500 font-bold text-sm mb-2 tracking-wide uppercase">
                  Our Value
                </h3>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-sm mb-4 leading-relaxed">
                  Our vision is to become the leading provider of innovative and high-quality
                  aluminum and glass fabrication solutions across India.
                  <br />
                  <br />
                  We aim to set new industry standards by combining modern design, precision
                  engineering, and sustainable materials that stand the test of time.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-sm mb-4 leading-relaxed">
                  Our mission is to deliver exceptional aluminum fabrication and glazing services
                  through expert craftsmanship, premium-grade materials, and a customer-first
                  approach.
                  <br />
                  <br />
                  We are committed to executing every project with attention to detail, safety, and
                  timely delivery.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE: Swiper Image Slider */}
            <div className="w-full">
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Autoplay]}
                className="w-full"
              >
                {[stairImage1, stairImage2, stairImage3].map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full rounded-xl shadow-lg overflow-hidden">
                      <img
                        src={img}
                        alt={`Slide ${index + 1}`}
                        className="w-full max-w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-xl"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="mt-4 inline-block bg-yellow-400 text-black px-4 py-2 text-sm font-bold rounded shadow">
                20+
                <br />
                Years of Experience
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div
        className="relative w-full bg-cover bg-center text-white py-24 px-6 md:px-20"
        style={{ backgroundImage: `url(${about1})` }}
      >
        <div className="absolute inset-0 bg-[#0a0a4a] opacity-75 z-0"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Schedule your aluminum & glass service today <br /> and experience quality
            craftsmanship.
          </h2>
          <p className="text-lg mb-6 leading-relaxed">
            From sliding doors, office partitions, ACP cladding to toughened glass installations —
            we deliver durable, modern, and aesthetic fabrication solutions using premium materials
            like Jindal and Hindalco.
          </p>
          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-yellow-400 text-black font-bold px-6 py-3 rounded hover:bg-yellow-500 transition duration-300"
          >
            BOOK A FREE SITE VISIT
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-yellow-400 text-black py-14 px-6 md:px-20 grid grid-cols-2 md:grid-cols-4 text-center gap-8">
        <div>
          <h3 className="text-4xl font-bold">10K+</h3>
          <p className="font-medium mt-2">Happy Clients</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">25K+</h3>
          <p className="font-medium mt-2">Projects Done</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">521+</h3>
          <p className="font-medium mt-2">Professional Experts</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">4.6</h3>
          <p className="font-medium mt-2">Client Rating</p>
        </div>
      </div>
    </section>
  );
};

export default About;
