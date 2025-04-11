const Favorites = ({
  className = "",
  favoriteCount,
  onViewFavorites,
  isViewFavClicked,
}) => {
  return (
    <>
      <div className={`${className} dropdown`}>
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

            {favoriteCount > 0 && (
              <span className="indicator-item">{favoriteCount}</span>
            )}
          </div>
        </div>

        <div
          tabIndex="0"
          className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
        >
          <div className="card-body">
            {favoriteCount > 0 ? (
              <>
                <span className="text-lg font-bold">
                  {favoriteCount} Recipes
                </span>
                <div className="card-actions">
                  <a href="#recipes"
                    className="btn btn-primary btn-block"
                    onClick={onViewFavorites}
                  >
                    {isViewFavClicked ? "All recipes" : "View favorites"}
                  </a>
                </div>
              </>
            ) : (
              <span className="text-lg font-bold">No favorites yet.</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Favorites;
