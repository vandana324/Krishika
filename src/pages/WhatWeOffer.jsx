import React from 'react';
import {
  Wrench,
  Construction,
  Factory,
  HardHat,
  Settings,
  User
} from 'lucide-react';

const services = [
  { icon: <Wrench size={40} />, title: 'Maritime' },
  { icon: <Construction size={40} />, title: 'Construction' },
  { icon: <Factory size={40} />, title: 'Industrial' },
  { icon: <HardHat size={40} />, title: 'Safety' },
  { icon: <Settings size={40} />, title: 'Customization' },
  { icon: <User size={40} />, title: 'Support' }
];

const WhatWeOffer = () => {
  return (
   
     <section id="offer" className="px-6 py-20 md:px-16 bg-white">
       <h4 className="text-red-600 font-bold mb-2 uppercase text-center">What We Offer</h4>
       <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
         Partner with Krishika for Stronger Connections.
       </h2>
       <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
         Partner with Krishika for stronger connections, expert craftsmanship, and reliable welding solutions built to last.
       </p>

       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
         {services.map((service, idx) => (
           <div
             key={idx}
             className="bg-blue-950 text-white flex flex-col items-center p-10 text-center min-h-[250px] rounded-xl shadow"
           >
             <div className="mb-4 text-yellow-400">{service.icon}</div>
             <h3 className="text-lg font-semibold text-yellow-400">{service.title}</h3>
             <p className="text-sm mt-2">
               Enim hac odio augue tempor primis vestibulum leo aptent cubilia.
             </p>
           </div>
         ))}
       </div>
     </section>
  );
};

export default WhatWeOffer;
