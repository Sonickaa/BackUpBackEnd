import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function RecipeInstructions({ recipes }) {
  const navigate = useNavigate();
  const { id } = useParams();

  // Convert recipes to an array if it's not already
  const recipesArray = Array.isArray(recipes) ? recipes : [];

  const oneRecipe = recipesArray.find(
    (recipe) => recipe.recipe_id === Number(id)
  );

  console.log("ONE RECIPE", oneRecipe);
  console.log("RECIPES", recipesArray);

  return (
    <>
      <div className="singleMember">
        <Navbar />
        {oneRecipe && (
          <>
            <h3 className="rec-title">{oneRecipe.recipe_name}</h3>
            <h5 className="category-s">Category: {oneRecipe.category}</h5>
            <div className="singlerecipe">
              <img className="rec-img" src={oneRecipe.image_url} alt="Recipe" />
              <p>
                <b>Ingredients:</b>
                <br />
                <br />
                {oneRecipe.ingredients.map((ingredient, index) => (
                  <span key={index}>
                    {ingredient}
                    <br />
                  </span>
                ))}
              </p>
            </div>
            <div className="instruct">
              <p className="rec-instr-title">Instructions:</p>
              <p className="rec-instructions">
                {oneRecipe.instructions.map((instruction, index) => (
                  <span key={index}>
                    {instruction}
                    <br />
                  </span>
                ))}
              </p>
              <button onClick={() => navigate("/RecipeCards")}>
                Back to Recipes
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
