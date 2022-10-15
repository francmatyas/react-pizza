import "./Card.scss";
import { BsCartPlus, BsCartCheckFill } from "react-icons/bs";

function Card(props) {
  return (
    <div className="card">
      <div className="card-cart__status">
        {props.cart ? <BsCartCheckFill size={30} color="#7cb342"/> : <BsCartPlus size={30}/>}
        
      </div>
      <img className="card-img" src={props.img} />
      <div className="card-description">
        <div className="card-description__border"></div>
        <h3 className="card-title">Pizza</h3>
      </div>
    </div>
  );
}
export default Card;
