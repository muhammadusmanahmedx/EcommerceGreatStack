import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";

const HeaderSlider = () => {
  const { router } = useAppContext();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] bg-gradient-to-br from-amber-50 via-rose-100 to-pink-200 overflow-hidden mt-2 sm:mt-4 md:mt-6 rounded-lg sm:rounded-xl">
      {/* Main Content */}
      <div className="relative h-full w-full">
        
        {/* MOBILE LAYOUT (xs to sm) - Full Width Stack */}
        <div className="sm:hidden w-full h-full flex flex-col">
          {/* Top Section: Main text and decorative image - FIXED HEIGHT */}
          <div className="w-full h-auto flex items-center justify-center pt-4 px-4 pb-2">
            <div className="w-full text-center">
              <h1 className="text-lg font-light text-gray-800 tracking-wide leading-tight font-playfair">
                AWAKEN YOUR
                <br />
                <span className="relative inline-flex items-center gap-1 font-medium text-rose-900">
                  SENSES
                  <span className="inline-flex items-center rounded-full overflow-hidden border border-gray-300 align-middle ml-1">
                    <Image
                      src="https://res.cloudinary.com/dshjm6hcx/image/upload/v1759053051/still-life-cosmetic-products-min_veptac.jpg"
                      alt="Decorative"
                      width={40}
                      height={25}
                      className="h-[0.7em] w-[1.2em] object-cover"
                    />
                  </span>
                  with
                </span>
                <br />
                <span className="text-lg font-light text-gray-800 tracking-wide leading-tight font-playfair">
                  SalSabeel Scents
                </span>
              </h1>
              <p className="text-xs text-gray-600 mt-2 font-light tracking-wide">
                Get 15% off on Your first orders
              </p>
            </div>
          </div>
          
          {/* Center: Bottle Image - FLEXIBLE HEIGHT */}
          <div className="w-full flex-1 flex items-center justify-center relative min-h-0">
            <div
              className={`transition-all duration-1000 ease-out ${isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-full opacity-0'
                }`}
            >
              <Image
                src="https://res.cloudinary.com/dshjm6hcx/image/upload/v1759046755/Group_2_he7cyc.png"
                alt="LOEWE Esencia Perfume Bottle"
                width={200}
                height={260}
                className="w-28 h-auto object-contain filter brightness-110 max-h-full"
                priority
              />
            </div>
          </div>
          
          {/* Bottom: Shop Now Button - FIXED HEIGHT */}
          <div className="w-full h-auto flex justify-center py-4 px-4">
            <button
              onClick={() => router.push('/all-products')}
              className="w-3/4 py-3 bg-gradient-to-r from-rose-800 to-rose-900 text-white font-medium text-sm rounded-none border border-rose-900 hover:bg-gradient-to-r hover:from-rose-700 hover:to-rose-800 transition-all duration-300 transform hover:-translate-y-1 tracking-wide font-cinzel active:scale-95"
            >
              Shop Now
            </button>
          </div>
        </div>

        {/* TABLET LAYOUT (sm to md) - 50/50 Split with Right Text & Badge */}
        <div className="hidden sm:block md:hidden w-full h-full">
          <div className="w-full h-full flex relative">
            {/* Badge - visible on tablet */}
            <div className="absolute top-3 right-3 z-[100]">
              <div className="w-16 h-16 sm:w-18 sm:h-18 relative">
                <div
                  className="absolute inset-0 animate-spin"
                  style={{ animationDuration: "20s" }}
                >
                  <svg viewBox="0 0 180 180" className="w-full h-full">
                    <defs>
                      <path
                        id="circle-path"
                        d="M 90, 90 m -65, 0 a 65,65 0 1,1 130,0 a 65,65 0 1,1 -130,0"
                      />
                    </defs>
                    <text className="text-[8px] font-light fill-black font-cinzel tracking-[0.15em]">
                      <textPath href="#circle-path" startOffset="0%">
                        15% OFF • FREE SHIPPING • PREMIUM •
                      </textPath>
                    </text>
                  </svg>
                </div>

                <div className="absolute inset-3 rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dshjm6hcx/image/upload/v1759049810/WhatsApp_Image_2025-09-27_at_11.01.40_PM_2_za5ufu.png"
                    alt="Perfume Icon"
                    width={40}
                    height={40}
                    className="w-6 h-6 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Left Half: Text Section - 50% WIDTH */}
            <div className="w-1/2 h-full flex items-center justify-center px-4">
              <div className="text-left max-w-full">
                <h1 className="text-xl sm:text-2xl font-light text-gray-800 tracking-wide leading-tight font-playfair">
                  AWAKEN YOUR
                  <br />
                  <span className="relative inline-flex items-center gap-2 font-medium text-rose-900">
                    SENSES
                    <span className="inline-flex items-center rounded-full overflow-hidden border border-gray-300 align-middle">
                      <Image
                        src="https://res.cloudinary.com/dshjm6hcx/image/upload/v1759053051/still-life-cosmetic-products-min_veptac.jpg"
                        alt="Decorative"
                        width={50}
                        height={35}
                        className="h-[0.8em] w-[1.3em] object-cover"
                      />
                    </span>
                    with
                  </span>
                  <br />
                  <span className="text-xl sm:text-2xl font-light text-gray-800 tracking-wide leading-tight font-playfair">
                    SalSabeel Scents
                  </span>
                </h1>
                <p className="text-sm text-gray-600 mt-4 font-light tracking-wide">
                  Get 15% off on Your first orders
                </p>
              </div>
            </div>

            {/* Right Half: Bottle Image & Button - 50% WIDTH */}
            <div className="w-1/2 h-full relative flex flex-col items-center justify-center">
              {/* Right Text - positioned at top right of this section */}
              <div className="absolute top-6 right-4 text-right z-40 max-w-[80%]">
                <p className="text-sm font-regular text-black tracking-wide font-cinzel uppercase leading-tight">
                  Luxury Fragrances
                </p>
                <p className="text-xs font-light text-gray-600 tracking-wide font-playfair italic leading-snug mt-1">
                  where every drop is a portal to a hidden world.
                </p>
              </div>

              {/* Bottle Image */}
              <div
                className={`flex-1 flex items-center justify-center transition-all duration-1000 ease-out ${isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-full opacity-0'
                  }`}
              >
                <Image
                  src="https://res.cloudinary.com/dshjm6hcx/image/upload/v1759046755/Group_2_he7cyc.png"
                  alt="LOEWE Esencia Perfume Bottle"
                  width={300}
                  height={390}
                  className="w-40 sm:w-48 h-auto object-contain filter brightness-110"
                  priority
                />
              </div>
              
              {/* Shop Button */}
              <div className="pb-6 flex justify-center">
                <button
                  onClick={() => router.push('/all-products')}
                  className="px-8 py-2 bg-gradient-to-r from-rose-800 to-rose-900 text-white font-medium text-sm rounded-none border border-rose-900 hover:bg-gradient-to-r hover:from-rose-700 hover:to-rose-800 transition-all duration-300 transform hover:-translate-y-1 tracking-wide font-cinzel active:scale-95"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP+ LAYOUT (md and above) - Full layout with all elements */}
        <div className="hidden md:block w-full h-full relative">
          {/* Left Text (Awaken Your Senses) - Takes available width */}
          <div className="absolute top-1/2 left-4 md:left-6 lg:left-8 transform -translate-y-1/2 text-left max-w-[45%] lg:max-w-[40%] z-20">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-gray-800 tracking-wide leading-tight font-playfair">
              AWAKEN YOUR
              <br />
              <span className="relative inline-flex items-center gap-2 font-medium text-rose-900">
                SENSES
                <span className="inline-flex items-center rounded-full overflow-hidden border border-gray-300 align-middle">
                  <Image
                    src="https://res.cloudinary.com/dshjm6hcx/image/upload/v1759053051/still-life-cosmetic-products-min_veptac.jpg"
                    alt="Decorative"
                    width={60}
                    height={40}
                    className="h-[0.8em] w-[1.5em] object-cover"
                  />
                </span>
                <span className="relative inline-flex items-center gap-2 font-medium text-rose-900">
                  with
                </span>
              </span>
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-gray-800 tracking-wide leading-tight font-playfair">
                SalSabeel Scents
              </span>
            </h1>
            <p className="text-sm md:text-base text-gray-600 mt-4 font-light tracking-wide">
              Get 15% off on Your first orders
            </p>
          </div>

          {/* Rotating Badge - Hidden on md, visible on lg+ */}
          <div className="hidden lg:block absolute top-4 right-4 lg:right-6 z-[100]">
            <div className="w-28 h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 relative">
              <div
                className="absolute inset-0 animate-spin"
                style={{ animationDuration: "20s" }}
              >
                <svg viewBox="0 0 180 180" className="w-full h-full">
                  <defs>
                    <path
                      id="circle-path"
                      d="M 90, 90 m -65, 0 a 65,65 0 1,1 130,0 a 65,65 0 1,1 -130,0"
                    />
                  </defs>
                  <text className="text-[13px] lg:text-[15px] xl:text-[17px] font-light fill-black font-cinzel tracking-[0.2em]">
                    <textPath href="#circle-path" startOffset="0%">
                      15% OFF • FREE SHIPPING • PREMIUM •
                    </textPath>
                  </text>
                </svg>
              </div>

              <div className="absolute inset-6 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dshjm6hcx/image/upload/v1759049810/WhatsApp_Image_2025-09-27_at_11.01.40_PM_2_za5ufu.png"
                  alt="Perfume Icon"
                  width={70}
                  height={70}
                  className="w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Luxury Fragrances text - Takes available right space */}
          <div className="absolute bottom-16 md:bottom-20 lg:bottom-24 right-4 md:right-6 lg:right-8 z-40 text-right max-w-[45%] lg:max-w-[40%]">
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-regular text-black tracking-wide lg:tracking-widest font-cinzel uppercase leading-tight">
              Luxury Fragrances
            </p>
            <p className="text-sm md:text-base lg:text-lg font-light text-gray-600 tracking-wide font-playfair italic leading-snug mt-1">
              where every drop is a <br className="hidden md:block" />
              portal to a hidden world.
            </p>
          </div>

          {/* Shop Now Button - Full width centered */}
          <div className="absolute bottom-2 md:bottom-4 left-0 right-0 flex items-center justify-center z-50">
            <button
              onClick={() => router.push('/all-products')}
              className="px-8 md:px-12 lg:px-16 py-2 md:py-3 bg-gradient-to-r from-rose-800 to-rose-900 text-white font-medium text-sm md:text-base rounded-none border border-rose-900 hover:bg-gradient-to-r hover:from-rose-700 hover:to-rose-800 transition-all duration-300 transform hover:-translate-y-1 tracking-wide font-cinzel active:scale-95"
            >
              Shop Now
            </button>
          </div>

          {/* Bottle Image - Centered in available space */}
          <div
            className={`absolute bottom-12 md:bottom-16 left-1/2 transform -translate-x-1/2 z-30 transition-all duration-1000 ease-out ${isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-full opacity-0'
              }`}
          >
            <div className="relative">
              <Image
                src="https://res.cloudinary.com/dshjm6hcx/image/upload/v1759046755/Group_2_he7cyc.png"
                alt="LOEWE Esencia Perfume Bottle"
                width={400}
                height={520}
                className="w-56 md:w-64 lg:w-72 xl:w-80 h-auto object-contain filter brightness-110"
                priority
              />

              {/* Subtle glow effect behind bottle */}
              <div className="absolute inset-0 bg-gradient-to-t from-rose-200/30 to-transparent rounded-full blur-xl -z-10"></div>
            </div>
          </div>

          {/* Luxury Decorative Elements - Scale with screen size */}
          <div className="absolute top-8 md:top-12 left-8 md:left-12 w-4 h-4 md:w-6 md:h-6 bg-rose-300/40 rounded-full animate-pulse"></div>
          <div className="absolute top-24 md:top-32 right-12 md:right-16 w-3 h-3 md:w-4 md:h-4 bg-amber-200/50 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-24 md:bottom-32 left-8 md:left-12 w-4 h-4 md:w-5 md:h-5 bg-pink-200/40 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-20 md:top-24 right-24 md:right-32 w-2 h-2 md:w-3 md:h-3 bg-rose-200/60 rounded-full animate-pulse delay-700"></div>
        </div>

        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-rose-100/10 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default HeaderSlider;