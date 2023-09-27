import { NavLink } from "react-router-dom";

export default function Categories({ recipes }) {
  return (
    <>
      <div className="category-option-div">
        <NavLink to="/starters">
          <button className="category-option">Starter</button>
        </NavLink>
        <NavLink to="/mainDish">
          <button className="category-option">Main Dish</button>
        </NavLink>
        <NavLink to="/deserts">
          <button className="category-option">Desert</button>
        </NavLink>

        <NavLink to="/recipecards">
          <button className="category-option">All recipes</button>
        </NavLink>
      </div>
    </>
  );
}
