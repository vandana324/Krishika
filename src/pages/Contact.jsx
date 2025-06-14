
  import Footer from "./Footer"
  import React from "react";

const Contact = () => {
  return (
 
     <section id="contact" className="bg-white py-20 px-6">
       <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto">
         {/* Left side text */}
         <div className="lg:w-1/2 mb-10 lg:mb-0">
           <h2 className="text-4xl font-bold mb-4">
             You Will Grow, You Will Succeed. We Promise That
           </h2>
           <p className="text-gray-600 mb-8">
             Pellentesque arcu facilisis nunc mi proin. Dignissim mattis in
             lectus tincidunt tincidunt ultrices. Diam convallis morbi
             pellentesque adipiscing.
           </p>
           <div className="grid grid-cols-2 gap-6 text-gray-800">
             <div>
               <p className="font-semibold">Call for inquiry</p>
               <p>+9999999</p>
             </div>
             <div>
               <p className="font-semibold">Send us email</p>
               <p>abc@gmail.com</p>
             </div>
             <div>
               <p className="font-semibold">Opening hours</p>
               <p>Mon - Fri: 10AM - 10PM</p>
             </div>
             <div>
               <p className="font-semibold">Office</p>
               <p>Jaipur, Rajasthan</p>
             </div>
           </div>
         </div>

        {/* Right side form */}
<div className="lg:w-1/2 bg-white rounded-lg p-8 shadow-md w-full max-w-lg">
  <h3 className="text-xl font-bold mb-2 text-indigo-800">Contact Info</h3>
  <p className="text-sm text-gray-600 mb-6">
    Fill in your details and we’ll get back to you.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
      <input
        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
        type="text"
        placeholder="Your first name"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
      <input
        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
        type="text"
        placeholder="Your last name"
      />
    </div>
  </div>

  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
    <input
      className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
      type="email"
      placeholder="Your email"
    />
  </div>

  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
    <textarea
      className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
      rows="4"
      placeholder="Your message..."
    ></textarea>
  </div>

  <button className="bg-indigo-600 text-white py-2 px-6 rounded hover:bg-indigo-500 transition-all duration-200">
    Send Message
  </button>
</div>
</div>
     </section>
  );
};

export default Contact;
