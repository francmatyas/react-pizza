import "./Filter.scss";

import { useState, useEffect } from "react";

import {
  GiMeat,
  GiChiliPepper,
  GiMushroomGills,
  GiCheeseWedge,
  GiOlive,
  GiGarlic,
} from "react-icons/gi";
import { FaCarrot, FaFish } from "react-icons/fa";

function Filter(props) {
  const [meat, setMeat] = useState(props.filter.meat);
  const [fish, setFish] = useState(props.filter.fish);
  const [vegetarian, setVegetarian] = useState(props.filter.vegetarian);
  const [spicy, setSpicy] = useState(props.filter.spicy);
  const [mushroom, setMushroom] = useState(props.filter.mushroom);
  const [cheese, setCheese] = useState(props.filter.cheese);
  const [olive, setOlive] = useState(props.filter.olive);
  const [onion, setOnion] = useState(props.filter.onion);

  const [meatDisabled, setMeatDisabled] = useState(false);
  const [fishDisabled, setFishDisabled] = useState(false);
  const [vegetarianDisabled, setVegetarianDisabled] = useState(false);

  const [filterRender, setFilterRender] = useState(true);

  function meatFilterHandler() {
    if (meat) {
      setMeat(false);
      !fish && setVegetarianDisabled(false);
    }
    else{
      if(!vegetarian){
        setMeat(true);
        setVegetarianDisabled(true);
      }
    }
  }
  function fishFilterHandler() {
    if (fish) {
      setFish(false);
      !meat && setVegetarianDisabled(false);
    }
    else{
      if(!vegetarian){
        setFish(true);
        setVegetarianDisabled(true);
      }
    }
  }
  function vegetarianFilterHandler() {
    if (vegetarian) {
      setVegetarian(false);
      setMeatDisabled(false);
      setFishDisabled(false);
    }
    else{
      if(!meat && !fish){
        setVegetarian(true);
        setMeatDisabled(true);
        setFishDisabled(true);
      }
    }
  }

  console.log(meatDisabled, vegetarianDisabled)

  useEffect(() => {
    if (filterRender) {
      setFilterRender(false);
      return;
    }
    props.onFilterUpdate({
      meat,
      fish,
      vegetarian,
      spicy,
      mushroom,
      cheese,
      olive,
      onion,
    });
  }, [meat, fish, vegetarian, spicy, mushroom, cheese, olive, onion]);

  return (
    <div className="filter">
      <div className="filter-container">
        <button
          className={meatDisabled ? "filter-option disabled" : "filter-option"}
          id="filter-meat"
          onClick={meatFilterHandler}
          style={{ color: meat ? "#e53935" : "#000" }}
        >
          <GiMeat size={35} className="filter-icon" />
          <p>Meat</p>
        </button>
        <button
           className={fishDisabled ? "filter-option disabled" : "filter-option"}
          id="filter-fish"
          onClick={fishFilterHandler}
          style={{ color: fish ? "#039be5" : "#000" }}
        >
          <FaFish size={35} className="filter-icon" />
          <p>Fish</p>
        </button>
        <button
          className={vegetarianDisabled ? "filter-option disabled" : "filter-option"}
          id="filter-veggie"
          onClick={vegetarianFilterHandler}
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
          style={{ color: onion ? "#C78FAA" : "#000" }}
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
