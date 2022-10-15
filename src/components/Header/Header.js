import "./Header.scss";
import pizza from "../../assets/pizza-icon.png";

import { BsCart } from "react-icons/bs";
import { AiOutlineMail, AiOutlineRead } from "react-icons/ai";
import Filter from "../Filter/Filter";

function Header() {
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
      <Filter />
    </div>
  );
}
export default Header;
