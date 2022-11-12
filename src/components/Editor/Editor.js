import "./Editor.scss";
import pizzaImg from "../../assets/pizza.png";

import { useState } from "react";

import Tags from "../Product/Tags";
import EditorNav from "./EditorNav";

function Editor(props) {
  const [product, setProduct] = useState({});

  function handlePizzaSelect(product) {
    console.log(product);
    setProduct(product);
  }

  return (
    <div className="editor">
      <EditorNav />
      <div className="editor__content">
        <div className="editor__select">
          {props.products.map((product) => (
            <div onClick={() => handlePizzaSelect(product)} className="editor__product" key={product.id}>
              <div className="editor__product__name">{product.title}</div>
              <img
                className="editor__product__img"
                src={pizzaImg}
                alt="product"
              />
            </div>
          ))}
        </div>
        <div className="editor__edit">
          <input value={product.title}/>
          <input value={product.price}/>
          <div className="editor__tags"> 
            {Object.keys(Tags).map((tag) => Tags[tag].tag)}
          </div>
          <select value={product.spicinesLevel}>
            <option value={null}>Nonspicy</option>
            <option value={0}>Spicy</option>
            <option value={1}>Spicy High</option>
            <option value={2}>Spicy Extream</option>
          </select>
          <textarea value={product.description}/>

          <div className="editor__edit__tags"></div>
          
        </div>
      </div>
    </div>
  );
}
export default Editor;
