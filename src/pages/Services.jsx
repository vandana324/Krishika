import React from 'react';
import welding from '../assets/welding.png';
import WhatWeOffer from './WhatWeOffer';

const Services = () => {
  return (
   
     <section id="services" className="px-6 py-16 bg-white">
       <div className="flex flex-col md:flex-row items-center justify-between">
         <div className="md:w-1/3">
           <img src={welding} alt="Welding" className="w-full h-auto object-contain" />
         </div>
         <div className="md:w-1/2 mt-10 md:mt-0 md:pl-12">
           <h4 className="text-red-600 font-semibold mb-2 uppercase">Our Services</h4>
           <h2 className="text-3xl md:text-4xl font-bold mb-4">
             We are committed to <br /> providing quality service to <br /> all of our clients.
           </h2>
           <p className="text-gray-700 mb-6">
             Et lobortis consectetur sociosqu elit tortor natoque faucibus <br />
             pellentesque rhoncus pede sem <br />
             Lacinia quisque velit placerat sapien parturient <br />
             Litora ultricies elit tortor habitant nibh odio dictumst dis.
           </p>
           <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-6">
             DISCOVER MORE
           </button>
         </div>
       </div>

      
       <WhatWeOffer />
     </section>
  );
};

export default Services;
