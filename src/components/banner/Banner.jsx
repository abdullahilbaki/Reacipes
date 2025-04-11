import React from "react";
import bannerBackground from "../../assets/banner.jpg";

const Banner = () => {
  const styles = {
    textSh: {
      textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
    },
  };

  return (
    <div>
      <div className="pt-44 sm:pt-32 px-4">
        <div
          className="container mx-auto h-full hero rounded-lg text-neutral-content text-center bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: `url(${bannerBackground})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-70 rounded-lg"></div>
          <div className="hero-content px-4 py-16 sm:py-20 md:py-28 lg:py-32 relative z-10">
            <div className="w-full max-w-[90%] sm:max-w-[80%] lg:max-w-[60%] mx-auto">
              <h1
                className="mb-4 sm:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold  text-white patrick-hand"
                style={styles.textSh}
              >
                Fresh Flavors, Happy Plates!{" "}
              </h1>
              <p
                className="mb-6 poppins text-white text-sm sm:text-base"
                style={styles.textSh}
              >
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
