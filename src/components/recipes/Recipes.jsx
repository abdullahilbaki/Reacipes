import React, { Suspense } from "react";
import RecipeList from "./RecipeList";

const Loading = () => {
  return (
    <span className="loading loading-spinner loading-xl mx-auto block my-8"></span>
  );
};

const Recipes = ({ favorites, toggleFavorite }) => {
  return (
    <>
      <h1
        id="recipes"
        className="pt-40 sm:pt-30 mx-auto block text-center mb-4 sm:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-shadow-md patrick-hand"
      >
        Explore recipes
      </h1>

      <Suspense fallback={<Loading />}>
        <RecipeList favorites={favorites} toggleFavorite={toggleFavorite} />
      </Suspense>
    </>
  );
};

export default Recipes;
