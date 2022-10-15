import "./Filter.scss";

import {
  GiMeat,
  GiChiliPepper,
  GiMushroomGills,
  GiCheeseWedge,
  GiOlive,
} from "react-icons/gi";
import { FaCarrot, FaFish } from "react-icons/fa";

function Filter({ value, onChange }) {
  return (
    <div className="filter">
      <div className="filter-container">
        <button className="filter-option" id="filter-meat">
          <GiMeat size={35} className="filter-icon"/>
          <p>Meat</p>
        </button>
        <button className="filter-option" id="filter-fish">
          <FaFish size={35} className="filter-icon"/>
          <p>Fish</p>
        </button>
        <button className="filter-option" id="filter-veggie">
          <FaCarrot size={35} className="filter-icon"/>
          <p>Vegetarian</p>
        </button>
        <button className="filter-option" id="filter-spicy">
          <GiChiliPepper size={35} className="filter-icon"/>
          <p>Spicy</p>
        </button>
        <button className="filter-option" id="filter-mushrooms">
          <GiMushroomGills size={35} className="filter-icon"/>
          <p>Mushrooms</p>
        </button>
        <button className="filter-option" id="filter-cheese">
          <GiCheeseWedge size={35} className="filter-icon"/>
          <p>Cheese</p>
        </button>
        <button className="filter-option" id="filter-olives">
          <GiOlive size={35} className="filter-icon"/>
          <p>Olives</p>
        </button>
      </div>
    </div>
  );
}
export default Filter;
