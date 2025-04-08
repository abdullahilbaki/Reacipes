import React from "react";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm fixed top-0 left-0 w-full z-50 border-b-2 border-gray-300 navbarBg">
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
              <h1 className="text-3xl md:text-4xl  font-bold text-shadow-md patrick-hand">
                Reacipes
              </h1>
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
          {/* Go to reacipes section  */}
          <a href="#recipes" className="hidden sm:block text-lg font-semibold  hover:underline">
            Recipes
          </a>

          {/* Favorites  */}
          <div className="dropdown dropdown-start hidden sm:block">
            <div tabIndex="0" role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="size-[1.7em]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>

                <span className="indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex="0"
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>

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
