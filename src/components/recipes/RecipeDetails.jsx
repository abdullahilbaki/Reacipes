import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const RecipeDetails = ({ recipe, modalRef }) => {
  const [showIngredients, setShowIngredients] = useState(true);
  const [showInstructions, setShowInstructions] = useState(false);
  const recipeQueryStr = recipe.name.split(" ").join("+");

  return (
    <dialog ref={modalRef} id="my_modal_2" className="modal">
      <div className="modal-box">
        <div className="flex flex-col-reverse sm:flex-row gap-4 justify-between">
          <div>
            <h3 className="font-bold text-lg mb-3">
              {recipe.name}{" "}
              <span className="font-light text-md">({recipe.difficulty})</span>
            </h3>
            <p className="mb-1">
              ⏱️ Prep Time: {recipe.prepTimeMinutes} minutes
            </p>
            <p>🔥 Cook Time: {recipe.cookTimeMinutes} minutes</p>
            <p>🍽️ Servings: {recipe.servings} people</p>
            <p>⚡ Calories: {recipe.caloriesPerServing} kcal per serving</p>
          </div>
          <a
            href={`https://www.youtube.com/results?search_query=${recipeQueryStr}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              className="rounded-lg h-40 object-cover"
            />
          </a>
        </div>
        <h3
          className="mt-4 font-bold text-lg mb-3 flex items-center cursor-pointer"
          onClick={() => setShowIngredients(!showIngredients)}
        >
          📝 <span className="hover:underline">Ingredients </span>
          <span
            className={`transition-transform duration-300 ${
              showIngredients ? "rotate-0" : "rotate-[-90deg]"
            }`}
          >
            <IoIosArrowDown />
          </span>
        </h3>{" "}
        {showIngredients && (
          <div>
            {recipe.ingredients.map((item, index) => (
              <span key={index}>
                {item}
                {index < recipe.ingredients.length - 1 && (
                  <span className="px-1"> &#8226; </span>
                )}
              </span>
            ))}
          </div>
        )}
        <h3
          className="mt-4 font-bold text-lg mb-3 flex items-center cursor-pointer "
          onClick={() => setShowInstructions(!showInstructions)}
        >
          👨‍🍳 <span className="hover:underline">Instructions</span>
          <span
            className={`transition-transform duration-300 ${
              showInstructions ? "rotate-0" : "rotate-[-90deg]"
            }`}
          >
            <IoIosArrowDown />
          </span>
        </h3>{" "}
        {showInstructions && (
          <div className="list-decimal">
            {recipe.instructions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </div>
        )}
        <div className="modal-action">
          <form method="dialog">
            <button className="btn rounded-full">Close</button>
          </form>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default RecipeDetails;
