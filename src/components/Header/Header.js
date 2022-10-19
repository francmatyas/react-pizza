import "./Header.scss";
import pizza from "../../assets/pizza-icon.png";
import { useState } from "react";

import { BsCart } from "react-icons/bs";
import { AiOutlineMail, AiOutlineRead } from "react-icons/ai";
import Filter from "../Filter/Filter";

function Header() {
  const [cart, setCart] = useState(0);

  return (
    <div className="header">
      
      <div className="header-nav">
        <img src={pizza} className="header-container__logo"/>
        <div className="header-container__nav__item" id="header-nav__cart">
          <BsCart size={30} />
          <p>Cart</p>
        </div>
        <div className="header-container__nav__item">
          <AiOutlineRead size={30} />
          <p>About</p>
        </div>
        <div className="header-container__nav__item">
          <AiOutlineMail size={30} />
          <p>Contact</p>
        </div>
      </div>
      <h3>React pizza DEMO</h3>
      <Filter />
    </div>
  );
}
export default Header;
