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
import { Tooltip, OverlayTrigger } from "react-bootstrap";

function TagVeggie() {
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={
        <Tooltip id="tooltip-veggie">
          <strong>Vegetarian</strong>
        </Tooltip>
      }
    >
      <div
        className="tag"
        style={{
          backgroundColor: `rgba(${67}, ${160}, ${71}, ${0.25})`,
          border: "#43a047 solid 1px",
        }}
      >
        <FaCarrot size={25} />
      </div>
    </OverlayTrigger>
  );
}

function TagMeat() {
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={
        <Tooltip id="tooltip-meat">
          <strong>Meat</strong>
        </Tooltip>
      }
    >
      <div
        className="tag"
        style={{
          backgroundColor: `rgba(${229}, ${57}, ${53}, ${0.25})`,
          border: "#e53935 solid 1px",
        }}
      >
        <GiMeat size={25} />
      </div>
    </OverlayTrigger>
  );
}

function TagFish() {
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={
        <Tooltip id="tooltip-fish">
          <strong>Fish</strong>
        </Tooltip>
      }
    >
      <div
        className="tag"
        style={{
          backgroundColor: `rgba(${3}, ${155}, ${229}, ${0.25})`,
          border: "#039be5 solid 1px",
        }}
      >
        <FaFish size={25} />
      </div>
    </OverlayTrigger>
  );
}

function TagSpicy() {
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={
        <Tooltip id="tooltip-spicy">
          <strong>Spicy</strong>
        </Tooltip>
      }
    >
      <div
        className="tag"
        style={{
          backgroundColor: `rgba(${198}, ${40}, ${40}, ${0.25})`,
          border: "#c62828 solid 1px",
        }}
      >
        <GiChiliPepper size={25} />
      </div>
    </OverlayTrigger>
  );
}

function TagMushrooms() {
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={
        <Tooltip id="tooltip-mushrooms">
          <strong>Mushrooms</strong>
        </Tooltip>
      }
    >
      <div
        className="tag"
        style={{
          backgroundColor: `rgba(${158}, ${158}, ${158}, ${0.25})`,
          border: "#9e9e9e solid 1px",
        }}
      >
        <GiMushroomGills size={25} />
      </div>
    </OverlayTrigger>
  );
}

function TagCheese() {
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={
        <Tooltip id="tooltip-cheese">
          <strong>Cheese</strong>
        </Tooltip>
      }
    >
      <div
        className="tag"
        style={{
          backgroundColor: `rgba(${255}, ${179}, ${0}, ${0.25})`,
          border: "#ffb300 solid 1px",
        }}
      >
        <GiCheeseWedge size={25} />
      </div>
    </OverlayTrigger>
  );
}

function TagOlive() {
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={
        <Tooltip id="tooltip-olive">
          <strong>Olives</strong>
        </Tooltip>
      }
    >
      <div
        className="tag"
        style={{
          backgroundColor: `rgba(${85}, ${139}, ${47}, ${0.25})`,
          border: "#558b2f solid 1px",
        }}
      >
        <GiOlive size={25} />
      </div>
    </OverlayTrigger>
  );
}

function TagOnion() {
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={
        <Tooltip id="tooltip-onion">
          <strong>Onion</strong>
        </Tooltip>
      }
    >
      <div
        className="tag"
        style={{
          backgroundColor: `rgba(${199}, ${143}, ${170}, ${0.25})`,
          border: "#C78FAA solid 1px",
        }}
      >
        <GiGarlic size={25} />
      </div>
    </OverlayTrigger>
  );
}
const Tags = {
  veggie: { tag: <TagVeggie />, title: "Vegetarian" },
  meat: { tag: <TagMeat />, title: "Meat" },
  fish: { tag: <TagFish />, title: "Fish" },
  spicy: { tag: <TagSpicy />, title: "Spicy" },
  mushrooms: { tag: <TagMushrooms />, title: "Mushrooms" },
  cheese: { tag: <TagCheese />, title: "Cheese" },
  olive: { tag: <TagOlive />, title: "Olive" },
  onion: { tag: <TagOnion />, title: "Onion" },
};

export default Tags;
