import "./Card.scss";
import { useEffect, useState } from "react";
import { BsCartPlus, BsCartCheckFill } from "react-icons/bs";

import { Spicy, SpicyHigh, SpicyExtream } from "./SpicinesLevel/SpicinesLevel";

const SpicinesLevel = [
  <Spicy className="card-spicines-level" />,
  <SpicyHigh className="card-spicines-level" />,
  <SpicyExtream className="card-spicines-level" />,
];

function Card(props) {
  const [flip, setFlip] = useState(false);

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
            <h4 className="card-price">{props.price}$</h4>
          </div>
          <p className="card-footer">Click for more</p>
        </div>
      ) : (
        <div className="card-back">
          <div className="card-back__content">
            <h3 className="card-title">{props.title}</h3>
            <p className="card-description">{props.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
export default Card;
