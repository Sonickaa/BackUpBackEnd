import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

export default function Categories({ recipes }) {
  return (
    <>
      <div className="randomName">
        <Navbar />
        <div className="category-option-div">
          <NavLink to="/starters">
            <button className="category-option">Starter</button>
          </NavLink>
          <NavLink to="/mainDish">
            <button className="category-option">Main Dish</button>
          </NavLink>
          <NavLink to="/desserts">
            <button className="category-option">Dessert</button>
          </NavLink>

          <NavLink to="/recipecards">
            <button className="category-option">All recipes</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
