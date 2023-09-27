import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function Starters({ recipes }) {
  const { category } = useParams();
  const navigate = useNavigate();

  const starterRecipes = recipes.filter(
    (recipe) => recipe.category === "starter"
  );

  console.log("STARTT RECIPES:", starterRecipes);

  return (
    <>
      <div className="singleMember">
        <Navbar />
        {starterRecipes.map((recipe, index) => (
          <div key={index}>
            <h3 className="rec-title">{recipe.recipe_name}</h3>
            <h5 className="category-s">Category: {recipe.category}</h5>
            <div className="singlerecipe">
              <img className="rec-img" src={recipe.image_url} alt="Recipe" />
              <p>
                <b>Ingredients:</b>
                <br />
                <br />
                {recipe.ingredients?.map((ingredient, ingredientIndex) => (
                  <span key={ingredientIndex}>
                    {ingredient}
                    <br />
                  </span>
                ))}
              </p>
            </div>
            <div className="instruct">
              <p className="rec-instr-title">Instructions:</p>
              <p className="rec-instructions">
                {recipe.instructions?.map((instruction, instructionIndex) => (
                  <span key={instructionIndex}>
                    {instruction}
                    <br />
                  </span>
                ))}
              </p>
              <button onClick={() => navigate("/RecipeCards")}>
                Back to Recipes
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
