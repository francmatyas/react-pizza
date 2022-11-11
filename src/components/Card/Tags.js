import "./Tags.scss";

import {
  GiMeat,
  GiChiliPepper,
  GiMushroomGills,
  GiCheeseWedge,
  GiOlive,
  GiGarlic,
} from "react-icons/gi";
import { FaCarrot, FaFish } from "react-icons/fa";

function TagVeggie() {
  return (
    <div
      className="tag"
      style={{
        backgroundColor: `rgba(${67}, ${160}, ${71}, ${0.25})`,
        border: "#43a047 solid 1px",
      }}
    >
      <FaCarrot size={25} />
    </div>
  );
}

function TagMeat() {
  return (
    <div
      className="tag"
      style={{
        backgroundColor: `rgba(${229}, ${57}, ${53}, ${0.25})`,
        border: "#e53935 solid 1px",
      }}
    >
      <GiMeat size={25} />
    </div>
  );
}

function TagFish() {
  return (
    <div
      className="tag"
      style={{
        backgroundColor: `rgba(${3}, ${155}, ${229}, ${0.25})`,
        border: "#039be5 solid 1px",
      }}
    >
      <FaFish size={25} />
    </div>
  );
}

function TagSpicy() {
  return (
    <div
      className="tag"
      style={{
        backgroundColor: `rgba(${198}, ${40}, ${40}, ${0.25})`,
        border: "#c62828 solid 1px",
      }}
    >
      <GiChiliPepper size={25} />
    </div>
  );
}

function TagMushrooms() {
  return (
    <div
      className="tag"
      style={{
        backgroundColor: `rgba(${158}, ${158}, ${158}, ${0.25})`,
        border: "#9e9e9e solid 1px",
      }}
    >
      <GiMushroomGills size={25} />
    </div>
  );
}

function TagCheese() {
  return (
    <div
      className="tag"
      style={{
        backgroundColor: `rgba(${255}, ${179}, ${0}, ${0.25})`,
        border: "#ffb300 solid 1px",
      }}
    >
      <GiCheeseWedge size={25} />
    </div>
  );
}

function TagOlive() {
  return (
    <div
      className="tag"
      style={{
        backgroundColor: `rgba(${85}, ${139}, ${47}, ${0.25})`,
        border: "#558b2f solid 1px",
      }}
    >
      <GiOlive size={25} />
    </div>
  );
}

function TagOnion() {
  return (
    <div
      className="tag"
      style={{
        backgroundColor: `rgba(${251}, ${192}, ${45}, ${0.25})`,
        border: "#fbc02d solid 1px",
      }}
    >
      <GiGarlic size={25} />
    </div>
  );
}
const Tags = {
  veggie: {tag: <TagVeggie/>, title: "Vegetarian"},
  meat: {tag: <TagMeat/>, title: "Meat"},
  fish: {tag: <TagFish/>, title: "Fish"},
  spicy: {tag: <TagSpicy/>, title: "Spicy"},
  mushrooms: {tag: <TagMushrooms/>, title: "Mushrooms"},
  cheese: {tag: <TagCheese/>, title: "Cheese"},
  olive: {tag: <TagOlive/>, title: "Olive"},
  onion: {tag: <TagOnion/>, title: "Onion"},
};
  
export default Tags;
