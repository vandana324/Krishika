// src/App.js
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
 import Services from "./pages/Services";
 import WhatWeOffer from "./pages/WhatWeOffer";
 import Contact from "./pages/Contact";
 import Footer from "./pages/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="services"><Services /></div>
      <div id="contact"><Contact /></div> 
      <Footer />
    </>
  );
}
