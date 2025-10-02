import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-amber-50 via-white to-amber-50 my-16 rounded-xl overflow-hidden shadow-lg border border-amber-100">
      
      {/* Left Image Section with Background and Details */}
      <div className="relative w-full md:flex-1 flex items-center justify-center min-h-[400px] md:min-h-[550px] bg-gradient-to-bl from-amber-100 via-yellow-50 to-orange-100 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-4 left-4 w-20 h-20 bg-gradient-to-br from-yellow-200/40 to-amber-300/40 rounded-full blur-xl"></div>
          <div className="absolute bottom-8 right-8 w-32 h-32 bg-gradient-to-tr from-orange-200/30 to-yellow-200/30 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-8 w-16 h-16 bg-amber-200/50 rounded-lg rotate-45 blur-lg"></div>
        </div>
        
        {/* Floating Accent Shapes */}
        <div className="absolute top-12 right-12 w-6 h-6 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full shadow-lg opacity-60"></div>
        <div className="absolute bottom-16 left-12 w-4 h-4 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full shadow-lg opacity-70"></div>
        
        {/* Main Image */}
        <div className="relative z-10 transform hover:scale-105 transition-transform duration-500 w-full flex justify-center items-center py-8 md:py-0">
          <Image
            className="max-w-48 md:max-w-56 lg:max-w-64 drop-shadow-2xl"
            src="https://res.cloudinary.com/dshjm6hcx/image/upload/v1759049961/WhatsApp_Image_2025-09-27_at_11.01.40_PM_2_uboipc.png"
            width={300}
            height={300}
            alt="Premium Perfume Bottle"
          />
          {/* Glow Effect Behind Image */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 to-amber-400/20 rounded-full blur-3xl -z-10 scale-150"></div>
        </div>
      </div>

      {/* Center Text Section */}
      <div className="w-full md:flex-1 flex flex-col items-center justify-center text-center space-y-4 px-6 md:px-8 py-8 md:py-12 min-h-[350px] md:min-h-[550px]">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-gray-900 max-w-[350px] leading-tight">
          <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
            Elevate Your Fragrance
          </span>
          <br />
          <span className="text-gray-800">Experience</span>
        </h2>
        <p className="max-w-[380px] font-light text-gray-700 leading-relaxed">
          Discover our exclusive collection of luxury perfumes crafted to captivate your senses and leave an unforgettable impression
        </p>
        <button className="group flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 rounded-full text-black font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-yellow-300/30">
          Explore Collection
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Right Image Section with Background and Details */}
      <div className="relative w-full md:flex-1 flex items-center justify-center min-h-[400px] md:min-h-[550px] bg-gradient-to-bl from-amber-100 via-yellow-50 to-orange-100 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-8 right-4 w-24 h-24 bg-gradient-to-bl from-yellow-200/40 to-amber-300/40 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 left-8 w-28 h-28 bg-gradient-to-tl from-orange-200/30 to-yellow-200/30 rounded-full blur-2xl"></div>
          <div className="absolute top-1/3 right-8 w-12 h-12 bg-amber-200/50 rounded-lg rotate-12 blur-lg"></div>
        </div>
        
        {/* Floating Accent Shapes */}
        <div className="absolute top-16 left-12 w-5 h-5 bg-gradient-to-l from-yellow-400 to-amber-500 rounded-full shadow-lg opacity-60"></div>
        <div className="absolute bottom-20 right-16 w-3 h-3 bg-gradient-to-l from-orange-400 to-yellow-500 rounded-full shadow-lg opacity-70"></div>
        
        {/* Main Image - Desktop */}
        <div className="hidden md:flex relative z-10 transform hover:scale-105 transition-transform duration-500 w-full justify-end items-end h-full pb-0">
          <Image
            className="max-w-96 lg:max-w-[500px] xl:max-w-[550px] drop-shadow-2xl"
            src="https://res.cloudinary.com/dshjm6hcx/image/upload/v1759317175/27825401580_1_kn2mhu.png"
            width={550}
            height={550}
            alt="Luxury Fragrance Collection"
          />
          {/* Glow Effect Behind Image */}
          <div className="absolute inset-0 bg-gradient-to-l from-yellow-300/20 to-amber-400/20 rounded-full blur-3xl -z-10 scale-150"></div>
        </div>
        
        {/* Main Image - Mobile */}
        <div className="md:hidden relative z-10 transform hover:scale-105 transition-transform duration-500 w-full flex justify-center items-end h-full py-4">
          <Image
            className="w-full max-w-md h-auto object-contain drop-shadow-2xl"
            src="https://res.cloudinary.com/dshjm6hcx/image/upload/v1759317175/27825401580_1_kn2mhu.png"
            width={500}
            height={500}
            alt="Mobile Fragrance Display"
          />
          {/* Glow Effect Behind Image */}
          <div className="absolute inset-0 bg-gradient-to-l from-yellow-300/20 to-amber-400/20 rounded-full blur-3xl -z-10 scale-150"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;