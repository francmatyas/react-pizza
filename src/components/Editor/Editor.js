import "./Editor.scss";
import pizzaImg from "../../assets/pizza.png";

import { useState } from "react";

import EditorNav from "./EditorNav";
import { Form } from "react-bootstrap";

function Editor(props) {
  const [selected, setSelected] = useState(props.products[0]);

  const [title, setTitle] = useState(props.products[0].title);
  const [description, setDescription] = useState(props.products[0].description);
  const [price, setPrice] = useState(props.products[0].price);
  const [tags, setTags] = useState(props.products[0].tags);
  const [spicy, setSpicy] = useState(props.products[0].spicy);

  const [create, setCreate] = useState(false);

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
    setTags(
      tags.includes("spicy")
        ? tags.filter((tag) => tag !== "spicy")
        : [...tags, "spicy"]
    );
  }
  function handleCreateChange() {
    setCreate(!create);
    setTitle("");
    setDescription("");
    setPrice("");
    setTags([]);
    setSpicy(false);
  }

  console.log(tags);

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
              style={
                product.id == selected.id ? { border: "2px solid #f57c00" } : {}
              }
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
          <button
            onClick={handleCreateChange}
            className="editor__button button-add"
            id={create && "button-cancel"}
          >
            {create ? "Cancel" : "New Product"}
          </button>
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
            <div className="editor__tags">
              <Form>
                <Form.Check
                  type="switch"
                  label="Meat"
                  id="meat"
                  className="editor__tag"
                  checked={tags.includes("meat")}
                  onChange={() => {
                    setTags(
                      tags.includes("meat")
                        ? tags.filter((tag) => tag !== "meat")
                        : [...tags, "meat"]
                    );
                  }}
                />
                <Form.Check
                  type="switch"
                  label="Vegetarian"
                  id="vegetarian"
                  className="editor__tag"
                  checked={tags.includes("veggie")}
                  onChange={() => {
                    setTags(
                      tags.includes("veggie")
                        ? tags.filter((tag) => tag !== "veggie")
                        : [...tags, "veggie"]
                    );
                  }}
                />
                <Form.Check
                  type="switch"
                  label="Fish"
                  id="fish"
                  className="editor__tag"
                  checked={tags.includes("fish")}
                  onChange={() => {
                    setTags(
                      tags.includes("fish")
                        ? tags.filter((tag) => tag !== "fish")
                        : [...tags, "fish"]
                    );
                  }}
                />
                <Form.Check
                  type="switch"
                  label="Mushrooms"
                  id="mushrooms"
                  className="editor__tag"
                  checked={tags.includes("mushrooms")}
                  onChange={() => {
                    setTags(
                      tags.includes("mushrooms")
                        ? tags.filter((tag) => tag !== "mushrooms")
                        : [...tags, "mushrooms"]
                    );
                  }}
                />
                <Form.Check
                  type="switch"
                  label="Cheese"
                  id="cheese"
                  className="editor__tag"
                  checked={tags.includes("cheese")}
                  onChange={() => {
                    setTags(
                      tags.includes("cheese")
                        ? tags.filter((tag) => tag !== "cheese")
                        : [...tags, "cheese"]
                    );
                  }}
                />
                <Form.Check
                  type="switch"
                  label="Olives"
                  id="olives"
                  className="editor__tag"
                  checked={tags.includes("olives")}
                  onChange={() => {
                    setTags(
                      tags.includes("olives")
                        ? tags.filter((tag) => tag !== "olives")
                        : [...tags, "olives"]
                    );
                  }}
                />
                <Form.Check
                  type="switch"
                  label="Onion"
                  id="onion"
                  className="editor__tag"
                  checked={tags.includes("onion")}
                  onChange={() => {
                    setTags(
                      tags.includes("onion")
                        ? tags.filter((tag) => tag !== "onion")
                        : [...tags, "onion"]
                    );
                  }}
                />
              </Form>
            </div>
          </div>
          <div className="editor__edit__controls">
            {create ? (
              <button className="editor__button" id="button-submit">
                Submit
              </button>
            ) : (
              <button className="editor__button" id="button-delete">
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Editor;
