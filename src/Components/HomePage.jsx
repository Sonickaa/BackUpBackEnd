import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="johnEverything">
        <Navbar />
        <div className="frontTitle">
          <h1 className="johnH1">SVG</h1>
          <h2 className="johnP">
            Recipies from:
            <ul className="johnUl">
              <li className="johnLi">Sonia</li>
              <li className="johnLi">Vaishali</li>
              <li className="johnLi">Gianni</li>
            </ul>
          </h2>
        </div>
        <div className="buttonDiv">
          <NavLink to="/recipecards">
            <button className="johnButton">Start Cookin'</button>
          </NavLink>
        </div>
        <div className="cat-butt-div">
          <NavLink to="/categories">
            <button className="category-button">Categories</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
