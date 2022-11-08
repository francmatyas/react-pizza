import "./Header.scss";
import pizza from "../../assets/pizza-icon.png";

import { BsCart } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import {TbTruckDelivery} from 'react-icons/tb'
import { Badge } from "react-bootstrap";
import {Link} from 'react-router-dom'

function Header(props) {
  return (
    <div className="header">
      <div className="header-nav">
        <Link to={"/"}>
          <img href="/" src={pizza} className="header-container__logo" />
        </Link>
        <Link to={"/cart"} className="header-container__nav__item" id="header-nav__cart">
          <BsCart size={30} />
          <p>Cart</p>
          {props.cartCount > 0 && <Badge className="header-cart__counter" bg="danger" pill>{props.cartCount}</Badge>}
          
        </Link>
        <Link to={"/delivery"} className="header-container__nav__item">
          <TbTruckDelivery size={30} />
          <p>Delivery</p>
        </Link>
        <Link to={"/contact"} className="header-container__nav__item">
          <AiOutlineMail size={30} />
          <p>Contact</p>
        </Link>
      </div>
      {/* <h3 className="header-demo">React pizza DEMO</h3> */}
    </div>
  );
}
export default Header;
