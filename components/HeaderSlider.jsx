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
    <div className="relative w-full h-[450px] sm:h-[300px] md:h-[360px] lg:h-[400px] xl:h-[450px] bg-gradient-to-br from-black via-gray-900 to-amber-900 overflow-hidden mt-2 sm:mt-4 md:mt-6 rounded-lg sm:rounded-xl">
      {/* Main Content */}
      <div className="relative h-full w-full">
        
        {/* MOBILE LAYOUT (xs to sm) - Improved Responsiveness */}
        <div className="sm:hidden w-full h-full relative">
          {/* Left-aligned Text Section - Larger Text */}
          <div className="absolute top-6 left-4 right-4 z-20">
            <h1 className="text-3xl font-light text-amber-200 tracking-wide leading-tight font-playfair text-center">
              AWAKEN YOUR
              <br />
              <span className="relative inline-flex items-center gap-1 font-medium text-amber-400">
                SENSES
                <span className="inline-flex items-center rounded-full overflow-hidden border border-amber-400 align-middle ml-1">
                  <Image
                    src="https://res.cloudinary.com/dshjm6hcx/image/upload/v1759053051/still-life-cosmetic-products-min_veptac.jpg"
                    alt="Decorative"
                    width={50}
                    height={35}
                    className="h-[0.7em] w-[1.2em] object-cover"
                  />
                </span>
                with
              </span>
              <br />
              <span className="text-3xl font-light text-amber-200 tracking-wide leading-tight font-playfair">
                SalSabeel Scents
              </span>
            </h1>
            <p className="text-lg text-amber-300 mt-4 font-light tracking-wide text-center">
              Get 15% off on Your first orders
            </p>
          </div>
          
          {/* Center: Larger Bottle Image */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30">
            <div
              className={`transition-all duration-1000 ease-out ${isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-full opacity-0'
                }`}
            >
              <Image
                src="https://res.cloudinary.com/dshjm6hcx/image/upload/v1759046755/Group_2_he7cyc.png"
                alt="LOEWE Esencia Perfume Bottle"
                width={280}
                height={360}
                className="w-40 h-auto object-contain filter brightness-110 drop-shadow-xl"
                priority
              />
            </div>
          </div>
          
          {/* Bottom: Shop Now Button */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center px-4 z-40">
            <button
              onClick={() => router.push('/all-products')}
              className="w-3/4 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-medium text-sm rounded-none border border-amber-500 hover:bg-gradient-to-r hover:from-amber-400 hover:to-amber-500 transition-all duration-300 transform hover:-translate-y-1 tracking-wide font-cinzel active:scale-95 shadow-lg"
            >
              Shop Now
            </button>
          </div>

          {/* Decorative Elements for Mobile */}
          <div className="absolute top-20 left-8 w-3 h-3 bg-amber-400/40 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-8 w-2 h-2 bg-amber-500/50 rounded-full animate-pulse delay-300"></div>
        </div>

        {/* TABLET LAYOUT (sm to md) - 50/50 Split with Right Text moved to Left */}
        <div className="hidden sm:block md:hidden w-full h-full">
          <div className="w-full h-full flex relative">
            {/* Left Half: Text Section - 50% WIDTH */}
            <div className="w-1/2 h-full flex flex-col items-start justify-center px-4 space-y-6">
              {/* Main Title */}
              <div className="text-left max-w-full">
                <h1 className="text-xl sm:text-2xl font-light text-amber-200 tracking-wide leading-tight font-playfair">
                  AWAKEN YOUR
                 
                  <span className="relative inline-flex items-center gap-2 font-medium text-amber-400">
                    SENSES
                    <span className="inline-flex items-center rounded-full overflow-hidden border border-amber-400 align-middle">
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
                  <span className="text-xl sm:text-2xl font-light text-amber-200 tracking-wide leading-tight font-playfair">
                    SalSabeel Scents
                  </span>
                </h1>
                <p className="text-sm text-amber-300 mt-4 font-light tracking-wide">
                  Get 15% off on Your first orders
                </p>
              </div>

              {/* Right Text moved to left section */}
              <div className="text-left max-w-full">
                <p className="text-base font-regular text-amber-400 tracking-wide font-cinzel uppercase leading-tight">
                  Luxury Fragrances
                </p>
                <p className="text-sm font-light text-amber-300 tracking-wide font-playfair italic leading-snug mt-1">
                  where every drop is a portal to a hidden world.
                </p>
              </div>
            </div>

            {/* Right Half: Bottle Image & Button - 50% WIDTH */}
            <div className="w-1/2 h-full relative flex flex-col items-center justify-center">
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
                  className="w-40 sm:w-48 h-auto object-contain filter brightness-110 drop-shadow-xl"
                  priority
                />
              </div>
              
              {/* Shop Button */}
              <div className="pb-6 flex justify-center">
                <button
                  onClick={() => router.push('/all-products')}
                  className="px-8 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-medium text-sm rounded-none border border-amber-500 hover:bg-gradient-to-r hover:from-amber-400 hover:to-amber-500 transition-all duration-300 transform hover:-translate-y-1 tracking-wide font-cinzel active:scale-95 shadow-lg"
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
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-amber-200 tracking-wide leading-tight font-playfair">
              AWAKEN YOUR
              <br />
              <span className="relative inline-flex items-center gap-2 font-medium text-amber-400">
                SENSES
                <span className="inline-flex items-center rounded-full overflow-hidden border border-amber-400 align-middle">
                  <Image
                    src="https://res.cloudinary.com/dshjm6hcx/image/upload/v1759053051/still-life-cosmetic-products-min_veptac.jpg"
                    alt="Decorative"
                    width={60}
                    height={40}
                    className="h-[0.8em] w-[1.5em] object-cover"
                  />
                </span>
                <span className="relative inline-flex items-center gap-2 font-medium text-amber-400">
                  with
                </span>
              </span>
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-amber-200 tracking-wide leading-tight font-playfair">
                SalSabeel Scents
              </span>
            </h1>
            <p className="text-sm md:text-base text-amber-300 mt-4 font-light tracking-wide">
              Get 15% off on Your first orders
            </p>
          </div>

          {/* Rotating Badge - Hidden on md, visible on lg+ */}
          <div className="hidden lg:block absolute top-6 right-4 lg:right-6 z-[100]">
            <div className="w-28 h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 relative">
              {/* Rotating text circle */}
              <div
                className="absolute inset-0 animate-spin"
                style={{ animationDuration: "20s" }}
              >
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    {/* Increased radius: 65 → 75 to push text away from center */}
                    <path
                      id="circle-path"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                    />
                  </defs>
                  <text className="text-[13px] lg:text-[15px] xl:text-[17px] font-extralight fill-amber-400 font-cinzel tracking-[0.25em]">
                    <textPath href="#circle-path" startOffset="0%">
                      15% OFF • FREE SHIPPING • PREMIUM •
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Inner image */}
              <div className="absolute inset-6 rounded-full flex items-center justify-center overflow-hidden bg-amber-500/20">
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
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-regular text-amber-400 tracking-wide lg:tracking-widest font-cinzel uppercase leading-tight">
              Luxury Fragrances
            </p>
            <p className="text-sm md:text-base hidden md:block lg:text-lg font-light text-amber-300 tracking-wide font-playfair italic leading-snug mt-1">
              where every drop is a
              portal to a hidden world.
            </p>
          </div>

          {/* Shop Now Button - Full width centered */}
          <div className="absolute bottom-2 md:bottom-4 left-0 right-0 flex items-center justify-center z-50">
            <button
              onClick={() => router.push('/all-products')}
              className="px-8 md:px-12 lg:px-16 py-2 md:py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-medium text-sm md:text-base rounded-none border border-amber-500 hover:bg-gradient-to-r hover:from-amber-400 hover:to-amber-500 transition-all duration-300 transform hover:-translate-y-1 tracking-wide font-cinzel active:scale-95 shadow-xl"
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
                className="w-56 md:w-64 lg:w-72 xl:w-80 h-auto object-contain filter brightness-110 drop-shadow-2xl"
                priority
              />

              {/* Subtle glow effect behind bottle */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent rounded-full blur-xl -z-10"></div>
            </div>
          </div>

          {/* Luxury Decorative Elements - Scale with screen size */}
          <div className="absolute top-8 md:top-12 left-8 md:left-12 w-4 h-4 md:w-6 md:h-6 bg-amber-400/40 rounded-full animate-pulse"></div>
          <div className="absolute top-24 md:top-32 right-12 md:right-16 w-3 h-3 md:w-4 md:h-4 bg-amber-500/50 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-24 md:bottom-32 left-8 md:left-12 w-4 h-4 md:w-5 md:h-5 bg-amber-300/40 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-20 md:top-24 right-24 md:right-32 w-2 h-2 md:w-3 md:h-3 bg-amber-400/60 rounded-full animate-pulse delay-700"></div>
        </div>

        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-400/5 to-amber-500/10 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default HeaderSlider;