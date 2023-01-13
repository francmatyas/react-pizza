import "./ProductGrid.scss";

import pizza from "../../assets/pizza.png";

import Product from "../ProductGrid/Product/Product";
import Filter from "../Header/Filter/Filter";

function Body(props) {
  function addToCartHandler(data) {
    props.onCartAdd(data);
  }
  function updateFilterHandler(data) {
    props.onFilterUpdate(data);
  }
  console.log(props.products);

  return (
    <div className="product-grid">
      <div className="product-grid__img"></div>
      <Filter filter={props.filter} onFilterUpdate={updateFilterHandler} />
      <div className="product-grid__container">
        {props.products.length > 0 ? (
          props.products.map((product) => (
            <Product
              onCartAdd={addToCartHandler}
              img={pizza}
              {...product}
              key={product.id}
            />
          ))
        ) : (
          <div className="product-grid__container__empty">
            There is no pizza with such ingredients.
          </div>
        )}
      </div>
    </div>
  );
}
export default Body;
