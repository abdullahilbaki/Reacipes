import React, { use } from "react";
import RecipeCard from "./RecipeCard";

const fetchRecipes = async () => {
  const response = await fetch("https://dummyjson.com/recipes");
  if (!response.ok) {
    throw new Error("Failed to fetch recipes.");
  }
  const data = await response.json();
  return data.recipes;
};

const recipePromise = fetchRecipes();
const RecipeList = ({ favorites, toggleFavorite, isViewFavClicked, favoriteCount }) => {
  const recipes = use(recipePromise);

  return (
    <>
      <div className="p-4 mt-4">
        <div className=" container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {recipes.map((recipe) => {
            const isFavorite = favorites[recipe.id] || false;
            return (
              <React.Fragment key={recipe.id}>
                {(isViewFavClicked && favoriteCount) ? (
                  <RecipeCard
                    toggleFavorite={toggleFavorite}
                    isFavorite={isFavorite}
                    recipe={recipe}
                    className={isFavorite || "hidden"}
                  />
                ) : (
                  <RecipeCard
                    toggleFavorite={toggleFavorite}
                    isFavorite={isFavorite}
                    recipe={recipe}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RecipeList;
