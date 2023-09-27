import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Main_Dish({ recipes }) {
  const { id } = useParams();

  console.log("RECIPES:", recipes);
  const mainRecipes = recipes.filter(
    (recipe) => recipe.fields.category === "Main Dish"
  );

  return (
    <div className="categories-s">
      <Navbar />
      <div className="recipeside1">
        {mainRecipes.map((recipe) => (
          <div className="recipecard1" key={recipe.sys.id}>
            <Link className="link-s1" to={`/mainDish/${id}`}>
              <h1 className="title-s1">{recipe.fields.recipeName}</h1>
            </Link>
            <img
              className="img-s1"
              src={recipe.fields.picture.fields.file.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
