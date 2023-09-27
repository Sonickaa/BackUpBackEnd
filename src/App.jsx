import { useEffect } from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
/* import { createClient } from "contentful"; */
import RecipeCards from "./Components/RecipeCards";
import RecipeInstructions from "./Components/RecipeInstructions";
import HomePage from "./Components/Homepage";
import { Link } from "react-router-dom";
import Categories from "./Components/Categories";
import Deserts from "./Components/Deserts";
import Main_Dish from "./Components/Main_Dish";

function App() {
  const [recipes, setRecipes] = useState([]);

  const myAPI = "http://localhost:8000/recipes/";

  const getData = async () => {
    const res = await fetch(myAPI);
    const data = await res.json();
    setRecipes(data);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage recipes={recipes} />} />
        <Route path="recipecards" element={<RecipeCards recipes={recipes} />} />
        <Route
          path="recipeinstructions/:id"
          element={<RecipeInstructions recipes={recipes} />}
        />
        <Route path="/categories" element={<Categories recipes={recipes} />} />
        <Route
          path="/categories/:category"
          element={<Deserts recipes={recipes} />}
        />
        <Route
          path="deserts/:id"
          element={<RecipeInstructions recipes={recipes} />}
        />
        <Route path="mainDish" element={<Main_Dish recipes={recipes} />} />

        <Route
          path="mainDish/:id"
          element={<RecipeInstructions recipes={recipes} />}
        />
      </Routes>
      {/*      {recipes.map((recipe) => ( */}
      <>
        {/*      <h1>{recipe.recipe_name}</h1>
          <h2>{recipe.ingredients}</h2>
          <img src={recipe.image_url} alt="Recipe Image" />
          <p>{recipe.instructions}</p> */}
      </>
      {/*       ))} */}
    </>
  );
}

export default App;
