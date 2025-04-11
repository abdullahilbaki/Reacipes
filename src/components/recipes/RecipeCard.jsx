import { faHeart, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RecipeCard = ({ recipe, toggleFavorite, isFavorite, className = "" }) => {
  return (
    <div className={`card bg-base-100 shadow-sm cursor-pointer ${className}`}>
      <figure className="relative">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="transition-transform duration-300 transform hover:scale-105 focus:scale-105"
        />
        <FontAwesomeIcon
          onClick={() => toggleFavorite(recipe.id)}
          icon={faHeart}
          className={`${
            isFavorite ? "text-red-500" : "text-gray-300"
          } absolute text-3xl top-[5%] right-[5%] transition-transform duration-300 transform hover:scale-125 active:scale-110 drop-shadow-lg`}
        />
      </figure>
      <div className="card-body flex ">
        <div className="flex items-center gap-2">
          {recipe.difficulty === "Easy" ? (
            <div className="badge badge-soft badge-info">
              {recipe.difficulty}
            </div>
          ) : (
            <div className="badge badge-soft badge-accent">
              {recipe.difficulty}
            </div>
          )}
          <div className="badge badge-ghost">{recipe.cuisine}</div>
        </div>
        <h2 className="card-title">{recipe.name}</h2>

        {/* rating */}
        <div className="flex gap-2 items-center">
          <div className="rating">
            <div className="mask mask-star" aria-label="1 star"></div>
            <div className="mask mask-star" aria-label="2 star"></div>
            <div className="mask mask-star" aria-label="3 star"></div>
            <div
              className="mask mask-star"
              aria-label="4 star"
              aria-current="true"
            ></div>
            <div className="mask mask-star" aria-label="5 star"></div>
          </div>
          <p className="text-lg font-medium">{recipe.rating}</p>
        </div>
        <p>Based on {recipe.reviewCount} reviews</p>

        <div className="mt-6 card-actions flex items-center gap-2 flex-wrap">
          <FontAwesomeIcon icon={faTag} className="text-lg" />
          {recipe.tags?.length > 0 &&
            recipe.tags.map((tag) => (
              <div key={tag} className="badge badge-soft badge-neutral">
                {tag}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
