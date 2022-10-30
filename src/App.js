import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";

import { useState } from "react";

import DUMMY_PRODUCTS from "./data/DUMMY_PRODUCTS.json";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Delivery from "./components/Delivery/Delivery";
import Cart from "./components/Cart/Cart";
import {
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [products, setProducts] = useState(DUMMY_PRODUCTS);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  function addToCartHandler(data) {
    setCartCount(cartCount + 1);
    setCartTotal(cartTotal + data.price);

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === data.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === data.id ? { ...item, amount: item.amount + 1 } : item
        );
      } else {
        return [...prevCart, { ...data, amount: 1 }];
      }
    });

    setProducts((prevProducts) => {
      const existingItem = prevProducts.find((item) => item.id === data.id);
      if (existingItem) {
        return prevProducts.map((item) =>
          item.id === data.id ? { ...item, cart } : item
        );
      } else {
        return [...prevProducts, { ...data }];
      }
    });
  }

  return (
    <div className="App">
      <Header cartCount={cartCount} />
      <Routes>
        <Route path="/cart" element={<Cart total={cartTotal} count={cartCount} items={cart} />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route
          path="/"
          exact
          element={<Body products={products} onCartAdd={addToCartHandler} />}
        />
      </Routes>
    </div>
  );
}

export default App;