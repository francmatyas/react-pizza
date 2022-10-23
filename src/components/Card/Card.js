import "./Card.scss";
import { useEffect, useState } from "react";
import {
  BsCartPlus,
  BsCartCheckFill,
  BsChevronCompactLeft,
} from "react-icons/bs";
import { TbHandClick } from "react-icons/tb";

import { Spicy, SpicyHigh, SpicyExtream } from "./SpicinesLevel/SpicinesLevel";

const SpicinesLevel = [
  <Spicy className="card-spicines-level" />,
  <SpicyHigh className="card-spicines-level" />,
  <SpicyExtream className="card-spicines-level" />,
];

function Card(props) {
  const [flip, setFlip] = useState(false);

  function addToCartHandler(event) {
    event.stopPropagation();
    console.log("add to cart");
  }

  return (
    <div
      className={flip ? "card card-flip" : "card"}
      onClick={() => setFlip(!flip)}
    >
      {!flip ? (
        <div className="card-front">
          <div className="card-cart__status">
            {props.cart ? (
              <BsCartCheckFill size={30} color="#7cb342" />
            ) : (
              <BsCartPlus size={30} />
            )}
          </div>
          <img className="card-img" src={props.img} />

          <div className="card-description">
            <div className="card-description__border"></div>
            <h3 className="card-title">{props.title}</h3>
            {SpicinesLevel[props.spicinesLevel]}
          </div>
          <div className="card-footer">
            <h4 className="card-price">{props.price}$</h4>
            <button onClick={addToCartHandler} className="card-cart_add">
              Add to cart
            </button>
            <p>
              Click for more <TbHandClick size={15} />{" "}
            </p>
          </div>
        </div>
      ) : (
        <div className="card-back">
          <div className="card-cart__status">
            {props.cart ? (
              <BsCartCheckFill size={30} color="#7cb342" />
            ) : (
              <BsCartPlus size={30} />
            )}
          </div>
          <h3 className="card-title__back">{props.title}</h3>
          {SpicinesLevel[props.spicinesLevel]}
          <p className="card-description__back">{props.description}</p>
          
          <div className="card-footer">
            <h4 className="card-price__back">{props.price}$</h4>
            <button onClick={addToCartHandler} className="card-cart_add">
              Add to cart
            </button>
            <p>
              Click for less <TbHandClick size={15} />{" "}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
export default Card;
