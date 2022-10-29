import "./Cart.scss";

import { BsTrash } from "react-icons/bs";
import { FaPlus, FaMinus } from "react-icons/fa";
import Tags from "../Card/Tags";

function Cart(props) {
  return (
    <div className="cart">
      <div className="cart-container">
        <div className="cart-header">
          <h4>Shopping Cart</h4>
          <button className="cart__remove-all">
            <p>Remove all</p>
          </button>
        </div>

        <div className="cart-container__items">
          {props.items.length > 0 ? (
            props.items.map((item) => (
              <div className="cart-item">
                <div className="cart-item__img">
                  <img src={item.img} />
                </div>
                <div className="cart-item__title">
                  <h3>{item.title}</h3>
                  <div className="cart-item__tags">
                    {typeof item.tags !== "undefined" &&
                      item.tags.length > 0 &&
                      item.tags.map((tag) => Tags[tag].tag)}
                  </div>
                </div>

                <div className="cart-item__amount">
                  <button className="cart-item__amount-btn">
                    <FaPlus size={10} />
                  </button>
                  {item.amount}
                  <button className="cart-item__amount-btn">
                    <FaMinus size={10} />
                  </button>
                </div>
                <div className="cart-item__footer">
                  <h3>{item.price}€</h3>
                  <button className="cart-item__remove">
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="cart-empty">
              <h3>Cart is empty</h3>
            </div>
          )}
        </div>

        <div className="cart-footer">
          <div className="cart-subtotal">
            <div className="cart-subtotal__count">
              <h4>Sub-Total</h4>
              <p>{props.count} items</p>
            </div>
            <h3>{props.total}€</h3>
          </div>
          <button className="cart-checkout">Checkout</button>
        </div>
      </div>
    </div>
  );
}
export default Cart;
