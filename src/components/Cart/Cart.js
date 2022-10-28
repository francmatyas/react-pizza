import "./Cart.scss";

function Cart() {
  return (
    <div className="cart">
      <div className="cart-container">
        <div className="cart-header">
          <h3>Shopping Cart</h3>
          <button className="cart__remove-all">
            <p>Remove all</p>
          </button>
        </div>

        <div className="cart-container__items"></div>
        <div className="cart-footer">
          <div className="cart-subtotal">
            <div className="cart-subtotal__count">
              <h4>Sub-Total</h4>
              <p>2 items</p>
            </div>
            <h3>10.45€</h3>
          </div>
          <button className="cart-checkout">Checkout</button>
        </div>
      </div>
    </div>
  );
}
export default Cart;
