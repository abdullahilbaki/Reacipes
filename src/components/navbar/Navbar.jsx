import React from "react";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto p-4 flex flex-col sm:flex-row gap-4 justify-between">
        {/* Logo and title  */}
        <div>
          <div className="flex">
            <a className="flex gap-2 items-center" href="/">
              <img
                className="w-12 h-12"
                src="reacipes.png"
                alt="reacipes icon"
              />
              <h1 className="font-bold text-2xl permanent-marker">Reacipes</h1>
            </a>
          </div>
        </div>

        <div className="flex items-center gap-8">
          {/* Go to reacipes section  */}
          <a href="#recipes" className="hidden sm:block text-lg font-semibold  hover:underline">
            Recipes
          </a>

          {/* Search box */}
          <label className="input w-auto">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              className="grow"
              placeholder="Search for a recipe"
            />
            <kbd className="kbd kbd-sm">⌘</kbd>
            <kbd className="kbd kbd-sm">K</kbd>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
