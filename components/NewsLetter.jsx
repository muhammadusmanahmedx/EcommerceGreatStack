import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-white py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
        
        {/* Simple header */}
        <div className="space-y-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
            <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
              Salsabeel Scents
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-light">
            Experience the art of luxury fragrance. Each bottle tells a story of elegance, crafted with the finest ingredients for the modern connoisseur.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-12">
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Premium Quality</h3>
            <p className="text-gray-600 text-sm">Handcrafted with rare and exotic ingredients sourced globally</p>
          </div>

          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Long Lasting</h3>
            <p className="text-gray-600 text-sm">Signature scents that stay with you throughout the day</p>
          </div>

          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Luxury Packaging</h3>
            <p className="text-gray-600 text-sm">Elegant bottles designed to complement your style</p>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-12">
          <p className="text-gray-700 mb-6">Discover your signature scent today</p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
