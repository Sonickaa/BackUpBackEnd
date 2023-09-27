import { Link } from "react-router-dom";
import RecipeInstructions from "./RecipeInstructions";
import Navbar from "./Navbar";

export default function RecipeCards({ recipes }) {
  console.log("recipe cards up", recipes);

  return (
    <div className="newdiv">
      <Navbar />
      <div className="recipeside">
        {/*   {recipes.filter((filtered) => filtered.includes("desert"))} */}
        {recipes &&
          recipes.map((recipe) => (
            <div className="recipecard" key={recipe.recipe_id}>
              <Link
                className="link-s"
                to={`/recipeinstructions/${recipe.recipe_id}`}
              >
                <h1 className="title-s">{recipe.recipe_name}</h1>
              </Link>
              <img className="img-s" src={recipe.image_url} />
            </div>
          ))}
      </div>
    </div>
  );
}
