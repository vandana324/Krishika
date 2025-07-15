import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import stairImage1 from "../photos/new6.jpg";
import stairImage2 from "../photos/new7.jpg";
import stairImage3 from "../photos/new1.jpg";

const Services = () => {
  return (
    <section id="services" className="px-6 py-16 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between">
        
        {/* ✅ LEFT SIDE: SLIDER */}
        <div className="md:w-1/2 w-full relative">
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
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="rounded-xl shadow-lg w-full h-[350px] sm:h-[400px] md:h-[500px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute top-4 left-4 bg-yellow-400 text-black px-4 py-2 text-sm font-bold rounded shadow">
            20+<br />
            Years of Experience
          </div>
        </div>

        {/* ✅ RIGHT SIDE: TEXT */}
        <div className="md:w-1/2 mt-10 md:mt-0 md:pl-12">
          <h4 className="text-red-600 font-semibold mb-2 uppercase">Our Services</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted Solutions for Aluminum <br /> Fabrication & Glazing Work
          </h2>
          <p className="text-gray-700 mb-6">
            We specialize in Jindal and Hindalco aluminum works — from sliding doors and windows to ACP cladding,
            glass partitions, and steel railings. Our team delivers functional, stylish, and durable fabrication tailored
            for homes, offices, and commercial buildings.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Services;
