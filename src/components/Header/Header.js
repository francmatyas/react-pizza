import "./Header.scss";
import pizza from "../../assets/pizza-icon.png";
import { useState } from "react";

import { BsCart } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FiMap } from "react-icons/fi";
import { Badge } from "react-bootstrap";

function Header(props) {
  return (
    <div className="header">
      <div className="header-nav">
        <a href="/">
          <img href="/" src={pizza} className="header-container__logo" />
        </a>
        <a href="/cart" className="header-container__nav__item" id="header-nav__cart">
          <BsCart size={30} />
          <p>Cart</p>
          {props.cartCount > 0 && <Badge className="header-cart__counter" bg="danger" pill>{props.cartCount}</Badge>}
          
        </a>
        <a href="/delivery" className="header-container__nav__item">
          <FiMap size={30} />
          <p>Delivery</p>
        </a>
        <a href="/contact" className="header-container__nav__item">
          <AiOutlineMail size={30} />
          <p>Contact</p>
        </a>
      </div>
      {/* <h3 className="header-demo">React pizza DEMO</h3> */}
    </div>
  );
}
export default Header;
