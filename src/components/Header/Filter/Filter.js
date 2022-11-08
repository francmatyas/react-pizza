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

function Filter(props) {
  /*
  function filterHandler(filter) {
    switch (filter) {
      case "meat":
        props.onFilterUpdate({ ...props.filter, meat: !props.filter.meat });
        break;
      case "fish":
        props.onFilterUpdate({ ...props.filter, fish: !props.filter.fish });
        break;
      case "vegetarian":
        props.onFilterUpdate({
          ...props.filter,
          vegetarian: !props.filter.vegetarian,
        });
        break;
      case "spicy":
        props.onFilterUpdate({ ...props.filter, spicy: !props.filter.spicy });
        break;
      case "mushroom":
        props.onFilterUpdate({
          ...props.filter,
          mushroom: !props.filter.mushroom,
        });
        break;
      case "cheese":
        props.onFilterUpdate({ ...props.filter, cheese: !props.filter.cheese });
        break;
      case "olive":
        props.onFilterUpdate({ ...props.filter, olive: !props.filter.olive });
        break;
      case "onion":
        props.onFilterUpdate({ ...props.filter, onion: !props.filter.onion });
        break;
      default:
        break;
    }
  }*/

  return (
    <div className="filter">
      <div className="filter-container">
        <button
          className="filter-option"
          id="filter-meat"
          onClick={() =>
            props.onFilterUpdate({ ...props.filter, meat: !props.filter.meat })
          }
          style={{ color: props.filter.meat ? "#e53935" : "#000" }}
        >
          <GiMeat size={35} className="filter-icon" />
          <p>Meat</p>
        </button>
        <button
          className="filter-option"
          id="filter-fish"
          onClick={() => {
            props.onFilterUpdate({ ...props.filter, fish: !props.filter.fish });
          }}
          style={{ color: props.filter.fish ? "#039be5" : "#000" }}
        >
          <FaFish size={35} className="filter-icon" />
          <p>Fish</p>
        </button>
        <button
          className="filter-option"
          id="filter-veggie"
          onClick={() => { 
            props.onFilterUpdate({ ...props.filter, vegetarian: !props.filter.vegetarian });
          }}
          style={{ color: props.filter.vegetarian ? "#43a047" : "#000" }}
        >
          <FaCarrot size={35} className="filter-icon" />
          <p>Vegetarian</p>
        </button>
        <button
          className="filter-option"
          id="filter-spicy"
          onClick={() => { 
            props.onFilterUpdate({ ...props.filter, spicy: !props.filter.spicy });
          }}
          style={{ color: props.filter.spicy ? "#c62828" : "#000" }}
        >
          <GiChiliPepper size={35} className="filter-icon" />
          <p>Spicy</p>
        </button>
        <button
          className="filter-option"
          id="filter-mushrooms"
          onClick={() => { 
            props.onFilterUpdate({ ...props.filter, mushroom: !props.filter.mushroom });
          }}
          style={{ color: props.filter.mushroom ? "#9e9e9e" : "#000" }}
        >
          <GiMushroomGills size={35} className="filter-icon" />
          <p>Mushrooms</p>
        </button>
        <button
          className="filter-option"
          id="filter-cheese"
          onClick={() => {
            props.onFilterUpdate({ ...props.filter, cheese: !props.filter.cheese });
          }}
          style={{ color: props.filter.cheese ? "#ffb300" : "#000" }}
        >
          <GiCheeseWedge size={35} className="filter-icon" />
          <p>Cheese</p>
        </button>
        <button
          className="filter-option"
          id="filter-olives"
          onClick={() => {
            props.onFilterUpdate({ ...props.filter, olive: !props.filter.olive });
          }}
          style={{ color: props.filter.olive ? "#558b2f" : "#000" }}
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
          onClick={() => {
            props.onFilterUpdate({ ...props.filter, onion: !props.filter.onion });
          }}
          style={{ color: props.filter.onion ? "#fbc02d" : "#000" }}
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
