import React from "react";
import { FaArrowRight } from "react-icons/fa";

const blogPosts = [
  {
    title: "How to Choose the Right Railings",
    summary:
      "Learn what to consider when selecting railings for safety, style, and durability in your project.",
    date: "June 1, 2025",
    link: "#",
  },
  {
    title: "Latest Trends in Metal Fabrication",
    summary:
      "Explore the newest innovations and design aesthetics shaping the world of metal fabrication.",
    date: "May 20, 2025",
    link: "#",
  },
  {
    title: "Benefits of Aluminum Windows",
    summary:
      "Understand the energy efficiency, durability, and sleek appeal of modern aluminum windows.",
    date: "May 5, 2025",
    link: "#",
  },
];

const BlogKnowledgeCenter = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Blog & Knowledge Center
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Stay informed with expert insights, industry trends, and helpful tips to make the best decisions for your projects.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-gray-50 border rounded-lg p-6 text-left shadow hover:shadow-md transition duration-300">
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-700 mb-4 text-sm">{post.summary}</p>
              <a
                href={post.link}
                className="inline-flex items-center text-indigo-600 font-medium hover:underline text-sm"
              >
                Read More <FaArrowRight className="ml-2" size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogKnowledgeCenter;
