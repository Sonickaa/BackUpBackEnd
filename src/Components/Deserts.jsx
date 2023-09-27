import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Deserts({ recipes }) {
  const { category } = useParams();
  /*   const oneRecipe = recipes && recipes.find((el) => el.sys.id === id);
  console.log("DESERT", oneRecipe);
  console.log("ID:", id);*/
  console.log("RECIPES:", recipes);
  const desertRecipes = recipes.filter(
    (recipe) => recipe.category === category
  );

  return (
    <div className="categories-s">
      <Navbar />
      <div className="recipeside1">
        {desertRecipes.map((recipe) => (
          <div className="recipecard1" key={recipe.sys.id}>
            <Link className="link-s1" to={`/deserts/${id}`}>
              <h1 className="title-s1">{recipe.fields.recipeName}</h1>
              {/*   <h2>{recipes?.fields?.category}</h2> */}
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
