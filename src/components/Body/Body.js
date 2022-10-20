import "./Body.scss";
import { useState } from "react";

import pizza from "../../assets/pizza.png";

import Filter from "../Filter/Filter";
import Card from "../Card/Card";
import Header from "../Header/Header";
import Cart from "../Cart/Cart";

function Body(props) {
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="body">
      <div className="body-img"></div>
      {showCart && <Cart />}
      <Header />
      <div className="body-container">
        {props.products.map((product) => (
          <Card img={pizza} {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
export default Body;
