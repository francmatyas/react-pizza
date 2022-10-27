import "./Body.scss";
import { useState } from "react";

import pizza from "../../assets/pizza.png";

import Card from "../Card/Card";
import Filter from "../Filter/Filter";

function Body(props) {
  const [showCart, setShowCart] = useState(false);

  function addToCartHandler(data) {
    props.onCartAdd(data);
  }

  return (
    <div className="body">
      <div className="body-img"></div>
      <Filter />
      <div className="body-container">
        {props.products.map((product) => (
          <Card onCartAdd={addToCartHandler} img={pizza} {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
export default Body;
