import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const products = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1759258161/Gemini_Generated_Image_9e1n5a9e1n5a9e1n_rabkpa.png",
    width: 400,
    height: 400,
    title: "",
    description: "",
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1759071730/ugobyju6wruikzfursna.png",
    width: 400,
    height: 400,
    title: "",
    description: "",
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1759071552/u5tvf6qylybrj4ruwgtl.png",
    width: 400,
    height: 400,
    title: "",
    description: "",
  },
];

const FeaturedProduct = () => {
  return (
    <div className="mt-14">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-medium">Featured Products</p>
        <div className="w-28 h-0.5 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 mt-2"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 mt-12 md:px-14 px-4">
        {products.map(({ id, image, width, height, title, description }) => (
          <div key={id} className="relative group">
            <Image
              src={image}
              alt={title}
              width={width}
              height={height}
              className="group-hover:brightness-75 transition duration-300 w-full h-auto object-cover"
            />
            
            {/* Ribbon Badge - Top Right */}
            <div className="absolute top-4 right-0 z-10">
              <div className="relative">
                <div className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-black px-4 py-2 text-xs font-bold shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300 border border-yellow-300/30 backdrop-blur-sm">
                  {id === 1 && "MOST SOLD"}
                  {id === 2 && "MOST LIKED"}
                  {id === 3 && "5 STAR RATING"}
                  <div className="absolute top-full left-0 w-0 h-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-amber-700"></div>
                </div>
              </div>
            </div>
            
            <div className="group-hover:-translate-y-4 transition duration-300 absolute bottom-8 left-8 text-white space-y-2">
              <p className="font-medium text-xl lg:text-2xl">{title}</p>
              <p className="text-sm lg:text-base leading-5 max-w-60">
                {description}
              </p>
              {/* <button className="flex items-center gap-1.5 bg-orange-600 px-4 py-2 rounded">
                Buy now <Image className="h-3 w-3" src={assets.redirect_icon} alt="Redirect Icon" />
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
