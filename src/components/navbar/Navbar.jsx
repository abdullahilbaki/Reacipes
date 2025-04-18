import React from "react";
import Favorites from "./Favorites";

const Navbar = ({ onViewFavorites, isViewFavClicked, favoriteCount }) => {
  return (
    <div className="bg-base-100 shadow-sm fixed top-0 left-0 w-full z-50 border-b-2 border-gray-300 navbarBg">
      <div className="navbar container mx-auto p-4 flex flex-col sm:flex-row gap-4 justify-between">
        {/* Logo and title  */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex">
            <a className="flex gap-2 items-center" href="/">
              <img
                className="w-12 h-12"
                src="reacipes.png"
                alt="reacipes icon"
              />
              <h1 className="text-3xl md:text-4xl font-bold text-shadow-md patrick-hand">
                Reacipes
              </h1>
            </a>
          </div>
          {/* Favorites for small devices*/}
          <Favorites
            favoriteCount={favoriteCount}
            onViewFavorites={onViewFavorites}
            isViewFavClicked={isViewFavClicked}
            className="block sm:hidden dropdown-end"
          />{" "}
        </div>

        <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
          {/* Go to recipes section  */}
          <a
            href="#recipes"
            className="hidden sm:block text-lg font-semibold  hover:underline"
          >
            Recipes
          </a>

          {/* Favorites for big devices*/}
          <Favorites
            favoriteCount={favoriteCount}
            onViewFavorites={onViewFavorites}
            isViewFavClicked={isViewFavClicked}
            className="hidden sm:block dropdown-end"
          />

          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
