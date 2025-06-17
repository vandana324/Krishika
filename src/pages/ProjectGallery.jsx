import React, { useState } from "react";
import { FaSearchPlus } from "react-icons/fa";
import IndustriesWeServe from './IndustriesWeServe';

const projectData = [
  {
    id: 1,
    title: "Modern Glass Facade",
    category: "Glass Glazing",
    image: "/projects/glass1.jpg",
    description: "Full glass front elevation for a commercial complex."
  },
  {
    id: 2,
    title: "Stainless Steel Railing",
    category: "Railings",
    image: "/projects/railing1.jpg",
    description: "Custom-designed railing for a residential staircase."
  },
  {
    id: 3,
    title: "Sliding Aluminum Windows",
    category: "Aluminum Work",
    image: "/projects/aluminum1.jpg",
    description: "Durable and sleek sliding windows for a home project."
  },
  // Add more projects as needed
];

const categories = ["All", "Glass Glazing", "Railings", "Aluminum Work"];

const ProjectGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projectData
      : projectData.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Project Gallery</h2>
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
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white rounded-lg">
                <FaSearchPlus size={24} />
                <p className="mt-2 font-semibold">View Details</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal View */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white max-w-lg w-full p-6 rounded-lg relative shadow-lg"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="rounded-lg w-full mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{selectedProject.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{selectedProject.category}</p>
              <p className="text-gray-800 text-sm">{selectedProject.description}</p>
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-black"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>

      <IndustriesWeServe/>
    </section>
  );
};

export default ProjectGallery;
