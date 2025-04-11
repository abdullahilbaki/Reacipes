import { useEffect, useState } from "react";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Recipes from "./components/recipes/Recipes";
import Footer from "./components/footer/Footer";

function App() {
  const [favorites, setFavorites] = useState({});
  const [isViewFavClicked, setIsViewFavClicked] = useState(false);
  const favoriteCount = Object.values(favorites).filter(Boolean).length;

  useEffect(() => {
    if (favoriteCount === 0) {
      setIsViewFavClicked(false);
    }
  }, [favoriteCount]);

  const onViewFavorites = () => {
    setIsViewFavClicked((prev) => !prev);
  };

  const toggleFavorite = (recipeId) => {
    setFavorites((previous) => ({
      ...previous,
      [recipeId]: !previous[recipeId],
    }));
  };

  return (
    <>
      <Navbar
        favorites={favorites}
        onViewFavorites={onViewFavorites}
        isViewFavClicked={isViewFavClicked}
        favoriteCount={favoriteCount}
      />
      <Banner />
      <Recipes
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        isViewFavClicked={isViewFavClicked}
        favoriteCount={favoriteCount}
      />
      <Footer />
    </>
  );
}

export default App;
