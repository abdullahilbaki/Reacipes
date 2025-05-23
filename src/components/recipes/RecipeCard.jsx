import { faHeart, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import RecipeDetails from "./RecipeDetails";
import Rating from "./Rating";
import { LazyLoadImage } from "react-lazy-load-image-component";

const RecipeCard = ({ recipe, toggleFavorite, isFavorite, className = "" }) => {
  const modalRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  const handleCardClick = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  return (
    <>
      <div
        className={`card bg-base-100 shadow-sm cursor-pointer ${className}`}
        onClick={handleCardClick}
      >
        <figure className="relative">
          <LazyLoadImage
            src={recipe.image}
            alt={recipe.name}
            loading="lazy"
            width="100%"
            height={300}
            onLoad={() => setLoaded(true)}
            className={`transition-all duration-500 transform hover:scale-105 focus:scale-105 ${
              loaded ? "blur-0" : "blur-md"
            }`}
            wrapperClassName="w-full"
            effect="opacity"
          />
          <FontAwesomeIcon
            onClick={(e) => {
              toggleFavorite(recipe.id);
              e.stopPropagation();
            }}
            icon={faHeart}
            className={`${
              isFavorite ? "text-red-500" : "text-gray-300"
            } absolute text-3xl top-[5%] right-[5%] transition-transform duration-300 transform hover:scale-125 active:scale-110 drop-shadow-lg`}
          />
        </figure>
        <div className="card-body flex">
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
            <Rating />
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

      {/* Recipe card details  */}
      <RecipeDetails recipe={recipe} modalRef={modalRef} />
    </>
  );
};

export default RecipeCard;
