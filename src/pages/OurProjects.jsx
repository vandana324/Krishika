import React, { useState } from "react";
import { FaSearchPlus } from "react-icons/fa";
import IndustriesWeServe from './IndustriesWeServe';
import image1 from "../photos/new7.jpg"
import image2 from "../photos/new6.jpg"
import image3 from "../photos/new9.jpg"

const projectData = [
  {
    id: 1,
    title: "Modern Glass Facade",
    category: "Glass Glazing",
    image: image1,
    description: `
      This commercial complex was transformed with a bold, full-glass front elevation. 
      We worked closely with architects to ensure the structural support aligned with the minimalist all-glass design. 
      Each glass panel was carefully measured and installed using high-grade aluminum framing and toughened glass to maintain clarity and safety. 
      The final result is a visually striking facade that reflects natural light while maintaining energy efficiency. 
      It doesn't just enhance the building’s appeal—it becomes a landmark in the area.
    `
  },
  {
    id: 2,
    title: "Stainless Steel Railing",
    category: "Railings",
    image: image2,
    description: `
      This luxury home staircase needed something that was both elegant and secure. 
      We designed and installed a custom stainless steel railing that complemented the client’s interior design with brushed steel finish and clean lines. 
      Beyond aesthetics, we ensured complete safety with anti-slip grip bars, strong base anchoring, and rust-proof finishing. 
      Every weld and polish was done with precision, resulting in a railing that not only adds sophistication but will also stand strong for decades.
    `
  },
  {
    id: 3,
    title: "Sliding Aluminum Windows",
    category: "Aluminum Work",
    image: image3,
    description: `
      In this modern residential project, our team installed smooth-gliding aluminum sliding windows crafted from premium Hindalco frames. 
      The challenge was to provide insulation from external noise and heat while ensuring a sleek design. 
      We achieved this using double-glazed toughened glass, precision runners for effortless sliding, and integrated mosquito mesh panels. 
      The black powder-coated finish gave a bold, minimal look — perfect for contemporary homes. 
      The client was thrilled with the combination of performance and beauty.
    `
  }
];


const categories = ["All", "Glass Glazing", "Railings", "Aluminum Work"];

const OurProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projectData
      : projectData.filter(p => p.category === selectedCategory);

  return (
    <section id="ProjectGallery" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Our Recent Project</h2>
        <p className="text-center text-gray-600 mb-10">
          Explore some of our recent projects across various services.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition duration-200 ${
                selectedCategory === cat
                  ? "bg-indigo-600 text-white"
                  : "bg-white border-gray-300 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="relative group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full h-64 object-cover shadow-md group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-white bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-black rounded-lg">
                <FaSearchPlus size={24} />
                <p className="mt-2 font-semibold">View Details</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal View */}
        {selectedProject && (
  <div
    className="fixed inset-0 bg-black bg-opacity-80 z-50 flex"
    onClick={() => setSelectedProject(null)}
  >
    <div
      className="flex w-full h-full bg-white"
      onClick={(e) => e.stopPropagation()}
    >
      {/* LEFT: FULL HEIGHT IMAGE */}
     <div className="w-1/2 h-full p-8 flex items-center justify-center bg-white">
  <img
    src={selectedProject.image}
    alt={selectedProject.title}
    className="w-full h-full object-cover rounded-lg shadow-xl"
  />
</div>

      {/* RIGHT: CONTENT */}
      <div className="w-1/2 p-10 overflow-y-auto flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">{selectedProject.title}</h2>
        <p className="text-lg font-semibold text-indigo-600 mb-3">{selectedProject.category}</p>
        <p className="text-base text-gray-700 mb-6 leading-relaxed">
          {selectedProject.description}
        </p>
        <button
          onClick={() => setSelectedProject(null)}
          className="self-start bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition duration-300"
        >
          CLOSE
        </button>
      </div>
    </div>
  </div>
)}


      </div>

    
    </section>
  );
};

export default OurProjects;
