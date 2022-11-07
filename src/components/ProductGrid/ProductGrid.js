import "./ProductGrid.scss";
import { useState } from "react";

import pizza from "../../assets/pizza.png";

import Product from "../Card/Product";
import Filter from "../Header/Filter/Filter";

function Body(props) {
  const [showCart, setShowCart] = useState(false);

  function addToCartHandler(data) {
    props.onCartAdd(data);
  }

  return (
    <div className="product-grid">
      <div className="product-grid__img"></div>
      <Filter />
      <div className="product-grid__container">
        {props.products.map((product) => (
          <Product onCartAdd={addToCartHandler} img={pizza} {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
export default Body;
