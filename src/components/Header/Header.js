import "./Header.scss";
import pizza from "../../assets/pizza-icon.png";
import { useState } from "react";

import { BsCart } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import {FiMap} from "react-icons/fi";
import { Badge } from "react-bootstrap";
import Filter from "../Filter/Filter";

function Header() {
  const [cart, setCart] = useState(2);

  return (
    <div className="header">
      <div className="header-nav">
        <img src={pizza} className="header-container__logo"/>
        <button className="header-container__nav__item" id="header-nav__cart">
          <BsCart size={30} />
          <p>Cart</p>
        </button>
        <button className="header-container__nav__item">
          <FiMap size={30} />
          <p>Delivery</p>
        </button>
        <button className="header-container__nav__item">
          <AiOutlineMail size={30} />
          <p>Contact</p>
        </button>
      </div>
      <h3 className="header-demo">React pizza DEMO</h3>
      <Filter />
    </div>
  );
}
export default Header;
