import { useState } from "react";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Recipes from "./components/recipes/Recipes";
import Footer from "./footer/Footer";

function App() {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (recipeId) => {
    setFavorites((previous) => ({
      ...previous,
      [recipeId]: !previous[recipeId],
    }));
  };

  return (
    <>
      <Navbar favorites={favorites} />
      <Banner />
      <Recipes favorites={favorites} toggleFavorite={toggleFavorite} />
      <Footer />
    </>
  );
}

export default App;
