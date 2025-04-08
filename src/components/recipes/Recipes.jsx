import React, { Suspense, use } from "react";

const fetchRecipes = async () => {
  const response = await fetch("https://dummyjson.com/recipes");
  console.log("Response received:", response);
  if (!response.ok) {
    console.error("Fetch error:", response.status);
    throw new Error("Failed to fetch recipes.");
  }
  const data = await response.json();
  console.log("Data parsed:", data);
  return data.recipes;
};

const recipePromise = fetchRecipes();
const RecipeList = () => {
  const recipes = use(recipePromise);
  return (
    <>
      <div className="p-4 mt-4">
        <div className=" container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="card bg-base-100 shadow-sm">
              <figure>
                <img src={recipe.image} alt={recipe.name} />
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
                  <div className="badge badge-secondary">{recipe.cuisine}</div>
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
                <div className="mt-6 card-actions justify-end">
                  {recipe.tags.length > 0 &&
                    recipe.tags.map((tag) => (
                      <div className="badge badge-outline">{tag}</div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const Loading = () => {
  return (
    <span className="loading loading-spinner loading-xl mx-auto block my-8"></span>
  );
};

const Recipes = () => {
  return (
    <>
      <h1 id="recipes" className="mx-auto block text-center mb-4 sm:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-shadow-md patrick-hand">
        Explore reacipes
      </h1>

      <Suspense fallback={<Loading />}>
        <RecipeList />
      </Suspense>
    </>
  );
};

export default Recipes;
