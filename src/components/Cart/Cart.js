import "./Cart.scss";

import { useState } from "react";
import CartItem from "./CartItem";

function Cart(props) {
    const [cart, setCart] = useState(props.items);

    function changeCartHandler(amount){
        console.log(amount)
    }

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
          {cart.length > 0 ? (
            cart.map((item) => (
              <CartItem {...item} onItemChange={changeCartHandler}/>
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
