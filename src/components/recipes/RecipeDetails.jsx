import React, { Fragment, useState } from "react";

const RecipeDetails = ({ recipe, modalRef }) => {
  const [showIngredients, setShowIngredients] = useState(true);
  const [showInstructions, setShowInstructions] = useState(false);

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
          <img
            src={recipe.image}
            alt={recipe.name}
            className="rounded-lg h-40 object-cover"
          />
        </div>
        <h3 className="mt-4 font-bold text-lg mb-3">
          📝{" "}
          <span
            className="cursor-pointer hover:underline"
            onClick={() => setShowIngredients(!showIngredients)}
          >
            Ingredients
          </span>
        </h3>{" "}
        {showIngredients && (
          <div className="flex flex-wrap gap-x-2">
            {recipe.ingredients.map((item, index) => (
              <Fragment key={index}>
                <p>{item}</p>
                <p>|</p>
              </Fragment>
            ))}
          </div>
        )}
        <h3 className="mt-4 font-bold text-lg mb-3">
          👨‍🍳{" "}
          <span
            className="cursor-pointer hover:underline"
            onClick={() => setShowInstructions(!showInstructions)}
          >
            Instructions
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
