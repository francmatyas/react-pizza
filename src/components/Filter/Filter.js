import "./Filter.scss";

import { useState } from "react";

import {
  GiMeat,
  GiChiliPepper,
  GiMushroomGills,
  GiCheeseWedge,
  GiOlive,
  GiGarlic,
} from "react-icons/gi";
import { FaCarrot, FaFish } from "react-icons/fa";

function Filter({ value, onChange }) {
  const [meat, setMeat] = useState(false);
  const [fish, setFish] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const [spicy, setSpicy] = useState(false);
  const [mushroom, setMushroom] = useState(false);
  const [cheese, setCheese] = useState(false);
  const [olive, setOlive] = useState(false);
  const [onion, setOnion] = useState(false);

  return (
    <div className="filter">
      <div className="filter-container">
        <button
          className="filter-option"
          id="filter-meat"
          onClick={() => setMeat(!meat)}
          style={{ color: meat ? "#e53935" : "#000" }}
        >
          <GiMeat size={35} className="filter-icon" />
          <p>Meat</p>
        </button>
        <button
          className="filter-option"
          id="filter-fish"
          onClick={() => setFish(!fish)}
          style={{ color: fish ? "#039be5" : "#000" }}
        >
          <FaFish size={35} className="filter-icon" />
          <p>Fish</p>
        </button>
        <button
          className="filter-option"
          id="filter-veggie"
          onClick={() => setVegetarian(!vegetarian)}
          style={{ color: vegetarian ? "#43a047" : "#000" }}
        >
          <FaCarrot size={35} className="filter-icon" />
          <p>Vegetarian</p>
        </button>
        <button
          className="filter-option"
          id="filter-spicy"
          onClick={() => setSpicy(!spicy)}
          style={{ color: spicy ? "#c62828" : "#000" }}
        >
          <GiChiliPepper size={35} className="filter-icon" />
          <p>Spicy</p>
        </button>
        <button
          className="filter-option"
          id="filter-mushrooms"
          onClick={() => setMushroom(!mushroom)}
          style={{ color: mushroom ? "#9e9e9e" : "#000" }}
        >
          <GiMushroomGills size={35} className="filter-icon" />
          <p>Mushrooms</p>
        </button>
        <button
          className="filter-option"
          id="filter-cheese"
          onClick={() => setCheese(!cheese)}
          style={{ color: cheese ? "#ffb300" : "#000" }}
        >
          <GiCheeseWedge size={35} className="filter-icon" />
          <p>Cheese</p>
        </button>
        <button
          className="filter-option"
          id="filter-olives"
          onClick={() => setOlive(!olive)}
          style={{ color: olive ? "#558b2f" : "#000" }}
        >
          <div className="icon-container">
            <GiOlive size={35} className="filter-icon" />
            <div className="diagonal-cross"></div>
          </div>

          <p>Olives</p>
        </button>
        <button
          className="filter-option"
          id="filter-onion"
          onClick={() => setOnion(!onion)}
          style={{ color: onion ? "#fbc02d" : "#000" }}
        >
          <div className="icon-container">
            <GiGarlic size={35} className="filter-icon" />
            <div className="diagonal-cross"></div>
          </div>
          <p>Onion</p>
        </button>
      </div>
    </div>
  );
}
export default Filter;
