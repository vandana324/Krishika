import React from "react";
import bgHero from "../assets/aluminium-doors-windows.jpg";
import stairImage from "../assets/stair.png";
import home1 from "../assets/home1.png";

export default function Home() {
  return (
    <div className="w-full scroll-smooth">
      
      <section
        id="hero"
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bgHero})` }}
      >
        
        <div
          className="absolute inset-0 z-10"
          style={{ backgroundColor: "rgba(50, 70, 190, 0.6)" }}
        ></div>

    
        <div className="relative z-20 flex flex-col md:flex-row justify-between items-center h-full px-6 max-w-7xl mx-auto text-white">
          <div className="mt-24 max-w-xl">
            <p className="text-yellow-400 text-lg font-bold">WELCOME TO KRISHIKA ALUMINIUM</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-snug mt-2">
              Join for Quality Services.
            </h1>
            <button
              className="mt-6 bg-yellow-400 text-black px-6 py-3 font-semibold rounded shadow hover:bg-yellow-300"
              onClick={() => {
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              DISCOVER MORE
            </button>
          </div>

          <div className="mt-16 md:mt-0">
            <img
              src={home1}
              alt="Home Visual"
              className="w-[500px] md:w-[600px] h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>


      <section id="services" className="bg-white py-24 px-6">
        <div className="w-full mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">
  
        <div>
  <h2 className="text-5xl font-bold mb-4">Aluminum Fabrication & Glazing Solutions</h2>
  <p className="text-2xl mb-6 text-gray-800">
    Specializing in premium aluminum fabrication, sliding doors and windows, ACP cladding,
    toughened glass partitions, and office cabins – powered by top brands like Jindal and Hindalco.
  </p>
  <ul className="space-y-4 text-gray-800">
    <li className="text-xl font-bold">
      Sliding Doors & Windows
      <p className="font-normal text-base">Expert installation of aluminum sliding doors and windows for homes and offices.</p>
    </li>
    <li className="text-xl font-bold">
      Office Cabins & Room Partitions
      <p className="font-normal text-base">Custom aluminum office cabins and partitions with modern designs.</p>
    </li>
    <li className="text-xl font-bold">
      ACP & Glazing Work
      <p className="font-normal text-base">Aluminum Composite Panel (ACP) cladding and architectural glass glazing services.</p>
    </li>
    <li className="text-xl font-bold">
      Toughened Glass Solutions
      <p className="font-normal text-base">Installation of toughened glass cabins and partitions for a sleek, durable finish.</p>
    </li>
    <li className="text-xl font-bold">
      Steel Railings & Fabrication
      <p className="font-normal text-base">High-quality steel railings and aluminum fabrication work for all property types.</p>
    </li>
  </ul>
</div>


          <div className="relative">
            <img src={stairImage} alt="Stair" className="rounded-xl shadow-lg w-full" />
            <div className="absolute top-4 left-4 bg-yellow-400 text-black px-4 py-2 text-sm font-bold rounded shadow">
              20+<br />Years of Experience
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
