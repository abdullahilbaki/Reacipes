import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="pt-44 sm:pt-32 px-4">
        <div className="container mx-auto h-full hero rounded-lg text-neutral-content text-center bg-cover sm:bg-contain bannerStyle relative">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          <div className="hero-content px-4 py-16 sm:py-20 md:py-28 lg:py-32 relative z-10">
            <div className="w-full max-w-[90%] sm:max-w-[80%] lg:max-w-[60%] mx-auto">
              <h1 className="mb-4 sm:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold  text-white text-shadow-md patrick-hand">
                Fresh Flavors, Happy Plates!{" "}
              </h1>
              <p className="mb-6 poppins text-gray-300 text-sm sm:text-base">
                Quick, tasty recipes to brighten your day and bring smiles to
                the table.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
