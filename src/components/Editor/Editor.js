import "./Editor.scss";
import pizzaImg from "../../assets/pizza.png";

import { useState } from "react";

import EditorNav from "./EditorNav";

function Editor(props) {
  const [selected, setSelected] = useState(props.products[0]);

  const [title, setTitle] = useState(props.products[0].title);
  const [description, setDescription] = useState(props.products[0].description);
  const [price, setPrice] = useState(props.products[0].price);
  const [tags, setTags] = useState(props.products[0].tags);
  const [spicy, setSpicy] = useState(props.products[0].spicy);

  function handlePizzaSelect(product) {
    setSelected(product);
    setTitle(product.title);
    setDescription(product.description);
    setPrice(product.price);
    setTags(product.tags);
    setSpicy(product.spicy);
  }

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }
  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }
  function handlePriceChange(event) {
    setPrice(event.target.value);
  }
  function handleSpicyChange(event) {
    setSpicy(event.target.value);
  }

  return (
    <div className="editor">
      <EditorNav />
      <div className="editor__content">
        <div className="editor__select">
          {props.products.map((product) => (
            <div
              onClick={() => handlePizzaSelect(product)}
              className="editor__product"
              key={product.id}
              style={product.id == selected.id ? { border: "2px solid #f57c00" } : {}}
            >
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
          <button className="editor__add">Add Product</button>
          <div className="editor__fields">
            <div className="editor__inputs">
              <input
                value={title}
                onChange={handleTitleChange}
                className="editor__input"
                type="text"
                placeholder="Title"
              />
              <input
                value={price}
                onChange={handlePriceChange}
                className="editor__input"
                type="number"
                min={0}
                placeholder="Price"
              />
              <select
                value={spicy}
                onChange={handleSpicyChange}
                className="editor__input"
              >
                <option value={null}>Nonspicy</option>
                <option value={0}>Spicy</option>
                <option value={1}>Spicy High</option>
                <option value={2}>Spicy Extream</option>
              </select>
            </div>
            <textarea
              value={description}
              onChange={handleDescriptionChange}
              className="editor__description"
              placeholder="Description"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Editor;
