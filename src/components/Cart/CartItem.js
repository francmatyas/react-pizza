import "./CartItem.scss";
import { useState } from "react";

import { FaPlus, FaMinus } from "react-icons/fa";
import Tags from "../Card/Tags";

function CartItem(props) {
    const [amount, setAmount] = useState(props.amount);

    function changeItemHandler(newAmount){
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
        <button className="cart-item__amount-btn" onClick={() => setAmount(amount + 1)}>
          <FaPlus size={10} />
        </button>
        {amount}
        <button className="cart-item__amount-btn" onClick={() => setAmount(amount - 1)}>
          <FaMinus size={10} />
        </button>
      </div>
      <div className="cart-item__footer">
        <h3>{props.price}€</h3>
        <button className="cart-item__remove">Remove</button>
      </div>
    </div>
  );
}
export default CartItem;
