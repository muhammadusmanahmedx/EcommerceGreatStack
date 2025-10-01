import React from "react";

const ImagesTextSection = () => {
  const handleNavigation = () => {
    console.log("Navigating to all products");
  };

  return (
    <section className="w-full py-8 md:py-12 lg:py-16 bg-gradient-to-b from-white to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-12 lg:space-y-16">

        {/* ---------- Row 1: Product Images + Brand Title ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-center">
          {/* Left Product - Always visible */}
          <div className="relative overflow-hidden rounded-2xl h-64 md:h-72 lg:h-80 shadow-xl">
            <img
              src="https://res.cloudinary.com/dshjm6hcx/image/upload/v1759065700/WhatsApp_Image_2025-09-28_at_6.19.46_PM_1_dysvuk.png"
              alt="Premium Perfume Collection"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Center Brand Title - Always visible */}
          <div className="relative flex items-center justify-center h-64 md:h-72 lg:h-80 rounded-2xl bg-gradient-to-br from-white via-amber-50/50 to-orange-50/30 shadow-lg">
            <div className="text-center space-y-2">
              <div className="mb-3 md:mb-4">
                <div className="w-12 md:w-16 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-2"></div>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold leading-tight">
                <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
                  Salsabeel
                </span>
              </h2>
              <h3 className="text-lg md:text-xl lg:text-2xl font-light text-gray-700 tracking-widest">
                SCENTS
              </h3>
              <div className="pt-3 md:pt-4">
                <div className="w-12 md:w-16 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto"></div>
              </div>
              <p className="text-xs text-gray-500 tracking-wider pt-2">LUXURY FRAGRANCES</p>
            </div>
          </div>

          {/* Right Product - Hidden on mobile and md, visible on lg and up */}
          <div className="hidden lg:block relative overflow-hidden rounded-2xl h-72 lg:h-80 shadow-xl">
            <img
              src="https://res.cloudinary.com/dshjm6hcx/image/upload/v1759066061/WhatsApp_Image_2025-09-28_at_6.19.47_PM_1_mjnuqc.png"
              alt="Exclusive Perfume Edition"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ---------- Row 2: Product Feature Section ---------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {/* Left - Large Product Image - Always visible */}
          <div className="relative overflow-hidden rounded-2xl h-64 md:h-80 lg:h-auto shadow-2xl">
            <div className="absolute inset-0"></div>
            <img
              src="https://res.cloudinary.com/dshjm6hcx/image/upload/v1759255867/Gemini_Generated_Image_5f5cgw5f5cgw5f5c_fjtwkv.png"
              alt="Featured Perfume Collection"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right - Information Cards */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Top Card - Best Selling - Always visible */}
            <div className="p-6 md:p-8 lg:p-10 rounded-2xl shadow-lg">
              <div className="space-y-3 md:space-y-4">
                <div className="inline-block">
                  <span className="inline-block bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-black text-xs font-semibold tracking-widest px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-lg border border-yellow-300/30 backdrop-blur-sm">
                    FEATURED COLLECTION
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                  BEST-SELLING
                </h2>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-orange-800/80">
                  MUST-HAVES
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed pt-2">
                  Discover fragrances inspired by nature's finest blends, curated to awaken your senses and leave a lasting impression.
                </p>
              </div>
            </div>

            {/* Bottom Card - Nature's Essence - Hidden on mobile, visible on lg and up */}
            <div className="hidden lg:block p-6 md:p-8 lg:p-10 bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50 rounded-2xl shadow-lg">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                      Nature's Essence
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      Evoking the rich scents of the natural world — earthy forests, blooming meadows, and timeless elegance captured in every bottle.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <div className="flex-1 h-1 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-400 rounded-full"></div>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImagesTextSection;