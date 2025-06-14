// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full p-4 fixed top-0 left-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-black font-bold text-xl">KRISHIKA</h1>
        
        
       <ul className="flex gap-6 items-center text-black font-medium">
  <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
  <li><a href="#about" className="hover:text-yellow-400">About</a></li>
  <li><a href="#services" className="hover:text-yellow-400">Services</a></li>
  <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
  <li>
    <a href="#contact">
      <button className="ml-4 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 font-semibold transition duration-200">
        Need Help
      </button>
    </a>
  </li>
</ul>
      </div>
    </nav>
  );
}
