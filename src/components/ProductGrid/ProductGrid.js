import "./ProductGrid.scss";

import pizza from "../../assets/pizza.png";

import Product from "../Product/Product";
import Filter from "../Header/Filter/Filter";

function Body(props) {
  function addToCartHandler(data) {
    props.onCartAdd(data);
  }
  function updateFilterHandler(data) {
    props.onFilterUpdate(data);
  }

  return (
    <div className="product-grid">
      <div className="product-grid__img"></div>
      <Filter filter={props.filter} onFilterUpdate={updateFilterHandler}/>
      <div className="product-grid__container">
        {props.products.map((product) => (
          <Product
            onCartAdd={addToCartHandler}
            img={pizza}
            {...product}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
}
export default Body;
