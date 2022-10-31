import "./CartItem.scss";

import { FaPlus, FaMinus } from "react-icons/fa";
import Tags from "../Card/Tags";

function CartItem(props) {
  function increaseAmountHandler(){
    props.updateAmount(props, true);
  }
  function decreaseAmountHandler(){
    props.updateAmount(props, false);
  }
  function removeItemHandler(){
    props.removeItem(props);
  }


  return (
    <div className="cart-item">
      <div className="cart-item__img">
        <img src={props.img} />
      </div>
      <div className="cart-item__title">
        <h3>{props.title}</h3>
        <div className="cart-item__tags">
          {typeof props.tags !== "undefined" &&
            props.tags.length > 0 &&
            props.tags.map((tag) => Tags[tag].tag)}
        </div>
      </div>

      <div className="cart-item__amount">
        <button
          className="cart-item__amount-btn"
          onClick={increaseAmountHandler}
        >
          <FaPlus size={10} />
        </button>
        {props.amount}
        <button
          className="cart-item__amount-btn"
          onClick={decreaseAmountHandler}
        >
          <FaMinus size={10} />
        </button>
      </div>
      <div className="cart-item__footer">
        <h3>{props.price}€</h3>
        <button
          className="cart-item__remove"
          onClick={removeItemHandler}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
export default CartItem;
