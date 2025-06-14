import React from "react";
import about1 from "../assets/about1.png";

const About = () => {
  return (
    
     <section id="about" className="w-full bg-white">
      
      
       <div className="w-full py-25 px-6 md:px-20">
         <div className="bg-gray-200 border-white rounded-lg p-6 md:p-10">
           <div className="grid md:grid-cols-3 gap-6 items-start">
            
         
             <div>
               <h3 className="text-red-600 font-bold text-sm mb-2">OUR VALUE</h3>
               <h2 className="text-2xl md:text-3xl font-bold mb-4">
                 Professional welder services ready to collaborate
               </h2>
               <p className="text-gray-700 mb-8 max-w-sm">
                 We provide expert welding services with a commitment to quality,
                 precision, and seamless collaboration on every project.
               </p>
             </div>

       
             <div className="md:col-span-2 bg-[#0a0a4a] text-white rounded-md overflow-hidden grid md:grid-cols-2">
             
               <div className="w-full flex justify-center">
                 <div className="bg-[#0a0a4a] text-white rounded-lg p-4 md:p-6 w-[300px]">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                  
                     <div>
                       <h3 className="text-lg font-semibold mb-2">Our Vision</h3>
                       <p className="text-sm mb-4">
                         To lead in quality welding solutions with innovation, reliability,
                         and customer satisfaction at our core.
                       </p>
                       <button className="bg-yellow-400 text-black text-sm font-bold px-3 py-2 rounded hover:bg-yellow-500">
                         LEARN MORE
                       </button>
                     </div>

                    
                     <div>
                       <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
                       <p className="text-sm mb-4">
                         Our mission is to deliver precise, reliable welding solutions with
                         a focus on quality, safety, and client satisfaction.
                       </p>
                       <button className="bg-yellow-400 text-black text-sm font-bold px-3 py-2 rounded hover:bg-yellow-500">
                         LEARN MORE
                       </button>
                     </div>

                  </div>
                </div>
              </div>
            </div>

           </div>
         </div>
       </div>
         


       
       <div
         className="relative w-full bg-cover bg-center text-white py-20 px-6 md:px-20"
         style={{ backgroundImage: `url(${about1})` }}
       >
         
         <div className="absolute inset-0 bg-[#0a0a4a] opacity-70 z-0"></div>

  
       <div className="relative z-10 text-center">
         <h2 className="text-3xl md:text-4xl font-bold mb-4">
           Schedule service today and let us <br /> take care of all your needs.
         </h2>
         <p className="max-w-2xl mx-auto mb-6 text-lg">
           We provide expert welding services with a commitment to quality,
           precision, and seamless collaboration on every project.
         </p>
         <button className="bg-yellow-400 text-black font-bold px-6 py-3 rounded hover:bg-yellow-500">
           BOOK AN APPOINTMENT
         </button>
       </div>
     </div>

       {/* Section 3 - Stats */}
       <div className="bg-yellow-400 text-black py-10 px-6 md:px-20 grid grid-cols-2 md:grid-cols-4 text-center gap-6">
         <div>
           <h3 className="text-3xl font-bold">10K+</h3>
           <p className="font-medium">HAPPY CLIENTS</p>
         </div>
         <div>
           <h3 className="text-3xl font-bold">25K+</h3>
           <p className="font-medium">PROJECT DONE</p>
         </div>
         <div>
           <h3 className="text-3xl font-bold">521+</h3>
           <p className="font-medium">PROFESSIONAL EXPERT</p>
         </div>
         <div>
           <h3 className="text-3xl font-bold">4.6</h3>
           <p className="font-medium">CLIENT RATING</p>
         </div>
       </div>
    </section>
  );
};

export default About;
