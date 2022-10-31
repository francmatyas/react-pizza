import "./Cart.scss";

import CartItem from "./CartItem";

function Cart(props) {
  function updateAmountHandler(data, amountAction) {
    props.onCartChange(data, amountAction);
  }
  function removeItemHandler(data) {
    props.onRemoveItem(data);
  }
  function removeAllHandler() {
    props.onRemoveAll();
  }

  return (
    <div className="cart">
      <div className="cart-container">
        <div className="cart-header">
          <h4>Shopping Cart</h4>
          <button className="cart__remove-all" onClick={removeAllHandler}>
            <p>Remove all</p>
          </button>
        </div>
        <div className="cart-container__items">
          {props.items.length > 0 ? (
            props.items.map((item) => (
              <CartItem
                {...item}
                updateAmount={updateAmountHandler}
                removeItem={removeItemHandler}
                key={Math.random()}
              />
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
