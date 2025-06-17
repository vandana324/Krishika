import React from "react";
import { PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingCTAButton = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918619965763"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 text-sm font-medium"
      >
        <FaWhatsapp size={18} /> WhatsApp Us
      </a>

      {/* Call Button */}
      <a
        href="tel:+918619965763"
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 text-sm font-medium"
      >
        <PhoneCall size={18} /> Call Now
      </a>
    </div>
  );
};

export default FloatingCTAButton;
