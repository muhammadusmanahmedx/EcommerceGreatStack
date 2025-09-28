import React from "react";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";

const ImagesTextSection = () => {
  const { router } = useAppContext();

  return (
    <section className="w-full py-8 md:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* ---------- Row 1: Images + Center Text ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Image */}
          <div className="relative overflow-hidden rounded-lg h-64">
            <Image
              src="https://res.cloudinary.com/dshjm6hcx/image/upload/v1759065700/WhatsApp_Image_2025-09-28_at_6.19.46_PM_1_dysvuk.png"
              alt="Perfume Esencia Left"
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Center Text */}
         <div className="relative flex items-center justify-center h-64 rounded-lg bg-white">
  <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-semibold text-center leading-snug tracking-wide">
    <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
      Salsabeel <br /> Scents
    </span>
  </h2>
</div>


          {/* Right Image */}
          <div className="relative overflow-hidden rounded-lg h-64">
            <Image
              src="https://res.cloudinary.com/dshjm6hcx/image/upload/v1759066061/WhatsApp_Image_2025-09-28_at_6.19.47_PM_1_mjnuqc.png"
              alt="Perfume Esencia Right"
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* ---------- Row 2: Mix text + image ---------- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Text */}
          <div className="flex flex-col justify-center p-6 md:p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              BEST-SELLING
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 mb-4">
              MUST-HAVES
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
              Discover fragrances inspired by nature’s finest blends, curated to
              awaken your senses.
            </p>
            <button
              onClick={() => router.push("/all-products")}
              className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium text-sm md:text-base transition-colors duration-200"
            >
              SEE NEW ARRIVALS
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Center Image */}
          <div className="relative overflow-hidden rounded-lg h-64">
            <Image
              src="https://res.cloudinary.com/dshjm6hcx/image/upload/v1759066057/WhatsApp_Image_2025-09-28_at_6.19.48_PM_1_1_s60emm.png"
              alt="Model Showcase"
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Right Text */}
          <div className="flex flex-col justify-center p-6 md:p-8 bg-gradient-to-br from-gray-50 to-slate-100 rounded-lg text-center">
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              Evoking the rich scents of the natural world — earthy forests,
              blooming meadows, and timeless elegance.
            </p>
            <div className="flex justify-center space-x-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImagesTextSection;
